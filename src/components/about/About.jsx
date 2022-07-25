import React from "react";
import classes from "./Aboout.module.css";
import about from "../../Image/about.jpg";
import award from "../../Image/award.png";
export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.left}>
        <div></div>
        <img src={about} alt="" />
      </div>
      <div className={classes.right}>
        <h4>About Me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, alias.
          In laudantium neque similique consequatur ut quae accusantium
          quibusdam, voluptatum corporis molestias deleniti suscipit molestiae
          eius laborum animi aperiam illo!
        </p>
        <div className={classes.collection}>
          <img src={award} alt="" />
          <div className={classes.text}>
            <p>Design Award 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
