import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
// import {Link} from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar({onSearch}) {
  const {currentUser, logout}  = useAuth()
  // const [error, setError] = useState("")
  // const history = useHistory()
  const [keyword, setKeyword] = useState('');

  // const [showLinks, setShowLinks] = useState(true);
  // const linksContainerRef = useState(null);
  // const linksRef = useState(null);


  const searchClicked = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">        
          {/* <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>            
            <FaBars />
          </button> */}
          <img src={logo} alt="logo"/>
        </div>      
        <div className= 'nav-title'>
          <h4>Welcome to Address book <strong>{currentUser.email}</strong></h4><span></span>
          {currentUser && <button onClick={logout}>logout</button>}
        </div>
        <div className="nav-search">
          <form >
            <div className='form form-control-search'>
              <input type="text" placeholder="Contact name here" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
              <div className="container-btn">
                <button className='btn search-btn' onClick={searchClicked}>Search</button>
              </div>
            </div>
          </form>
        </div>       
      </div>
    </nav>
  )
}
