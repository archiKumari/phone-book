import React from "react";
import { Button, Icon } from "semantic-ui-react";

function CircularButton({ buttonText, buttonClick, icon }) {
  const buttonStyle = {
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    paddingLeft: "8px",
    paddingTop: "5px",
    marginLeft:"5px",
  }

  return (
    <Button circular floated="right" color="teal" animated="fade" onClick={buttonClick}>
      <div style={buttonStyle}>
        <Button.Content hidden>{buttonText}</Button.Content>
        <Button.Content visible>
          <Icon name={icon} />
        </Button.Content>
      </div>
    </Button>
  );
}

export default CircularButton;
