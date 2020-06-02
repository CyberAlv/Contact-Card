import React, {Component} from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render(){
    return (
      <>
      <ContactCard 
        name="John Wick" 
        phone="1800963369"
        email="JWick@continental.com"
        address="12345 Main Street, NY, NY, 11103"
        />
      <ContactCard />
      <ContactCard />
      </>
    )
  }
}

export default App;