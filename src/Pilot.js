//Pilot recruitment page. No longer active

import arm from "./Photos/arm.jpg";
import team from "./Photos/team.jpg";
// import facebook from "../public/facebook-icon.png";
// import linkedin from "../public/linkedin-icon.png";
// import twitter from "../public/twitter-icon.png";
// import instagram from "../public/instagram.png";
import { Layout } from "./components/Layout";

export const Pilot = () => {
    return(
        <Layout>
        <div class="pilot-main">
            <div class="pilot-header pilot-div">
                <div class="pilot-h3"><b>Searching for:</b></div>
                <div class="pilot-h1"><b>Bionic Arm Tester</b></div>
            </div>
            <div class="who pilot-div">
                <div class="pilot-div">
                    <h1>Who are we?</h1>
                    <p>UBC Bionics is an undergraduate engineering design team at the University of British Columbia (UBC) dedicated to prosthetics research. Our current project is GRASP: a wearable, non-invasive transradial bionic arm.</p>
                </div>
                <img src={team} height="200px" alt="team photo"></img>
            </div>
            <div class="goal pilot-div">
                <div class="pilot-div">
                    <h1>Our Goal</h1>
                     <p>We want you to directly contribute to the development of GRASP’s cutting-edge, AI-driven technology through a long-term volunteer collaboration. With your help, we will take GRASP to CYBATHLON - an international bionics competition!</p>    
                </div>
                <img src={arm} height="200px" alt="GRASP photo"></img>
            </div>
            <div class="pilot-container">
                <div class="pilot pilot-div">
                    <h1>As our pilot, you would:</h1>
                    <ul>
                        <li>Attend our weekly meetings at UBC to wear and test GRASP through various tasks</li>
                        <li>Give feedback on GRASP’s functionality, ease of use, comfort, etc.</li>
                        <li>Participate in CYBATHLON’s Switzerland or Vancouver competition in October 2024</li>
                        <li>Be reimbursed for limited travel/food costs during the testing phase</li>
                        <li>If willing and able, receive a fully funded* trip to Zürich, Switzerland for competition!</li>
                    </ul>
                </div>
                <p>*conditions apply</p>
            </div>
            <div class="pilot-div">
                <h1>Qualifications</h1>
                <ul>
                    <li>Have a transradial amputation or congenital malformation below the elbow (no residual wrist movement) on at least one arm</li>
                    <li>Be 19 years or older by October 25, 2024</li>
                    <li>Able to commit to a minimum of one (1) weekly meeting from April-October 2024</li>
                </ul>
            </div>
            <div class="pilot-div">
                <h1>Contact Us!</h1>
                <p>Fill out the <b>interest form</b> <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuYQ9vxZP0uV8d5XV9pvW4kcAY5Y2GRHuzPati4QmWq_jm8A/viewform">here</a>. Alternitively, you may contact us on any of our social media.</p>
                <p>Email (attn. Brandon):
                    <a href="ubcbionics.outreach@gmail.com">ubcbionics.outreach@gmail.com</a></p>
            </div>
        </div>
        </Layout>
    );
}

{/* <a href="https://www.instagram.com/ubcbionicsteam/?hl=en">
<img src={instagram} alt="Instagram" height="80px"></img>
</a>
<a href="https://www.facebook.com/ubcbionicsteampage">
  <img src={facebook} alt="Facebook" height="80px"></img>
</a>
<a href="https://twitter.com/ubcbionicsteam">
  <img src={twitter} alt="Twitter" height="80px"></img>
</a>
<a href="https://www.linkedin.com/company/ubcbionicsteam/mycompany/">
  <img src={linkedin} alt="LinkedIn" height="80px"></img>
</a> */}