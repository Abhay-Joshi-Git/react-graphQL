import React, { Component } from 'react';
import Items from '../components/items/Items';

const ItemsPage = props => (
    <Items page={+props.query.page || 1}/>
);

export default ItemsPage;