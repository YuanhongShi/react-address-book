import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
// import {Link, useHistory} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ContactList from '../components/ContactList'
import CreateModal from '../components/CreateModal'
import InfoModal from '../components/InfoModal'
import EditModal from '../components/EditModal'
import {Col} from 'react-bootstrap'
import { useGlobalContext } from '../contexts/Context'
import ContactsApi from '../utils/LocalStorageContactMock'


export default function Dashboard() {
  // const [error, setError] = useState("")
  const {currentUser}  = useAuth()
  // const history = useHistory()

  // get initial contacts, better to use async
  const contactsApi = ContactsApi(currentUser.email);

  const initialAllContacts = contactsApi.getAllContacts();
  
  // item for form
  const [person, setPerson] = useState({id: '', firstName: '', email: '', phone: '', isFavorite: false, address: ''});

  const [viewPerson, setViewPerson] = useState({});

  // all contacts, the storage
  const [people, setPeople] = useState(initialAllContacts);
  // favorite contacts, the storage, depend on all
  const [favoriteContacts, setFavoriteContacts] = useState(initialAllContacts.filter((c)=>c.isFavorite));
  // filtered contacts, for list display, init with all contacts
  const [filteredContacts, setFilteredContacts] = useState(people);

   // store the underling searching conditions
  const [searchConditions, setSearchConditions] = useState({active: false, keyword: '', favoriteOnly: false});
  // const {openSidebar, openModal} = useGlobalContext();
  const {openEditModal} = useGlobalContext();
  const {openModal} = useGlobalContext();
  const [showAll, setShowAll]  = useState(true);


  const loadContactList = (searchCriteria, allContacts) => {
    // if not passed, use the contact list in state
    if(!allContacts) {
      allContacts = people;
    }

    // apply filters
    var filtered = allContacts;
    // kw filter
    if (searchCriteria.active && searchCriteria.keyword) {
      const kw = searchCriteria.keyword.toLowerCase();
      filtered = filtered.filter((item) => item.firstName.toLowerCase().includes(kw));
    }
    // favorite filter
    if (searchCriteria.active && searchCriteria.favoriteOnly) {
      filtered = filtered.filter((item) => item.isFavorite);
    }

    setFilteredContacts(filtered);
    
    // favorite filter
    var favoriteContacts = filtered.filter((c) => c.isFavorite);
    setFavoriteContacts(favoriteContacts);
  }

  const searchContacts = (keyword, favoriteOnly) => {
    var criteria = {active: true, keyword: keyword, favoriteOnly: favoriteOnly};
    setSearchConditions(criteria);
    loadContactList(criteria);
  };

  const addContact = (firstName, email, phone, address) => {
    contactsApi.createContact(firstName, email, phone, address)
      .then(contact => {
        // refresh contact list
        console.log(contact);
        var allContacts = contactsApi.getAllContacts();
        setPeople(allContacts);
        loadContactList(searchConditions, allContacts);
      })
      .catch( msg => {
        console.error("Error add contact");
      });
  };

  
  const removeContact = (id) => {
    // showAlert(true, 'danger', 'contact removed');
    contactsApi.removeContact(id)
      .then(() => {
        var allContacts = contactsApi.getAllContacts();
        setPeople(allContacts);
        loadContactList(searchConditions, allContacts);
      })
      .catch( msg => {
        console.error("Error delete contact");
      });
  };
  const startEditContact = (id) => {
    contactsApi.getContact(id)
      .then((c) => {
        setPerson(c);
        openEditModal();
      });
  };

  const editContactConfirmed = (id, firstName, email, phone, address) => {
    contactsApi.updateContact(id, firstName, email, phone, address)
      .then((c) => {
        var allContacts = contactsApi.getAllContacts();
        setPeople(allContacts);
        loadContactList(searchConditions, allContacts);
      });

  }

  const clearContact = (e) => {
    //showAlert(true, 'danger', 'your contacts list has been cleared');
    e.preventDefault();
    localStorage.setItem('contact-list-'+ currentUser.email, JSON.stringify([]));
    var allContacts = contactsApi.getAllContacts();
    setPeople(allContacts);
    loadContactList(searchConditions, allContacts);
  }

  const showAllContacts= (e) => {
    e.preventDefault();
    setShowAll(true);
  }

  const showAllFavorites =(e) => {
    e.preventDefault();
    setShowAll(false);
  }

  const toggleFavorite = (id) => {
    console.log('!!');
    contactsApi.toggleFavoriteContact(id)
      .then(() => {
        var allContacts = contactsApi.getAllContacts();
        setPeople(allContacts);
        loadContactList(searchConditions, allContacts);
      })
      .catch( msg => {
        console.error("Error delete contact");
      });
  };

  const reviewContactModal = (id) => {
    contactsApi.getContact(id)
      .then((c) => {
        setViewPerson(c);
        openModal();
      });
  }

  return (
    <div className="app-root-container">
      <Navbar onSearch={searchContacts}/>
      <div className="dashboard-container">
        <Col sm={3} className="sidebar-container" style={{paddingLeft: '0px'}}>
          <Sidebar showAllContacts={showAllContacts} showAllFavorites={showAllFavorites} clearContact={clearContact}/>
        </Col>
        <Col className="contacts-container">
          
          <InfoModal contact={viewPerson}/>
          <CreateModal addContact={addContact} people={people}/>
          <EditModal contact={person} editContact={editContactConfirmed}/>
         
              <h5>favorite contacts</h5>
            {favoriteContacts.length > 0 && (
              <div className="section">
                <ContactList people={favoriteContacts} removeContact={removeContact} editContact={startEditContact} toggleFavorite={toggleFavorite} reviewContactModal={reviewContactModal}/>            
              </div>  
            )}  

          {showAll && (
            <div>
              <h5>all contacts</h5>
              {filteredContacts.length > 0 && (
                <div className="section">
                  <ContactList people={filteredContacts} removeContact={removeContact} editContact={startEditContact} toggleFavorite={toggleFavorite} reviewContactModal={reviewContactModal}/>             
                </div>  
              )}
            </div>
          )}
            
            
      
          {/* <h5>favorite contacts</h5>
          {favoriteContacts.length > 0 && (
            <div className="section">
              <ContactList people={favoriteContacts} removeContact={removeContact} editContact={editContact} toggleFavorite={toggleFavorite} reviewContactModal={reviewContactModal}/>            
            </div>  
          )}   

          <h5>all contacts</h5>
          {filteredContacts.length > 0 && (
            <div className="section">
              <ContactList people={filteredContacts} removeContact={removeContact} editContact={editContact} toggleFavorite={toggleFavorite} reviewContactModal={reviewContactModal}/>             
            </div>  
          )} */}
        </Col>
      </div>
    </div>
  )
}
