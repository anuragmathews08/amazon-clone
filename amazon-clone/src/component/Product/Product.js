import React from "react";
import classes from "./Product.module.css";
import { useStateValue } from "../../Store/StateProvider";

function Product({ title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };


  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating star" key={i}>
                &#11088;
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="product_img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
