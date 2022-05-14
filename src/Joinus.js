import react from 'react';
import { Layout } from './components/Layout'
// import 'bootstrap/dist/css/bootstrap.min.css';
import adminPhoto from './Photos/admin 1.png';
import elecPhoto from './Photos/electrical 1.png';
import mechPhoto from './Photos/mech 1.png';
import analyticsPhoto from './Photos/analytics 1.png';
import embeddedPhoto from './Photos/embedded 1.png';

export const Joinus = () => {
    return(
        <div class="container">
            <div class="row">
            <div class="py-4" />
                <p class="headerBlue text-center">LIFE AT UBC BIONICS</p>
            <div class="py-2" />
            <div class="justify-content-center">
                <p class="graspDesc text-center width-80">
                    Our team is composed of some of the best and brightest
                    science and engineering students. Seize the opportunity to learn, grow, network,
                    and develop your skills among your fellow teammates.
                </p>
            </div>
            </div>
            <div class="py-3" />
            <p class="headerBlue text-center py-3">OUR SUB-TEAMS</p>
            <div class="py-2" />
            <div class="row">
                <div class="col-lg-4">
                    <img class="teamPhotos img-responsive center-block d-block mx-auto" src={adminPhoto} alt=''/>
                    <div class="py-2" />
                    <p class="subHeader text-center">Administration</p>
                    <p class="graspDesc height-130">
                        The administration sub-team is responsible for 
                        overseeing and managing the team's public affairs.
                        They secure sponsorship, maintain the budget, and 
                        promote the team's social media presence. Additionally,
                        they secure sponsorship, maintain the budget, and 
                        promote the team's social media presence. Additionally,
                        they work on recruitment, planning events and maintain
                        the team's website.
                    </p>
                    <a class="btn btn-primary justify-content-center" href="https://forms.gle/TiEYEAjvB8FKUDov8" role="button">APPLY NOW</a>
                    <div class="py-5" />
                </div>    
                <div class="col-lg-4">
                <img class="teamPhotos img-responsive center-block d-block mx-auto" src={adminPhoto} alt=''/>
                    <div class="py-2" />
                    <p class="subHeader text-center">Electrical</p>
                    <p class="graspDesc height-130">
                        The electrical sub-team is in charge of developing
                        the electrical components into the prototype. 
                        Currently, they're working on EMG acquisition and 
                        battery management systems. They're developing a 
                        PCB using Altium that integrates sensors, motors, 
                        and actuators, while using Oscilloscope for testing.
                    </p>
                    <a class="btn btn-primary justify-content-center" href="https://forms.gle/TiEYEAjvB8FKUDov8" role="button">APPLY NOW</a>
                    <div class="py-5" />
                </div>  
                <div class="col-lg-4">
                <img class="teamPhotos img-responsive center-block d-block mx-auto" src={adminPhoto} alt=''/>                    <div class="py-2" />
                    <p class="subHeader text-center">Mechanical</p>
                    <p class="graspDesc height-130">
                        The mechanical sub-team designs the structure of 
                        the current project and models the devices on CAD 
                        software. They research and develop mechanical designs 
                        via engineering design process, prototyping, and SolidWorks.
                        They're responsible for the printing and assembly of the 
                        prototype.
                    </p>
                    <a class="btn btn-primary justify-content-center" href="https://forms.gle/TiEYEAjvB8FKUDov8" role="button">APPLY NOW</a>
                    <div class="py-5" />
                </div>  
            </div> 
            <div class="row">
                <div class="col-md">
                <img class="teamPhotos img-responsive center-block d-block mx-auto" src={adminPhoto} alt=''/>                    <div class="py-2" />
                    <p class="subHeader text-center">Analytics</p>
                    <p class="graspDesc height-130">
                        The analytics sub-team uses data science and machine learning 
                        to improve the usability of the current project. Part of their
                        work includes programming with Python and performing data 
                        analysis on sensor information like EMG, FSR, etc.
                    </p>
                    <a class="btn btn-primary justify-content-center" href="https://forms.gle/TiEYEAjvB8FKUDov8" role="button">APPLY NOW</a>
                    <div class="py-5" />
                </div>
                <div class="col-md">
                <img class="teamPhotos img-responsive center-block d-block mx-auto" src={adminPhoto} alt=''/>                    <div class="py-2" />
                    <p class="subHeader text-center">Embedded</p>
                    <p class="graspDesc height-130">
                        The embedded systems sub-team is responsible for detailing the
                        most optimal design, programming, and acutation methods to 
                        follow. They work on low-level control of the hardware and take
                        in sensor data. Currently, they are programming with Rust, but
                        will move forward with C or C++.
                    </p>
                    <a class="btn btn-primary justify-content-center" href="https://forms.gle/TiEYEAjvB8FKUDov8" role="button">APPLY NOW</a>
                </div>  
            </div>
            <div class="py-2" />

            <div class="py-3"/>
        </div>
    );
};