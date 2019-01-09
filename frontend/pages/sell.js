import CreateItem from "../components/items/CreateItem";
import LoggedInUserAuth from "../components/LoggedInUserAuth";

const Sell = props => (
	<div>
		<LoggedInUserAuth>
			<CreateItem />
		</LoggedInUserAuth>
	</div>
);

export default Sell;
