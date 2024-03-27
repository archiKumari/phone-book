import React from "react";
import { Button, ButtonContent, Icon } from "semantic-ui-react";

function IconButton({ iconName, buttonText, onButtonClick }) {
  const iconButtonStyle = {
    backgroundColor:"rgba(255,255,255,0.6)",
    color: "rgba(0,128,129,1)",
    borderRadius:"5px",
    marginRight:"20px",
    fontSize: "15px",
    width:"40%"
  };
  return (
    <Button style={iconButtonStyle} animated="vertical" onClick={onButtonClick}>
      <ButtonContent hidden>{buttonText}</ButtonContent>
      <ButtonContent visible>
        <Icon name={iconName} />
      </ButtonContent>
    </Button>
  );
}

export default IconButton;
