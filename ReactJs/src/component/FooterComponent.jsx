import React, { Component } from 'react';

class FooterComponent extends Component {
    
    constructor(props){
        super(props)
            this.state={

            }
        }
    

    render() {
        return (
             <div>
                <footer className="footer" style={{backgroundColor:"#191970"}} >
                  <span className="text-muted" style={{color:"DCDCDC",fontSize:"14pt",}}>All Rights Reserved 2021 @BlackMass</span>  
                </footer>
             </div>
        );
    }
}

export default FooterComponent;