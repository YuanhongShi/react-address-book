import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../contexts/Context'
// import Alert from './Alert'

const EditModal = ({contact, editContact}) => {
  const {isEditModalOpen, closeEditModal} = useGlobalContext();
  const [person, setPerson] = useState(contact);

  React.useEffect(() => {
    setPerson(contact);
  }, [contact]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person.id || !person.firstName || !person.email || !person.phone) {
      return;
    } else {
      editContact(person.id, person.firstName, person.email, person.phone, person.address);
      closeEditModal();
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    closeEditModal();
  }

  return <div className={`modal-overlay ${ isEditModalOpen ? 'show-modal':''}`}>
    <div className="modal-container">
      <h3>edit contact's info</h3>
      <button className="close-modal-btn" onClick={closeEditModal}>
        <FaTimes />
      </button> 
      <form onSubmit={handleSubmit} className="form-add">
        <input type="hidden" id="id" name="id" value={person.id} onChange={handleChange}/>
        <div className="form-add-contact">
          <label htmlFor="firstName">Name:</label>
          <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
        </div>
        <div className="form-add-contact">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={person.email}  onChange={handleChange}/>
          </div>
          <div className="form-add-contact">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={person.phone}  onChange={handleChange}/>
          </div>
          <div className="form-add-contact">
            <label htmlFor="phone">Address:</label>
            <input type="text" id="address" name="address" value={person.address} onChange={handleChange}/>
          </div>
          <div className="form-add-btn-container">
            <button type="submit" className="btn add-btn" onClick={handleSubmit}>confirm</button>
            <span></span>
            <button type="submit" className="btn add-btn" onClick={handleCancel} >cancel</button>
          </div>          
      </form>
    </div>
  </div>
}

export default EditModal
