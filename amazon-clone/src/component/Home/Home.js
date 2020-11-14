import React from "react";
import classes from "./Home.module.css";
import BannerImg from "../../assets/amazon_banner.jpg";
import Product from "../Product/Product";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/products", false, /\.(png|jpe?g|svg)$/)
);

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.home__container}>
        <img src={BannerImg} alt="Banner Img" className={classes.home__image} />
        <div className={classes.home__row}>
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={467}
            image={images[2]}
            rating={5}
          />
          <Product
            title="boAt Stone 170 5W Bluetooth Speaker(Black)"
            price={2900}
            image={images[0]}
            rating={4}
          />
        </div>
        <div className={classes.home__row}>
          <Product
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)"
            price={2774}
            image={images[1]}
            rating={4}
          />
          <Product
            title="Men's Puffer Down Jacket Removable Hood"
            price={1299}
            image={images[3]}
            rating={5}
          />
          <Product
            title="Samsung 27 inch 240 Hz, G-Sync Compatible"
            price={25999}
            image={images[4]}
            rating={4}
          />
        </div>

        <div className={classes.home__row}>
          <Product
            title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
            price={16499}
            image={images[5]}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
