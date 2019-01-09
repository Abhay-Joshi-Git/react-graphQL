import { Query } from "react-apollo";
import { GET_LOGGED_IN_USER } from "./LoggedInUser";
import SignIn from "./SignIn";

const LoggedInUserAuthWrapper = props => (
	<Query query={GET_LOGGED_IN_USER}>
		{({ data, loading }) => {
			if (loading) {
				return <p>Loading...</p>;
			}
			if (!data.getLoggedInUser) {
				return (
					<div>
						<p>Please sign in</p>
						<SignIn emptyOnSingIn={true}/>
					</div>
				);
            }
            return props.children
		}}
	</Query>
);

export default LoggedInUserAuthWrapper;
