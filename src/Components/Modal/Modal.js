import React from "react";
import "./Modal.css";
import { ButtonGroup } from "semantic-ui-react";
import IconButton from "../CustomButtons/IconButton";

function Modal({ isOpen, onClose, contact, onEdit, onDelete }) {
  return (
    isOpen && (
      <div className="modal">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">
          <img className="avatar-style" src={contact.image_source} />

          <div className="text-container">
            <div>
              <p className="heading">Name</p>
              <p className="subtext">{contact.name}</p>
              <p className="heading">Contact</p>
              <p className="subtext">{contact.contact}</p>
              <p className="heading">Email</p>
              <p className="subtext">{contact.email}</p>
            </div>
            <ButtonGroup floated="right">
              <IconButton
                iconName="pencil"
                buttonText="Edit"
                onButtonClick={onEdit}
              />

              <IconButton
                iconName="heart"
                buttonText="Favorite"
                onButtonClick={onClose}
              />

              <IconButton
                iconName="trash alternate"
                buttonText="Delete"
                onButtonClick={onDelete}
              />
            </ButtonGroup>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
