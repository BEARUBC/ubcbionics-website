// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import hand from './Photos/hand.png';
import pic1 from './Photos/pic1.png';
import pic2 from './Photos/pic2.png';

export const Home = () => {
    return(
        <div>
            <div class="row">
                <div class="col">
                    <b>
                    <div class="heading">UBC BIONICS</div>
                    </b>

                    <p className="text">
                    A STUDENT-LED DESIGN TEAM STRIVING TO FOSTER <br />
                    EXCELLENCE IN BIONICS BY CREATING SOLUTIONS <br /> TO REPLACE HUMAN
                    PHYSIOLOGY AND ULTIMATELY <br /> IMPROVE QUALITY OF LIFE.
                    </p>
                </div>
                <div class="col">
                    <img class="mainArm img-responsive center-block d-block mx-auto" alt='' src={ hand } />
                </div>
            </div>
            <div class="row partTwo">
                <span className="headerWhite">UPDATES</span>
                <p className="infoBlock">
                    Amidst the increasing demand for bionic devices and UBC’s strategic
                    positioning in the field, our student-led  design team, UBC
                    Bionics, strives to foster excellence in bionics. Our ultimate goal is
                    to create solutions that  can replace human physiology, either
                    by prosthesis or implants. UBC Bionics' current project is to design
                    and  build a smart bionic hand, GRASP, that can be used by
                    individuals who have suffered amputation or congenital
                    birth defects. Join us on our journey and be a part of our
                    history! 
                </p>
                <span className="headerWhite">OUR MISSION</span>
                <br />
                <p className="infoBlock">
                    Amidst the increasing demand for bionic devices and UBC’s strategic
                    positioning in the field, our student-led design team, UBC
                    Bionics, strives to foster excellence in bionics. Our ultimate goal is
                    to create solutions that can replace human physiology, either
                    by prosthesis or implants. UBC Bionics' current project is to design
                    and build a smart bionic hand, GRASP, that can be used by
                    individuals who have suffered amputation or congenital
                    birth defects. Join us on our journey and be a part of our
                    history!
                </p>
                <span className="headerWhite">NEW RESEARCH TEAM</span> <br />
                <p className="infoBlock">
                    We are delighted to announce the recent addition of a brand new
                    research team to the UBC Bionics Team. 
                    This research team will collaborate on a collection of smaller group
                    projects with UBC professors and  graduate students, that will
                    help members develop skills to aid to the advancement of our current
                    project,
                    GRASP. For more details, view our FAQ section under the Join Us page!
                </p>
            </ div>

            <div class="row">
                <div class="py-3" />
                <div class="headerBlue text-center">GRASP PROJECT</div>
                <div class="py-3"/>
                <p className="graspText">
                    The demand for prostheses is universal--over one million amputations
                    occur annually, with prosthetic options available only to about
                    5% of the population. UBC Bionics was created to foster undergraduate
                    excellence in this 
                    field. We undertook the project of creating a bionic arm and completed
                    an initial prototype in 2019-2020. During the pandemic, we updated our  
                    design and plan on implementing the physical changes this year.
                </p>
                <div class="py-3"/>
                <div class="col">
                    <img class="picOne img-responsive center-block d-block mx-auto" src={ pic1 } />
                </div>
                <div class="col">
                    <img class="picTwo img-responsive center-block d-block mx-auto" src={ pic2 } />
                </div>
                <div class="py-3"/>
                
            </div>
        </div>
    );
}
