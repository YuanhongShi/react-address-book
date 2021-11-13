import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../contexts/Context'
import Alert from './Alert'

const CreateModal = ({addContact, people}) => {
  const {isCreateModalOpen, closeCreateModal} = useGlobalContext();
  // item for form
  const [person, setPerson] = useState({id: '', firstName: '', email: '', phone: '', isFavorite: false, address: ''});
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person.firstName || !person.email || !person.phone) {
      showAlert(true, 'danger', 'please enter information');
      return;
    }   
    else {
      addContact(person.firstName, person.email, person.phone, person.address);
      showAlert(true, 'success', 'new contact has been added');
      setPerson({firstName: '', email: '', phone: '', address: ''});
      // closeCreateModal()
    }
  }

  const showAlert = (show=false, type='', msg='') => {
    setAlert({show, type, msg});
  }

  return <div className={`modal-overlay ${ isCreateModalOpen ? 'show-modal':''}`}>
    <div className="modal-container">
      
      {alert.show && <Alert {...alert} removeAlert={showAlert} people={people}/>}
      <h3>create a new contact</h3>
      <button className="close-modal-btn" onClick={closeCreateModal}>
        <FaTimes />
      </button> 
      <form onSubmit={handleSubmit} className="form-add">
        <div className="form-add-contact">
          <label htmlFor="firstName">Name:</label>
          <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
        </div>
        <div className="form-add-contact">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
          </div>
          <div className="form-add-contact">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={person.phone} onChange={handleChange}/>
          </div>
          <div className="form-add-contact">
            <label htmlFor="phone">Address:</label>
            <input type="text" id="address" name="address" value={person.address} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-block add-btn" onClick={handleSubmit}>add contact</button>
      </form>
    </div>
  </div>
}

export default CreateModal
