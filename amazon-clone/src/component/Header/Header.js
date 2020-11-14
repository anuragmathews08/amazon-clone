import React from "react";
import classes from "./Header.module.css";
import amzLogo from "../../assets/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Store/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [state] = useStateValue();

  const basketClass = [
    classes.header__optionLineTwo,
    classes.header__basketCount,
  ];

  const loginHandler = () => {
    if (state.user) {
      auth.signOut();
    }
  };

  return (
    <div className={classes.header}>
      <Link to="/">
        <img src={amzLogo} className={classes.header__logo} alt="amazon-logo" />
      </Link>

      <div className={classes.header__search}>
        <input className={classes.header__searchInput} type="text" />
        <SearchIcon className={classes.header__searchIcon} />
      </div>

      <div className={classes.header__nav}>
        <Link to={state.user === null ? "/login" : ""}>
          <div onClick={loginHandler} className={classes.header__options}>
            <span className={classes.header__optionLineOne}>
              {state.user !== null
                ? `Hello ${state.user.email}`
                : `Hello User!`}
            </span>
            <span className={classes.header__optionLineTwo}>
              {state.user !== null ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={classes.header__options}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__options}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={classes.header__basket}>
            <ShoppingCartIcon className={classes.shoppingBasket} />
            <span className={basketClass.join(" ")}>
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
