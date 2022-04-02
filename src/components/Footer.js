

// export const Footer = () => {
//     return(
//     <div class="footer">
//         <span class="bionics">UBC BIONICS</span>
//         <span class="contact">CONTACT US</span>
//         <div class="images">
//         <a href="https://www.facebook.com/ubcbionicsteampage/">
//             <img
//             class="facebook"
//             src="facebook-icon.png"
//             width="28"
//             height="28"
//             ></img>
//         </a>
//         <a href="https://www.instagram.com/ubcbionicsteam/">
//             <img
//             class="instagram"
//             src="instagram.png"
//             width="28"
//             height="28"
//             ></img>
//         </a>
//         <a href="https://twitter.com/ubcbionics?lang=en">
//             <img class="twitter" src="twitter.png" width="28" height="28"></img>
//         </a>

//         <a href="https://www.linkedin.com/company/ubcbionicsteam/?originalSubdomain=ca">
//             <img
//             class="linkedin"
//             src="linkedin-icon.png"
//             width="30"
//             height="30"
//             ></img>
//         </a>
//         </div>
//     </div>
//     );
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export const Footer = () => {
    return(
    <div class="footer">
        {/* <span class="left">UBC BIONICS</span>
        <span class="right">CONTACT US</span> */}
        <div class="footer-content">
        <ul class = "socials">
            <li><a href="https://www.facebook.com/ubcbionicsteampage"><i class="fab fa-facebook-square"></i></a></li>
            <li><a href="https://twitter.com/ubcbionicsteam"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="https://www.instagram.com/ubcbionicsteam/?hl=en"><i class="fab fa-instagram-square"></i></a></li>
            <li><a href="https://www.linkedin.com/company/ubcbionicsteam/mycompany/"><i class="fab fa-linkedin"></i></a></li>
        </ul>
        <p>© Copyright 2022 UBC Bionics. All Rights Reserved.</p>
    {/* </div> */}
       
      </div>
    </div>
    );
}