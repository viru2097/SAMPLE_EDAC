import React, {useState,useEffect} from "react";
import RandomQuote from "./RandomQuote";
import SavedQuotes from "./SavedQuotes";
import AddQuote from "./AddQuote";
import ListAllQuotes from "./ListAllQuotes";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Link,useLocation } from "react-router-dom";
import Login from "./loginComponent.js";
import SignUp from "./signupComponent.js";




function App() {
   const location = useLocation();
   console.log(location);
  //  const [isLoggedIn,setIsloggedIn]=useState(false);
   
  //  useEffect(()=>{
  //   let isLoggedIn = localStorage.getItem("isLoggedIn")?JSON.parse(localStorage.getItem("isLoggedIn")):false;
  //   console.log(isLoggedIn);
  //   setIsloggedIn(isLoggedIn); 
  //  },[])


  return (
    
    <BrowserRouter>
        <center>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Quotify</Navbar.Brand>
            <Nav.Item className="ml-auto">
            {
            // ["/login", "/signup"].includes(location.pathname)
            true?
              <>
              <Link to="/random-quote" className="ml-4">
                Random Quote(API)
              </Link>
              <Link to="/saved-quotes" className="ml-4">
                Random Quote(Local)
              </Link>
              <Link to="/new-quote" className="ml-4">
                Add Quote
              </Link>
              <Link to="/list-all-saved-quotes" className="ml-4">
                List All Quotes(Local)
              </Link>
              </>
              : 
              <>
              <Link to="/" className="ml-4">Sign In</Link>
              <Link to="/register" className="ml-4">Register</Link>
              </>
              }
            
            </Nav.Item>
            
          </Navbar>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/register" component={SignUp}/>
          <Route path="/random-quote" component={RandomQuote}  />
          <Route path="/saved-quotes" component={SavedQuotes} />
          <Route path="/new-quote" component={AddQuote} />
          <Route path="/list-all-saved-quotes" component={ListAllQuotes} />
          

        </center>
     
      
    </BrowserRouter>
  );
}

export default App;
