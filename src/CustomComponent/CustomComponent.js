import React from "react";
import classes from "./CustomComponent.module.css";

const CustomComponent = props => {
  const { image, message, receivedTime } = props.data;
 

  return (
    <div className={classes.card}>
      <div className={classes.content} >
          <div className={classes.image}>
            <img src={image} alt='Person ' />
          </div>
        <div className={classes.message}>
          <div className={classes.text}>{message}</div>
          <div className={classes.time}>{receivedTime}</div>
        </div>
      </div>
      <div className={classes.options}>
        <div className={classes.option}>&hellip;</div>
        <div className={classes.option} title='Mark as Read'>
          &bull;
        </div>
      </div>
    </div>
  );
};
export default CustomComponent;
