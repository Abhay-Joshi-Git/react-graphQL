import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import NavStyles from "../../styles/NavStyles";
import LoggedInUser from "../../LoggedInUser";
import UserAccount from './UserAccount';

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const Nav = () => (
	<LoggedInUser>
		{({ data }) => {
			const user = data.getLoggedInUser;
			return (
				<NavStyles>
					<Link href="/items">
						<a>Shop</a>
					</Link>
					{user ? (
						<React.Fragment>
							<Link href="/sell">
								<a>Sell</a>
							</Link>
							<Link href="/orders">
								<a>Orders</a>
							</Link>
							<UserAccount />
						</React.Fragment>
					) : (
						<Link href="/signup">
							<a>Sign In</a>
						</Link>
					)}
				</NavStyles>
			);
		}}
	</LoggedInUser>
);

export default Nav;
