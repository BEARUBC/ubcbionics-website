import react from 'react';
import { Layout } from './components/Layout'
import './App.css';
import testMember from './Photos/test-member.jpg';
 
export const Teams = () => {
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p>
                </div>
                <div class="col-sm">
                    <div class="py-4" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p>
                    <div class="py-1" />
                    <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                    <div class="py-2" />
                    <p class="text-center">PERSON NAME</p> </div>
                </div>

            <div class="row partTwo">
                <div class="col-md-6">
                    <div class="py-5 "> 
                        <img class="teamimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                        <div class="py-5">
                            <p class="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
                            <div class="container-sm">
                                <p class="text-center">
                                    The electrical sub-team is responsible for developing the electrical components 
                                    into the prototype. Currently, they're working on EMG acquisition and battery 
                                    management systems. They're developing a PCB using Altium that integrates sensors, 
                                    motors and actuators, while using Ocilliscope for testing.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>

            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p>
                <div class="py-1" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p>
                <div class="py-1" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p>
            </div>
            <div class="col-sm">
                <div class="py-4" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p>
                <div class="py-1" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p>
                <div class="py-1" />
                <img class="memberimg img-responsive center-block d-block mx-auto" alt='' src={testMember} />
                <div class="py-2" />
                <p class="text-center">PERSON NAME</p> </div>
            </div>            
        </div>

        
    );
}