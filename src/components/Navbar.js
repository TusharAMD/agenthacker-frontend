import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import CreateorJoin from './CreateorJoin';
import Chatroom from './Chatroom';
import UpdateMobile from './UpdateMobile';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
function Navbar() {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();

  if (isAuthenticated){  
  return (
    <div className="Navbar">
      <nav className="navbar navbar-default">
        <a className="navbar-brand" href="#"><img src = "https://i.ibb.co/55Y4rgk/255-2554256-spy-png-images-free-download-spy-png-transparent-removebg-preview-1.png" className="navlogo" alt="Top Secret"></img></a>
      
        <ul className="navbar-nav ms-auto linksOfPage">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/CreateorJoin">Create/Join</a></li>
            <li className="nav-item"><a href="/Mobile">Mobile</a></li>
            <li className="nav-item"><a href="#" onClick={() => logout()}>Logout</a></li>
        </ul>
        
        
      </nav>
      <Router>
          <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/CreateorJoin">
            <CreateorJoin />
          </Route>
          <Route path="/Chatroom/:id">
            <Chatroom />
          </Route>
          <Route path="/Mobile">
            <UpdateMobile />
          </Route>
          </Switch>
        </Router>
    </div>
  );
  }
    else{
        return (
            <div className="Navbar">
              <nav className="navbar navbar-default">
                <a className="navbar-brand" href="#"><img src = "https://i.ibb.co/55Y4rgk/255-2554256-spy-png-images-free-download-spy-png-transparent-removebg-preview-1.png" className="navlogo" alt="Top Secret"></img></a>
                
                <ul className="navbar-nav ms-auto linksOfPage">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#" onClick={() => loginWithRedirect()}>Login</a></li>
                </ul>
              </nav>
              
            </div>
          );
    }
}

export default Navbar;
