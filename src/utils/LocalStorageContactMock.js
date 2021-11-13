export default function ContactsApi(identifier) {

  const storageKey = 'contact-list-' + identifier;

  const idGen = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const getAllContacts = () => {
    var allUsersStr = localStorage.getItem(storageKey) || '[]' ;
    return JSON.parse(allUsersStr);
  };

  const appendContact = (contact) => {
    var currentContactList = getAllContacts();
    localStorage.setItem(storageKey, JSON.stringify([...currentContactList, contact]));
  };

  const createContact = (firstName, email, phone, address) => {
    return new Promise((resolve, reject) => {
      if (firstName && email && phone) {
        var contact = {id: idGen(), firstName: firstName, email: email, phone: phone, address: address};
        appendContact(contact);
        resolve(contact);
      } else {
        reject("Add contact failed.");
      }
    });
  };

  const getContact = (id) => {
    return new Promise((resolve, reject) => {
      if (id) {                    
        var allContacts = getAllContacts();
        var current = allContacts.find((item) => item.id === id);

        if (!current) {
          reject("Contact not found, id: " + id);
        } else {
          resolve(current);
        }
      }
      else {
        reject("Get contact failed, id not specified.");
      }
    });
  };

  const removeContact = (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        var allContacts = getAllContacts();
        var current = allContacts.find((item) => item.id === id);
        
        if (!current) {
          reject("Contact not found, id: " + id);
        } else {
          var updatedContactList = allContacts.filter((item) => item.id !== id);
          localStorage.setItem(storageKey, JSON.stringify(updatedContactList));
          resolve(current);
        }
      } else {
        reject("Delete contact failed, id not specified.");
      }
    });
  };


  const updateContact = (id, firstName, email, phone, address) => {
    return new Promise((resolve, reject) => {
      if (id && firstName && email && phone) {
        var allContacts = getAllContacts();
        var current = allContacts.find((item) => item.id === id);
        
        if (!current) {
          reject("Contact not found, id: " + id);
        } else {
          var updated = {...current, firstName: firstName, email: email, phone: phone, address:address};
          var updatedContactList = allContacts.map((item) => {
            if(item.id === id) {
              return updated;
            }
            return item;
          });
          localStorage.setItem(storageKey, JSON.stringify(updatedContactList));
          resolve(updated);
        }
      } else {
        reject("Update contact failed.");
      }
    });
  };


  const toggleFavoriteContact = (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        var allContacts = getAllContacts();
        var current = allContacts.find((item) => item.id === id);
        
        if (!current) {
          reject("Contact not found, id: " + id);
        } else {
          var updated = {...current, isFavorite: !current.isFavorite};
          var updatedContactList = allContacts.map((item) => {
            if(item.id === id) {
              return updated;
            }
            return item;
          });
          localStorage.setItem(storageKey, JSON.stringify(updatedContactList));
          resolve(updated);
        }
      } else {
        reject("Toggle favorite failed.");
      }
    });
  };

  return {
    createContact,
    updateContact,
    getContact,
    removeContact,
    toggleFavoriteContact,
    getAllContacts
  };
}