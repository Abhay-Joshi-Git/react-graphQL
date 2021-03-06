import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { GET_LOGGED_IN_USER } from "./LoggedInUser";

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

class Signin extends Component {
	state = {
		password: "",
		email: ""
	};
	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<Mutation
				mutation={SIGNIN_MUTATION}
				variables={this.state}
				refetchQueries={[{ query: GET_LOGGED_IN_USER }]}
			>
				{(signup, { error, loading, called }) => {
					console.log('called --- ', loading, called);
					if (!loading && !error && called && this.props.emptyOnSingIn) {
						return null;
					}
					return (
						<Form
							method="post"
							onSubmit={async e => {
								e.preventDefault();
								await signup();
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Sign in to your account</h2>
								<Error error={error} />
								<label htmlFor="email">
									Email
									<input
										type="email"
										name="email"
										placeholder="email"
										value={this.state.email}
										onChange={this.saveToState}
									/>
								</label>
								<label htmlFor="password">
									Password
									<input
										type="password"
										name="password"
										placeholder="password"
										value={this.state.password}
										onChange={this.saveToState}
									/>
								</label>

								<button type="submit">Sign In!</button>
							</fieldset>
						</Form>
					);
				}}
			</Mutation>
		);
	}
}

export default Signin;
