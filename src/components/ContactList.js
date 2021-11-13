import React from 'react'
import ContactItem from './ContactItem'

function ContactList({people, removeContact, editContact, toggleFavorite, reviewContactModal}) {

  var contactNodes = people.map((person) => {
    return (
      <ContactItem key={person.id} {...person} removeContact={removeContact} editContact={editContact} toggleFavorite={toggleFavorite} reviewContactModal={reviewContactModal}/>
    );
  })

  return (
    <div className="section">
      {
        people.length ? contactNodes : <p>No Contact</p>
      }
    </div>
  );
}

export default ContactList;
