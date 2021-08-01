import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({ products }) => {
    return(
        <div className="CardList-Container">
            {
                products.map((product, index)=>{
                    return(
                        <Card 
                            key={index}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;