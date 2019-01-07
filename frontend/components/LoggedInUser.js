import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_LOGGED_IN_USER = gql`
    query GET_LOGGED_IN_USER {
        getLoggedInUser {
            id
            name
            email
        }
    }
`;

const LoggedInUser = props => (
    <Query query={GET_LOGGED_IN_USER} {...props}>
        {props.children}
    </Query>
)

export default LoggedInUser;
export { GET_LOGGED_IN_USER }
