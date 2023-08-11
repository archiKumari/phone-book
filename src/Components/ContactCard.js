import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, contactNumber } = contact;

  const avatartStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "teal",
    color: "white",
    fontSize: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  };

  return (
    <Card>
      <Card.Content>
        {/* <Link to={{ pathname: `/contact/${id}`, state: { contact } }}> */}
        <Link to={{ pathname: `/contact/${id}`}}>
          <div style={avatartStyle}>{name[0].toUpperCase()}</div>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{email}</Card.Meta>
          <Card.Description>{contactNumber}</Card.Description>
        </Link>
      </Card.Content>
    </Card>
  );

  //   return (
  //     <Item>
  //         <Link to={{ pathname: `/contact/${id}`, state: { contact } }}>
  //       <Item.Image
  //         style={{
  //           backgroundColor: "teal",
  //           color: "white",
  //           width: "80px",
  //           height: "80px",
  //           fontSize: "40px",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           alignSelf: "center",
  //           borderRadius: "50%",
  //           marginRight:"20px",
  //         }}
  //       >
  //         <span style={{ fontSize: "40px" }}>
  //           {contact.name[0].toUpperCase()}
  //         </span>
  //       </Item.Image>
  //       </Link>
  //       <Item.Content verticalAlign="middle">
  //         <Item.Header>{name}</Item.Header>
  //         <Item.Description>{contactNumber}</Item.Description>
  //       </Item.Content>
  //     </Item>
  //   );
};

export default ContactCard;
