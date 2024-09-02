import React from "react";
import "./index.css"
import Phones from "../../../public/data";
    const ProductCard = Phones.map((props)=>{
        return (
            <div>
              <img src={props.image} alt="" />
              <h2>{props.title}</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
                dolor autem minima earum maiores totam rem aliquid nemo nam, dolores
                exercitationem amet, error voluptatem fuga officiis architecto
                praesentium inventore officia?
              </p>
              <span>price: {props.price}$</span>
        
              <br />
              <br />
              <br />
              <br />
              <button>ADD To Cart</button>
            </div>
          );
    })

export default ProductCard;