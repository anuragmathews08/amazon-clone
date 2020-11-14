import React from "react";
import classes from "./Subtotal.module.css";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../Store/StateProvider";

function Subtotal() {
  const [state] = useStateValue();
  const totalPrice =
    state.basket.length > 0
      ? state.basket.reduce((sum, item) => sum + item.price, 0)
      : 0;

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(totalPrice) => (
          <>
            <p>
              Subtotal ({state.basket.length} items):
              <strong>{totalPrice}</strong>
            </p>
            <small className={classes.subtotal__gift}>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        thousandSpacing={"2s"}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
