import React from 'react';
import "./Nav.css";

class Nav extends React.Component{

    render(){
        return(            
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nameEmpresa">
                        <span>CATALOGUE</span>
                    </div>
                    <div className="linksNav">
                        <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">Dev: Guilermo Suruguay</a>
                    </div>
                </div>
          </nav>
        )
    }
}

export default Nav;