import React from 'react';
import "../styles/navbar1.css";
import vue from "../Images/vuelogo.jpg";
import accounticon from "../Images/account.png"

export default function(props){
    return (

        <div>

            
            <nav className="navBar">

                <div className="navLogo">
                    <img src={vue} id="logo"/>
                </div>

                <ul className = "navItem">
                    <li id="hiddenNav">Home</li>
                    <li id="hiddenNav">What's On</li>
                    <li id="hiddenNav">Trailers</li>
                    <li id="hiddenNav">Coming Soon</li>
                    <li id="hiddenNav">Big Screen Events</li>
                    <li id="hiddenNav" >Gift Cards</li>
                </ul>

                <ul className="navRight">
                    <li id='lastNav'>Log In</li>
                    <li id="join" >Join</li>
                    <li id="lastLastNav"><img src={accounticon} id="accounticon"/></li>
                </ul>

                    

                
            </nav>
            
        </div>
    )
}


