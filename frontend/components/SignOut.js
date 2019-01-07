import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { GET_LOGGED_IN_USER } from "./LoggedInUser";

const SIGN_OUT = gql`
	mutation SIGN_OUT {
		signout {
			id
			name
		}
	}
`;

const SignOutBtn = styled.span`
    display: inline-block;
    height: 50px;
	background: white;
	color: red;
	font-size: 1.5rem;
	padding: 4px;
    position: absolute;
    border: 1px solid black;
    bottom: 0;
    margin-bottom: -50px;
    left: 0;
    cursor: pointer;
`;

const Signout = props => (
	<Mutation
		mutation={SIGN_OUT}
		refetchQueries={[{ query: GET_LOGGED_IN_USER }]}
	>
        {(signOut, { loading }) => (
            <SignOutBtn onClick={signOut}>Sign Out</SignOutBtn>
        )}
	</Mutation>
);

export default Signout;
