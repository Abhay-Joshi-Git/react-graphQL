import React from "react";
import ItemStyles from "../styles/ItemStyles";
import Title from "../styles/Title";
import Price from "../styles/PriceTag";
import Link from "next/link";

const Item = props => {
    const { item } = props;
    console.log('item', item);
    return (
        <ItemStyles>
            {item.image && <img src={item.image} alt={item.title} />}

            <Title>
                <Link
                    href={{
                        pathname: "/item",
                        query: { id: item.id }
                    }}
                >
                    <a>{item.title}</a>
                </Link>
            </Title>
            <Price>{item.price}</Price>
            <p>{item.description}</p>
            <div className="buttonList">
                <Link
                    href={{
                        pathname: "update",
                        query: { id: item.id }
                    }}
                >
                    <a>Edit </a>
                </Link>
                <button />
                <button />
            </div>
        </ItemStyles>
    );
};

export default Item;
