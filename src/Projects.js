import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import pic1 from './Photos/pic1.png';
import pic2 from './Photos/pic2.png';
import graspPic1 from './Photos/graspPic1.jpeg';
import nuanceControl from './Photos/nuanceControl.png';
import softMaterials from './Photos/softMaterials.png';
import costEffective from './Photos/costEffective.png';

import { Layout } from './components/Layout';

export const Projects = () => {
    return(
        <Layout>
        <div class="py-4" />
        <div class="headerBlue text-center">OUR GOALS</div>
        <div class="py-2"/>
        <p className="graspText">
        Currently, we have undertaken two main projects; our pilot
        project, GRASP, which is a smart bionic arm designed to enhance
        daily life for amputees. Recently, we have also initiated the design
        of a brain-computer interface, NERV. We hope to submit both of
        our projects to the leading global bionics competition,
        CYBATHLON 2024. </p>
        
        <div class="py-2" />
        <div class="headerBlue text-center">GRASP PROJECT</div>
        <div class="py-2"/>
                <p className="graspText">
                    The demand for prostheses is universal--over one million amputations
                    occur annually, with prosthetic options available only to about
                    5% of the population. UBC Bionics was created to foster undergraduate
                    excellence in this 
                    field. We undertook the project of creating a bionic arm and completed
                    an initial prototype in 2019-2020. During the pandemic, we updated our  
                    design and plan on implementing the physical changes this year.
                </p>
                <div class="row">
                <div class="py-3"/>
                <div class="col">
                    <img class="picOne img-responsive center-block d-block mx-auto" src={ pic1 } />
                </div>
                <div class="col">
                    <img class="picTwo img-responsive center-block d-block mx-auto" src={ pic2 } />
                </div>
                </div>
                <div class="py-3"/>
        <div class="row">

        <div class="col-sm col-order-2">
        <div class="py-4" />
            <p className="graspBold">What is Grasp?</p>
            <p className="graspDesc">
                GRASP is UBC Bionics' first attempt at the creation of a smart
                prosthetic arm. Our current design of the arm features a variety
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

        <div class="col-sm col-order-1">
        <div class="py-4" />
                <img class="graspHand img-responsive center-block d-block mx-auto" src={ graspPic1 } />
            </div>
            
        </div>

        <div class="py-4" />
        <div class="headerBlue text-center">FEATURES</div>
        <div class="py-4" />

        <div class="row">
            <div class="col-sm-4">
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {softMaterials} />
                <p class="graspIcons text-center">
                    <p class="bold">Soft Materials</p>
                    The use of soft materials to create an anthropomorphic desing that reduces
                    social stigma and allows for more satisfying human-to-human interaction.
                </p>
            </div>
            <div class="col-sm-4">
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {nuanceControl} />
                <p class="graspIcons text-center">
                    <p class="bold">Nuanced Control</p>
                    The use of two levels of control, myoelectric and electromechanical, to 
                    bridge the gap between patient preferences and technological limitations.
                </p>
            </ div>
            <div class="col-sm-4"> 
                <img class= "graspIcons img-responsive center-block d-block mx-auto" src = {costEffective} />
                <p class="graspIcons text-center">
                    <p class="bold">Cost-Effective</p>
                    The use of 3-D pritning to reduce costs and allow for rapid manufacturing
                    of the hand
                </p>
            </div>
        </div>

        <div class="py-4" />
        <div class="headerBlue text-center">BCI PROJECT</div>
        <div class="py-2"/>
    </Layout>
    );
}
