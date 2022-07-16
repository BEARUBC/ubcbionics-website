import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import pic1 from "./Photos/pic1.png";
import pic2 from "./Photos/pic2.png";
import graspPic1 from "./Photos/graspPic1.jpeg";
import bionicHand from "./Photos/bionicHand.png";
import nuanceControl from "./Photos/nuanceControl.png";
import softMaterials from "./Photos/softMaterials.png";
import costEffective from "./Photos/costEffective.png";

import { Layout } from "./components/Layout";

export const Projects = () => {
  return (
    <Layout>
      {/* <div class="py-4" />
      <div class="headerBlue text-center">OUR GOALS</div>
      <div class="py-2" />
      <p className="graspText">
        Currently, we have undertaken two main projects; our pilot project,
        GRASP, which is a smart bionic arm designed to enhance daily life for
        amputees. Recently, we have also initiated the design of a
        brain-computer interface, NERV. We hope to submit both of our projects
        to the leading global bionics competition, CYBATHLON 2024.{" "}
      </p> */}
      <div class="py-2" />
      <div class="headerBlue text-center">GRASP PROJECT</div>
      <div class="py-2" />
      <p className="graspText">
        GRASP is UBC Bionics' pilot project: the design and creation of a smart
        prosthethic arm. At the moment, we are working our team's second
        iteration of the design. Our goal is to submit GRASP at the global
        bionics competition, CYBATHLON 2024.
      </p>
      <div class="row">
        {/* <div class="py-3" /> */}
        {/* <div class="col">
          <img
            class="picOne img-responsive center-block d-block mx-auto"
            src={pic1}
          />
        </div> */}
        {/* <div class="col">
          <img
            class="picTwo img-responsive center-block d-block mx-auto"
            src={pic2}
          /> */}
        {/* </div> */}
      </div>
      {/* <div class="py-3" /> */}
      <div class="row">
        <div class="col-sm col-order-2">
          <div class="py-5" />
          {/* <p className="graspBold">What is GRASP?</p> */}
          <p className="graspDesc">
            Our current design features a variety of funtionalities including
            the following:
          </p>
          <p className="graspDesc">
            <ul>
              <li>Analysis of EMG data to control the hands (ANA) </li>
              <li>
                Grip optimization that utilizes a camera on-board the arm for
                object recognition (ANA)
              </li>
              <li>Integration with machine learning (ANA)</li>
              <li>Translation of EMG signals into mechanical motion (EMB)</li>
              <li>
                Design core framework that interfaces with outputs provided by
                electrical and analytical subteams (EMB)
              </li>
              <li>Implementation of signal processing (Rust and Python) </li>
              <li>
                Improved finger actuation to optimize physical grips (MECH)
              </li>
              <li>Use of ergonomic shouler brace for minimized load (MECH)</li>
              <li>
                Integration of wrist rotation and passive locking mechanism
                (MECH)
              </li>
            </ul>
          </p>
        </div>

        <div class="col-sm col-order-1">
          {/* <div class="py-4" /> */}
          <img
            class="graspHand img-responsive center-block d-block mx-auto"
            src={bionicHand}
          />
        </div>
      </div>
      <div class="py-4" />
      <div class="headerBlue text-center">FEATURES</div>
      <div class="py-4" />
      <div class="row">
        <div class="col-sm-4">
          <img
            class="graspIcons img-responsive center-block d-block mx-auto"
            src={softMaterials}
          />
          <p class="graspIcons text-center">
            <p class="bold">Soft Materials</p>
            The use of soft materials to create an anthropomorphic desing that
            reduces social stigma and allows for more satisfying human-to-human
            interaction.
          </p>
        </div>
        <div class="col-sm-4">
          <img
            class="graspIcons img-responsive center-block d-block mx-auto"
            src={nuanceControl}
          />
          <p class="graspIcons text-center">
            <p class="bold">Nuanced Control</p>
            The use of two levels of control, myoelectric and electromechanical,
            to bridge the gap between patient preferences and technological
            limitations.
          </p>
        </div>
        <div class="col-sm-4">
          <img
            class="graspIcons img-responsive center-block d-block mx-auto"
            src={costEffective}
          />
          <p class="graspIcons text-center">
            <p class="bold">Cost-Effective</p>
            The use of 3-D pritning to reduce costs and allow for rapid
            manufacturing of the hand
          </p>
        </div>
      </div>
      <div class="py-4" />
      <div class="headerBlue text-center">BCI PROJECT</div>
      <div class="py-2" />
      <div class="py-4" />
      <p className="graspBold">What is NERV?</p>
      <p className="graspDesc">
        NERV is UBC Bionics' current design of a BCI, or brain computer
        interface. Our goal is to submit NERV at CYBATHLON 2024 once we have
        completed the first iteration.
      </p>
    </Layout>
  );
};
