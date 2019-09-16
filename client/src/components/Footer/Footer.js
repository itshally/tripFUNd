import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    // left: "0",
    // bottom: "0",
    height: "60px",
    width: "100%",
}


function Footer({ children }) {
    return (
        <div>
            <div style={style}>
                { children }
                <p>&copy; 2019 TOURonto</p>
            </div>
        </div>
    )
}

export default Footer;