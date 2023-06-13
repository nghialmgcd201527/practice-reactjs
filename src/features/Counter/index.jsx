import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const hanldeIncreaseClick = () => {
    const action = increase(); // action creator
    dispatch(action);
  };
  const hanldeDecreaseClick = () => {
    const action = decrease(); // action creator
    dispatch(action);
  };

  return (
    <div className={styles.counter}>
      Counter {count}
      <div>
        <Button className={classes.root} onClick={hanldeIncreaseClick}>
          Increment
        </Button>
        <Button className={classes.root} onClick={hanldeDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
