import React from "react";
import classes from "./CheckoutProduct.module.css";
import {useStateValue} from '../../../Store/StateProvider';

const CheckoutProduct = (props) => {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            title: props.title
        })
    };

  return (
    <div className={classes.checkoutProduct}>
      <img src={props.image} alt="Product" />
      <div className={classes.product__info}>
        <p className={classes.product__title}>{props.title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating star" key={i}>
                &#11088;
              </span>
            ))}
        </div>
      <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
