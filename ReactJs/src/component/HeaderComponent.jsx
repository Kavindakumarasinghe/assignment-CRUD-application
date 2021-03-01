import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <header >
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#191970"}}>
  <div className="navbar-brand " style={{color:"white",fontSize:"24pt"}} >STUDENT INFORMATION MANAGEMENT SYSTEM</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <span className="navbar-text"  >
     <a href="/students" style={{color:"white", fontSize:"18pt"}}>Student Information</a>
    </span>
    <span className="navbar-text pl-3" >
    <a href="/grades" style={{color:"white", fontSize:"18pt"}} >Class Information</a>
    </span>
  </div>
</nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;