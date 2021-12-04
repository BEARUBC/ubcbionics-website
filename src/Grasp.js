import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';


function Grasp() {
    return(
        <div className="Grasp">
            <div class="headingGrasp"> GRASP PROJECT</div>
            <img class = "graspHand" src = "graspPic1.jpeg" />

            <p className="graspBold">
                What is Grasp?
            </p>
            <p className="graspDesc">
                GRASP is UBC Bionics' first attempt at the creation of a smart <br />
                prosthetic arm. Our current design of the arm features a variety <br />
                of functionalities including:
            </p>

            <p className="graspDesc"> 
                <ul><li>Object recognition via an onboard camera </li>
                    <li>Various hand and finger grips </li>
                    <li>Integration with machine learning</li>
                    <li>Incorporation fo an ergonomic design using a shoulder sling <br />
                    and consolidate electrical components </li>
                    <li>EMG signalling</li>
                </ul>
            </p>
            <div class="headingGrasp"> FEATURES</div>

            <img class= "graspIcon1" src = "softMaterials.png" />
            <img class= "graspIcon2" src = "nuanceControl.png" />
            <img class= "graspIcon3" src = "costEffective.png" />

            <p class="graspIcon1">
                The use of soft materials to create an <br /> anthropomorphic desing that reduces <br />
                social stigma and allows for more <br /> satisfying human-to-human interaction.
            </p>

            <p class="graspIcon2">
                The use of soft materials to create an <br /> anthropomorphic desing that reduces <br />
                social stigma and allows for more <br /> satisfying human-to-human interaction.
            </p>
        </div>
    ); 
}

export default Grasp;