import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Item from "./item";
import styled from "styled-components";

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
    query FETCH_ALL_ITEMS {
        items {
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
        return (
            <Center>
                <Query query={FETCH_ALL_ITEMS}>{this.renderItems}</Query>
            </Center>
        );
    }
}

export default Items;
