import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./item";
import Pagination from '../Pagination';
import { perPage } from "../../config";

const Center = styled.div`
    text-align: center;
`;

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

const FETCH_ALL_ITEMS = gql`
    query FETCH_ALL_ITEMS($skip: Int = 0, $first: Int = ${perPage}) {
        items(first: $first, skip: $skip) {
            id
            title
            description
            price
            image
        }
    }
`;

class Items extends Component {
    renderItems({ loading, error, data }) {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
            <ItemsList>
                {data.items.map(item => <Item item={item} key={item.id} />)}
            </ItemsList>
        );
    }

    render() {
        const { page } = this.props;
        return (
            <Center>
                <Pagination page={page}/>
                <Query query={FETCH_ALL_ITEMS}
                    variables={{
                        skip: (page - 1) * perPage, 
                    }}
                >{this.renderItems}</Query>
                <Pagination page={page}/>
            </Center>
        );
    }
}

export default Items;
export { FETCH_ALL_ITEMS };