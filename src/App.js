import React from 'react';
import Signup from './pages/Signup';
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
// import UpdateProfile from './pages/UpdateProfile'
import Error from './pages/Error'
import {AppProvider} from './contexts/Context'

function App() {
  return ( 
      <AppProvider>
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='*' component={Error} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </AppProvider>        
  );
}

export default App;
