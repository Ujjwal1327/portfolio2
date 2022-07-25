import classes from "./Intro.module.css";
import man from "../../Image/boy1.png";
export default function Intro() {
  return (
    <div className={classes.intro}>
      <div className={classes.left}>
        <div className={classes.text}>
          <h4>Hello, My name is</h4>
          <h2>Ujjwal Raj</h2>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.wrapperItem}>
            <h4>FreeLancer</h4>
            <h4>Web Developer</h4>
            <h4>Web Designer</h4>
            <h4>Front End Developer</h4>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. laboriosam
          eligendi assumenda. Eum, veniam! Quod consequatur iusto voluptat quos,
          asperiores impedit eveniet porr
        </p>
      </div>
      <div className={classes.right}>
        <div className={classes.bg}></div>
        <img src={man} alt="" />
      </div>
    </div>
  );
}
