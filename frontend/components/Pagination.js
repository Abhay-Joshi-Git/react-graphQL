import React from "react";
import PaginationStyles from "./styles/PaginationStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Link from "next/link";
import { perPage } from "../config";

const ITEMS_CONNECTION = gql`
	query ITEMS_CONNECTION {
		itemsConnection {
			aggregate {
				count
			}
		}
	}
`;

const Pagination = props => (
	<Query query={ITEMS_CONNECTION}>
		{({ data, loading, error }) => {
			if (loading) return <div>Loading...</div>;
            const { page } = props;
			const count = data.itemsConnection.aggregate.count;
            const noOfPages = Math.ceil(count / perPage);
			return (
				<PaginationStyles>
					<Link prefetch
						href={{
							pathname: "items",
							query: { page: page - 1 }
						}}
					>
						<a  className="prev" aria-disabled={page <= 1}> {`<<`} Prev</a>
					</Link>
					<span>
						Page {page} of {noOfPages}
					</span>
					<span>Total {count} items</span>
                    <Link prefetch
						href={{
							pathname: "items",
							query: { page: page + 1 }
						}}
					>
						<a  className="prev" aria-disabled={page >= noOfPages}> {`>>`} Next</a>
					</Link>
				</PaginationStyles>
			);
		}}
	</Query>
);

export default Pagination;
