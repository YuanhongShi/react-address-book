import React from 'react'
import { links } from '../data'
import { useGlobalContext } from '../contexts/Context'


const Sidebar = ({createContact, showAllContacts,showAllFavorites,clearContact}) => {
  const {openCreateModal} = useGlobalContext();
  //console.log(isCreateModalOpen);

  const changeStatus = (e) => {
    e.preventDefault();
    console.log('this feature will be realized soon!!!!');
  }

  return (
  <div className="sidebar">
    <div className="sidebar-top">
      <div className="sidebar-header" onClick={openCreateModal}>     
        <p>Add contact</p>
      </div>
      <ul className="links">
        {links.map((link) => {
          const {id, text, icon} = link;
          return (
            <li  key={id} onClick={((id===1) && showAllContacts) || ((id===2) && changeStatus) || ((id===3) && showAllFavorites)|| ((id===4) && clearContact)} >
              <a href="/">
                {icon}<span></span>
                {text}
              </a>
            </li>
          );  
        })}
      </ul> 
    </div>
    <div className="sidebar-legal">
        &copy; 2020 by yuanhong shi. All rights reserved.
    </div>
  </div>
  );
}

export default Sidebar
