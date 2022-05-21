// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import hand from './Photos/hand.png';


export const Home = () => {
    return(
        <div>
            <div class="row">
                <div class="col">
                    <div class="py-5" />
                    <div class="py-2" />
                    <div class="heading d-flex justify-content-center">UBC BIONICS</div>

                    <div class="d-flex justify-content-center align-middle">
                        <p class="text">
                        UBC Bionics is an undergraduate engineering design team at the University of British Columbia in Vancouver,
                        focused on the advancement of bionics.
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class='py-3' />
                    <img class="mainArm img-responsive center-block d-block mx-auto" alt='' src={ hand } />
                    <div class='py-3' />
                </div>
            </div>
            <div class="row partTwo">
                <span className="headerWhite">OUR MISSION</span>
                <p className="infoBlock">
                Our team aims to foster an environment that is readily
                accessible to students and provide a space for them to apply,
                strengthen, and hone their technical skills. We take pride in
                providing a very hands-on learning experience for all of our
                members, with support and guidance from senior leads. It is
                our utmost priority to ensure that our team members are
                equipped with the necessary skills to succeed both within and
                outside of the team. As such, we integrate many research
                opportunities into the team that pertain to our main tasks,
                as well as projects that are conducted under our collaboration
                with the Bionics Network at UBC.
                </p>
                <span className="headerWhite">OUR VISION</span>
                <br />
                <p className="infoBlock">
                Our ultimate goal as a team is to create solutions that can
                replace human physiology. With so many resources available to
                us, and extensive knowledge at our fingertips, we strive to
                push the bounds of technology.
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
        </div>
    );
}
