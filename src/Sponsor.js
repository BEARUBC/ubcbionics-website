import React from "react";
import { Layout } from "./components/Layout";
import ubcapplied from "./Photos/Gold/ubc-applied.png";
import starfish from "./Photos/Silver/Starfish.png";
import digikey from "./Photos/Supporting/digikey.png";
import ieee from "./Photos/Bronze/ieee.png";
import bionicsnetworklogo from "./Photos/Gold/bionicsnetworklogo.png";
import ece from "./Photos/Gold/ece.png";
import sbme from "./Photos/Gold/sbme.jpeg";
import egbc from "./Photos/Silver/egbc.jpg";
import asee from "./Photos/Supporting/asee.png";
import eus from "./Photos/Supporting/eus.jpeg";
import pololu from "./Photos/Supporting/pololu.png";
import mecheng from "./Photos/Bronze/mecheng.jpeg";
import ubcmaterials from "./Photos/Bronze/ubcmaterials.jpg";
//slide images:
import slide1 from "./Photos/Thank You/fraser valley thank you.png";
import slide2 from "./Photos/Thank You/VHP thank you 1.png";
import slide3 from "./Photos/Thank You/VHP thank you 2.png";

function Slide(props) {
  return(
  <div class={props.className}>
      <img src={props.image} alt={props.alt}/>
  </div>
  );
}

const numberSlides = 3;
const dots = document.getElementsByClassName("dot");
const delay = 2500;


function Slideshow() {;
  let initialArray = Array(3).fill("slide");
  initialArray[0] = "slide active";
  const [slideIndex, setSlideIndex] = React.useState(0);
  // const [classNames, setClassNames] = React.useState(initialArray);
  const timeoutRef = React.useRef(null);
  const indexRef = React.useRef(0);
  const classNames = React.useRef(initialArray);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(
      () => {
        let prevIndex = indexRef.current;
        setSlideIndex(prevIndex => ((prevIndex + 1) % numberSlides));
        classNames.current = setNextArray(classNames.current, prevIndex, "slide", slideIndex, "slide active");
        indexRef.current = slideIndex;
      },
      delay
    );
  
    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  if (dots.length != 0) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
  }

  function setNextArray(array, previous, prevValue, index, value) {
    //stuck in infiite loop for some reason???
    const nextArray = array.slice();
    nextArray[previous] = prevValue;
    nextArray[index] = value;
    return(nextArray);
  }

  return(
    <div>
      <div class="slideshow-container">

        <Slide className={classNames.current[0]} image={slide1} alt={"fraservalley prosthetics"}/>

        <Slide className={classNames.current[1]} image={slide2} alt={"victoria hand project"}/>

        <Slide className={classNames.current[2]} image={slide3} alt={"victoria hand project"}/>
      </div>
      <div class="dot-container">
        <span class="dot active" onClick={() => setSlideIndex(0)}></span>
        <span class="dot" onClick={() => setSlideIndex(1)}></span>
        <span class="dot" onClick={() => setSlideIndex(2)}></span>
      </div>
    </div>
  );
}

// Thumbnail image controls


export const Sponsor = () => {
  return (
    <Layout>
      <div class="py-2" />
      <div className="headerBlue text-center">THANK YOU!</div>
      <div class="py-3" />
      
      <Slideshow/>

      {/*The dots/circles*/}
      

      <div class="py-4" />
      <div className="headerBlue text-center">OUR SPONSORS</div>
      <div class="py-3" />
      <div class="sponsor-header text-center">GOLD</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />

      {/* rest of sponsor page */}
      <div class="py-2" />
      <div class="row">
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={ubcapplied}
          />
          <div class="py-3" />
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={ece}
          />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={bionicsnetworklogo} />
          </div>
          <div class="py-2" />
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor center-block d-block mx-auto"
            alt=""
            src={sbme}
          />
          <div class="py-2" />
        </div>
      </div>
      <div class="py-3" />
      <div class="sponsor-header text-center">SILVER</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />
      <div class="py-2" />
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-2">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            // style={{ height: 110, width: 120 }}
            alt=""
            src={egbc}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-2" />
        <div class="col-sm-2" />
        <div class="col-sm-2">
          <div class="pl-1" />
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            // style={{ height: 200, width: 170 }}
            alt=""
            src={starfish}
          />
          <div class="py-2" />
        </div>
      </div>
      <div class="py-3" />
      <div class="sponsor-header text-center">BRONZE</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />

      <div class="py-2" />
      <div class="row">
        <div class="col-sm-4">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={mecheng}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-4">
          <img
            class="rect_sponsor img-responsive center-block d-block mx-auto"
            style={{ height: 130, width: 130 }}
            alt=""
            src={ubcmaterials}
          />
          <div class="py-2" />
        </div>
        <div class="col-sm-4">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={ieee} />
          </div>
          <div class="py-2" />
        </div>
      </div>

      <div class="py-3" />
      <div class="sponsor-header text-center">SUPPORTING ORGANIZATIONS</div>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      />
      <div class="py-2" />
      <div class="row">
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={digikey} />
          </div>
          <div class="py-3" />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img class="rect_sponsor" alt="" src={pololu} />
          </div>
          <div class="py-2" />
        </div>
        <div class="col-md-3">
          <div class="image_div">
            <img
              class="rect_sponsor"
              alt=""
              src={asee}
            />
          </div>
        </div>
        <div class="col-md-3">
          <img
            class="sq_sponsor img-responsive center-block d-block mx-auto"
            alt=""
            src={eus}
          />
          {/* <div class="py-2" /> */}
        </div>
      </div>
      {/* <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 1,
          borderColor: "#000000",
        }}
      /> */}

      {/* <div class="py-4" />
      <div class="sponsor-header">
        FOR MORE SPONSORSHIP INFORMATION:
         {/*sponsorship package button}
        <button class="cute-btn">
          <a
            class="link"
            href="https://drive.google.com/drive/u/1/folders/1L06FEgcfDd0wOwUYOpnhefMNBcIUzbFQ"
          >
            Sponsorship Package
          </a>
        </button>
      </div> */}
    </Layout>
  );
};
