import React from "react";
import classes from "./Product.module.css";
import image1 from "../../Image/image1.png";
import image2 from "../../Image/image2.png";
import image3 from "../../Image/image3.png";
export default function Product() {
  return (
    <div className={classes.product}>
      <div className={classes.text}>
        <h1>Some show cards</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          minima praesentium ipsam sit et expedita ullam dolore, enim dolorem
          labore quis, ad corrupti esse tempora quam dicta id illo similique
          consequatur obcaecati sequi voluptas! Quas
        </p>
      </div>

      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://www.zillow.com/" target="_blank">
              <img src={image1} alt="" />
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://www.zillow.com/" target="_blank">
              <img src={image2} alt="" />
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://custom.ultimateears.com/" target="_blank">
              <img src={image3} alt="" />
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://www.zillow.com/" target="_blank">
              <img src={image2} alt="" />
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://custom.ultimateears.com/" target="_blank">
              <img src={image3} alt="" />
            </a>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.circle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.imageContainer}>
            <a href="https://www.zillow.com/" target="_blank">
              <img src={image2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
