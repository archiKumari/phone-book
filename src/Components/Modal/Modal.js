import React from 'react';
import './Modal.css'
import CustomButton from '../Button'

function Modal({ isOpen, onClose, contact, onEdit, onDelete }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          {contact && (
            <div>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Email:</strong> {contact.email}</p>
            </div>
          )}
          <div>
            <CustomButton buttonClick={onEdit} buttonText="Edit" icon="pencil" />
            <CustomButton buttonClick={onDelete} buttonText="Delete" icon="trash alternate" />
            <CustomButton buttonClick={onClose} buttonText="Close" icon="close"/>
            {/* <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onClose}>Close</button> */}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
