import React from "react";
import classes from "./Checkout.module.css";
import amazonAd from "../../assets/amazon_ad.jpg";

import { useStateValue } from "../../Store/StateProvider";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img className={classes.checkout__Ad} src={amazonAd} alt="ad" />
        {basket.length === 0 ? (
          <div className={classes.checkout__title}>
            <h2>Your shopping Basket is empty</h2>
            <p>
              You have not item in your shopping basket. To buy one or more item
              click "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className={classes.checkout__title}>Your shopping Basket</h2>
            {/* list of all the items in the basket */}
            {basket.map((item,index) => (
              <CheckoutProduct 
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={index}
              />
            ))}
          </div>
        )}
      </div>

      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
