import React from "react";

const Fruits = (props) => {
    return (
        <div>
            {props.fruits.map((fruit) => (
                <h2 key={fruit.id}>{fruit.fruitName}</h2>
            ))}
        </div>
    );
}

export default Fruits;