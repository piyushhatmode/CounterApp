import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand"> Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                    </a>
                </div>
            </nav>
          );
    }
}
 
export default Navbar ;