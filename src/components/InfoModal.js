import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../contexts/Context'
import defaultImg from '../img/default.jpg'

const InfoModal = ({contact}) => {
  const {isModalOpen, closeModal} = useGlobalContext();
  const [person, setPerson] = useState(contact);

  React.useEffect(() => {
    setPerson(contact);
  }, [contact]);

  //console.log(contact);

  return <div className={`modal-overlay ${ isModalOpen ? 'show-modal':''}`}>
    <div className="modal-container">
      <h3>contact's info</h3>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button> 
      <form  className="form-info">
        <div className="form-info-head">
          <img src={defaultImg} alt="user"/>
          <p>{person.firstName}</p>
        </div>  
        <div className="form-info-body">
          <h4>Contact details</h4>      
          <div className="form-info-detail">
            <label htmlFor="email">Email:</label>
            <p>{person.email}</p>
          </div>   
          <div className="form-info-detail">
            <label htmlFor="phone">Phone:</label>
            <p>{person.phone}</p>
          </div>
          <div className="form-info-detail">
            <label htmlFor="address">Address:</label>
            <p>{person.address}</p>
          </div>
        </div>
           
      </form>
    </div>
  </div>
}

export default InfoModal
