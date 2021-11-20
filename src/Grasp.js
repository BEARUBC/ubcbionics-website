import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';


function Grasp() {
    return(
        <div className="Grasp">
            <div class="headingGrasp"> GRASP PROJECT</div>

            <p className="graspDesc">
                GRASP is UBC Bionics' first attempt at the creation of a smart <br />
                prosthetic arm. Our current design of the arm features a variety <br />
                of functionalities including:
        
            </p>
            <p className="graspDesc"> 
                <ul>
                    <li>Object recognition via an onboard camera </li>
                    <li>Various hand and finger grips </li>
                    <li>Integration with machine learning</li>
                    <li>Incorporation fo an ergonomic design using a shoulder sling <br />
                    and consolidate electrical components </li>
                    <li>EMG signalling</li>
                </ul>
            </p>    
        </div>

    );
}

export default Grasp;