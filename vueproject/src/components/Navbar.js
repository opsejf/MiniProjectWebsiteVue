import React from 'react';
import "../styles/navbar.css";
import vue from "../Images/vuelogo.jpg";
import accounticon from "../Images/account.png"

export default function(props){
    return (

        <div>

            
            <nav>

                <ul className = "navItem">
                    <li id='firstNav'><img src={vue} id="logo"/></li>
                    <li id="hiddenNav">Home</li>
                    <li id="hiddenNav">What's On</li>
                    <li id="hiddenNav">Trailers</li>
                    <li id="hiddenNav">Coming Soon</li>
                    <li id="hiddenNav">Big Screen Events</li>
                    <li id="hiddenNav" >Gift Cards</li>
                    <li id='lastNav'>Log In</li>
                    <li id="join" >Join</li>
                    <li id="lastLastNav"><img src={accounticon} id="accounticon"/></li>

                </ul>
            </nav>
            
        </div>
    )
}


