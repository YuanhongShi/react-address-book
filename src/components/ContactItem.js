import React from 'react'
import { FiEdit, FiDelete } from 'react-icons/fi';
import { AiOutlineStar,  AiFillStar } from 'react-icons/ai';
import {Col} from 'react-bootstrap'

export default function ContactItem({id, firstName, email, phone, isFavorite, editContact, removeContact, toggleFavorite, reviewContactModal}) {

  return (
    <div className="form-control-contact-item" key={id} >
      <Col sm={3} style={{paddingLeft: 0}} onClick={() => reviewContactModal(id)}>
        <p>{firstName}</p>
      </Col>
      <Col sm={5} onClick={() => reviewContactModal(id)}>
        <p>{email}</p>
      </Col>
      <Col sm={2} onClick={() => reviewContactModal(id)}>
        <p>{phone}</p>
      </Col>
      <div className="btn-container">
        <button type="button" className="fav-btn" onClick={() => toggleFavorite(id)}>
          {isFavorite ? <AiFillStar/> : <AiOutlineStar/>}
        </button>
        <button type="button" className="edit-btn" onClick={() => editContact(id)}>
          <FiEdit/>
        </button>
        <button type="button" className="delete-btn" onClick={() => removeContact(id)}>
          <FiDelete/>
        </button>                
      </div>
    </div>
  );
}
