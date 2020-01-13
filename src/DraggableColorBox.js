import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: " 0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6px"
  }
});

function DraggableColorBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.color}
    </div>
  );
}

export default DraggableColorBox;
