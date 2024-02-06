import React from 'react';
import "../styles/navbar.css";
import vue from "../Images/vuelogo.jpg";

export default function(props){
    return (

        <div>

            
            <nav>
                <ul class = "navItem">
                    <li id='firstNav'><img src={vue} id="logo"/></li>
                    <li>Home</li>
                    <li>What's On</li>
                    <li>Trailers</li>
                    <li>Coming Soon</li>
                    <li>Big Screen Events</li>
                    <li id='lastNav'>Gift Cards</li>
                    <li>Log In</li>
                    <li>Join</li>
                    <li><img src='accounticon.jfif'/></li>

                </ul>
            </nav>
            
        </div>
    )
}


