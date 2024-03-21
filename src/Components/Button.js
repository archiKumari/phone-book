import React from "react";
import { Button, Icon } from "semantic-ui-react";

function CustomButton({ buttonText, buttonClick, icon }) {
  const buttonStyle = {
    height: "40px",
    width: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    paddingLeft: "8px",
    paddingTop: "5px",
  }

  return (
    <Button circular animated="fade" color="teal" onClick={buttonClick}>
      <div style={buttonStyle}>
        <Button.Content hidden>{buttonText}</Button.Content>
        <Button.Content visible>
          <Icon name={icon} />
        </Button.Content>
      </div>
    </Button>
  );
}

export default CustomButton;
