import "./App.css";
//admin
import FXing from "./Photos/Edited Headshots/Frank Xing.jpg";
import MCheng from "./Photos/Edited Headshots/Melanie Cheng.jpg";
import BAhyou from "./Photos/Edited Headshots/Brandon Ah You.jpg";
import SSabourin from "./Photos/Edited Headshots/Sasha Sabourin.jpg";
import KTan from "./Photos/Edited Headshots/Kim Tan.jpg";
import LCid from "./Photos/Edited Headshots/Leticia Cid.jpg";
import HAwosiyan from "./Photos/Edited Headshots/Hikmah Awosiyan.jpg";
import TZaurev from "./Photos/Edited Headshots/Theo Zaurev.jpg";
import KReddy from "./Photos/Edited Headshots/Kimathra Reddy.jpg";
import AHalim from "./Photos/Edited Headshots/Ayesha Halim.jpg";
//analytics
import LJones from "./Photos/Edited Headshots/Luca Jones.jpg";
import RArvi from "./Photos/Edited Headshots/Raihan Arvi.jpg";
import RMacdougall from "./Photos/Edited Headshots/Rachel Macdougall.jpg";
import MDaffa from "./Photos/Edited Headshots/Muhammad Daffa.jpg";
import IXu from "./Photos/Edited Headshots/Iris Xu.jpg";
import LDavidson from "./Photos/Edited Headshots/Lydia Davidson.jpg";
import KDo from "./Photos/Edited Headshots/Khue Do.jpg";
//Electrical
import AStewart from "./Photos/Edited Headshots/Anthony Stewart.jpg";
import JThe from "./Photos/Edited Headshots/Justin The.jpg";
import NSantoso from "./Photos/Edited Headshots/Nicholas Santoso.jpg";
import TMoore from "./Photos/Edited Headshots/Teela Moore.jpg";
import LRoss from "./Photos/Edited Headshots/Liam Ross.jpg";
import RSchroeder from "./Photos/Edited Headshots/Ryker Schroeder.jpg";
import MRoss from "./Photos/Edited Headshots/Michael Ross.jpg";
import CRajamanthree from "./Photos/Edited Headshots/Chathil Rajamanthree.jpg";
import GFallahpour from "./Photos/Edited Headshots/Ghazal Fallahpour.jpg";
import ASoni from "./Photos/Edited Headshots/Albin Soni.jpg";
import AKumar from "./Photos/Edited Headshots/Arpit Kumar.jpg";
import RLi from "./Photos/Edited Headshots/Ronald Li.jpg";
import UAli from "./Photos/Edited Headshots/Umar Ali.jpg"; //advisor
//Mechanical
import AGovind from "./Photos/Edited Headshots/Aditya Govind Menon.jpg"; //advisor
import TLeong from "./Photos/Edited Headshots/Terrence Leong.jpg";
import AHawkins from "./Photos/Edited Headshots/Ali Hawkins.jpg";
import JChen from "./Photos/Edited Headshots/Jackie Chen.jpg";
import JChiusa from "./Photos/Edited Headshots/Jedidiah Chiusa.jpg";
import WBarnard from "./Photos/Edited Headshots/Will Barnard.jpg";
import JWu from "./Photos/Edited Headshots/Joyce Wu.jpg";
import MTing from "./Photos/Edited Headshots/Marvin Ting.jpg";
import NNayyar from "./Photos/Edited Headshots/Natalia Nayyar.jpg";
import ABerkinbateva from "./Photos/Edited Headshots/Ayaulym Berkinbayeva.jpg";
//Captain
import EFlaschner from "./Photos/Edited Headshots/EFlaschner.jpg";

export const Teams = () => {
  return (
    <div class="container">
      <div class="row">
        <section className="backimage">
          <div class="py-5" />
          <p class="headerBlue text-center">LIFE AT UBC BIONICS</p>
          <div class="justify-content-center">
            <p class="graspDesc text-center width-80">
              Our team is composed of some of the best and brightest science and
              engineering students. Seize the opportunity to develop and hone
              your technical skills.
            </p>
          </div>
          <div class="py-3" />
          <div class="text-center">
            <a
              class="btn btn-primary"
              href="https://forms.gle/Zd4DjTmhk94W2mYL9"
              role="button"
            >
              APPLY NOW
            </a>
          </div>
          <div class="py-5" />
        </section>
      </div>
      <div class="row">
        <div class="py-4 " />
        <p class="joinusHeader text-center">CAPTAIN'S MESSAGE</p>
        <div class="py-3" />
        <img
          class="captain img-responsive center-block d-block mx-auto"
          alt=""
          src={EFlaschner}
        />
        <div class="py-3" />
        <p class="text-center pad-0">EMILY FLASCHNER</p>
        <div>
          <p class="subTitle text-center">TEAM CAPTAIN</p>
        </div>
        <div class="py-3" />
        <p class="text-center lead">
          UBC Bionics, since its inception, has been dedicated to advancing
          student knowledge in the field of bionics and creating opportunities
          for students to apply themselves and gain experience. We are currently
          working on two major projects: a bionic arm, GRASP, and a
          brain-computer interface, NERV. Our design team has created an
          incredible environment for us to work collaboratively alongside other
          students and industry, participate in competitions and continue to
          advance and apply our knowledge. I am a fourth-year Biomedical
          Engineering student specializing in cellular bioengineering and have
          been a part of the team since 2019. My duties on the team include
          project management, executive responsibilities and supporting the rest
          of the team with anything they need. Bionics is a promising area of
          research with the potential to positively influence an individual’s
          quality of life, which I believe motivates our team to work hard to
          bring our projects into reality. I hope you’ll support or join us on
          our journey!
        </p>
      </div>
      <div class="py-4" />

      <div class="row partTwo">
        <p class="joinusHeader text-center">ADMIN SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-4" />
          <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={JThe}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">KYLE KOCHI</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={LRoss}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">TIFFANY PRAYITNO</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
          <div class="py-5">
            <div class="container-sm">
              <p class="text-center">
                The administrative subteam is responsible for overseeing all the
                team’s logistics, including our finances, sponsorship, public
                relations, and content creation. We’re responsible for
                everything from tracking the annual budget to engaging in
                community outreach. You can often find us on all our social
                media platforms or at team events we’ve organized! Part of the
                administrative team is the web development group that designs
                our website, too.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MCheng}
          />
          <div class="py-1" />
          <p class="text-center">JUDY LEE</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MCheng}
          />
          <div class="py-1" />
          <p class="text-center">MELANIE CHENG</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={BAhyou}
          />
          <div class="py-1" />
          <p class="text-center">BRANDON AH YOU</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KTan}
          />
          <div class="py-1" />
          <p class="text-center">EUNSEOL KO</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={SSabourin}
          />
          <div class="py-1" />
          <p class="text-center">TIMOTHY FANG</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={SGopee}
          />
          <div class="py-1" />
          <p class="text-center">SANJANA GOPEE</p>
          <div class="py-3" />
        </div>
      </div>

      <div class="row partOne">
        <div class="py-3" />
        <p class="joinusHeader text-center">ANALYTICS SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-5 ">
          <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={JThe}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">KYLE KOCHI</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={LRoss}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">TIFFANY PRAYITNO</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <div class="container-sm">
                <p class="text-center">
                  The analytics subteam uses data science and machine learning
                  to improve the functionality of our current projects. For
                  GRASP, we are focused on using computer vision (CV) to
                  optimize the prosthetic arm’s grips. For NERV, we are mainly
                  focusing on EEG data analysis. Generally, our work includes
                  programming with Python and performing data analysis on sensor
                  information like EMG, FSR, EEG, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg-z img-responsive center-block d-block mx-auto"
            alt=""
            src={RMacdougall}
          />
          <div class="py-1" />
          <p class="text-center">LEON LI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={IXu}
          />
          <div class="py-1" />
          <p class="text-center">MATTHEW KIM</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RMacdougall}
          />
          <div class="py-1" />
          <p class="text-center">RACHEL MACDOUGALL</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg-z img-responsive center-block d-block mx-auto"
            alt=""
            src={MDaffa}
          />
          <div class="py-1" />
          <p class="text-center">KIRA LI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LDavidson}
          />
          <div class="py-1" />
          <p class="text-center">SAMEER SHANKAR</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={BAppolinary}
          />
          <div class="py-1" />
          <p class="text-center">BLAISE APPOLINARY</p>
          <div class="py-3" />
        </div>
      </div>

      <div class="row partTwo">
        <p class="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
        <div class="py-3" />
        <div class="col-md-6">
          <div class="py-5 ">
            <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={JThe}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">KYLE KOCHI</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={LRoss}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">TIFFANY PRAYITNO</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <div class="container-sm">
                <p class="text-center">
                  The electrical subteam focuses on developing and engineering
                  the underlying infrastructure that spans from actuating the
                  intended motion of the pilot to making sure the battery
                  delivers energy; and everything in between! In the past, we’ve
                  worked on creating our own custom muscle sensor to convert
                  electric signals in your arm to signals that our processor can
                  read. We coordinate with the subteams to make sure that the
                  arm and hand movement are as seamless as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RSchroeder}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">UMAR ALI</p>
          <div class="parent">
            <p class="subTitle text-center">ADVISOR</p>
          </div>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NSantoso}
          />
          <div class="py-1" />
          <p class="text-center">MICHAEL ROSS</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MRoss}
          />
          <div class="py-1" />
          <p class="text-center">YASH PARIKH</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={CRajamanthree}
          />
          <div class="py-1" />
          <p class="text-center">BOLONG TAN</p>
          <div class="py-3" />
          <img
            class="memberimg-z img-responsive center-block d-block mx-auto"
            alt=""
            src={user}
          />
          <div class="py-1" />
          <p class="text-center">ARSHDEEP KHURANA</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TMoore}
          />
          <div class="py-1" />
          <p class="text-center">TIAAN BOSHOFF</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AStewart}
          />
          <div class="py-1" />
          <p class="text-center">ALESSIA PALUMBO</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AKumar}
          />
          <div class="py-1" />
          <p class="text-center">MANIK DIALANI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={ASoni}
          />
          <div class="py-1" />
          <p class="text-center">CONNOR FROESE</p>
          <div class="py-3" />
          <img
            class="memberimg-z img-responsive center-block d-block mx-auto"
            alt=""
            src={GFallahpour}
          />
          <div class="py-1" />
          <p class="text-center">WILLIAM JI</p>
        </div>
      </div>

      <div class="row partOne">
        <div class="py-3" />
        <p class="joinusHeader text-center">MECHANICAL SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-4" />
          <div class="row">
            <div class="col">
              <div class="pad-left">
                <img
                  class="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={JChiusa}
                />
                <div class="py-3" />
                <p class="pad-0 text-center">JEDIDIAH CHIUSA</p>
                <div class="parent">
                  <p class="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="pad-right">
                <img
                  class="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={AGovind}
                />
                <div class="py-3" />
                <p class="pad-0 text-center">ADITYA GOVIND MENON</p>
                <div class="parent">
                  <p class="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5" />
          <div class="container-sm">
            <p class="text-center">
              The mechanical subteam is responsible for the structural design of
              the projects and modeling the devices on CAD software. We research
              and develop mechanical designs via the engineering design process,
              prototyping, and use of SolidWorks. Additionally, we’re
              responsible for the printing and assembly of the GRASP project,
              and are currently helping out with the headset for the NERV
              project.
            </p>
          </div>
        </div>

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JWu}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">JULIEN AH YOU</p>
          <div class="parent">
            <p class="subTitle text-center">ADVISOR</p>
          </div>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AHawkins}
          />
          <div class="py-1" />
          <p class="text-center">DOMINIC STARCK</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={SGupta}
          />
          <div class="py-1" />
          <p class="text-center">SAUM GUPTA</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NNayyar}
          />
          <div class="py-1" />
          <p class="text-center">NATALIA NAYYAR</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MTing}
          />
          <div class="py-1" />
          <p class="text-center">MARVIN TING</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JChen}
          />
          <div class="py-1" />
          <p class="text-center">GRACE GOULD</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AZheWang}
          />
          <div class="py-1" />
          <p class="text-center">ANDREW ZHE WANG</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={WBarnard}
          />
          <div class="py-1" />
          <p class="text-center">JOYCE XI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TLeong}
          />
          <div class="py-1" />
          <p class="text-center">TERRENCE LEONG</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={user}
          />
          <div class="py-1" />
          <p class="text-center">JOYCE WU</p>
        </div>
      </div>
    </div>
  );
};
