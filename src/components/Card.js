import React from 'react';
import './Card.css';

const Card = ({ title, price, category, image }) => {
    return(
        <div className="Card">
            <img alt="product" src={image}/>
            <div className="Card-info">
                <h4>{title}</h4>
                <h3>{price}$</h3>
                <h4 className="Card-info-category">{category}</h4>
            </div>
            <div className="Card-btn">
                <button>View Product</button>
            </div>
        </div>
    );
}

export default Card;