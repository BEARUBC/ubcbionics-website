import react from 'react';
import { Layout } from './components/Layout';
import ubcapplied from './Photos/Gold/ubc-applied.png';
import ubcbio from './Photos/Silver/ubc-biomed.jpg';
import starfish from './Photos/Silver/Starfish.png';
import kitronyx from './Photos/Silver/kitronyx.png';
import alma from './Photos/Silver/alma-mater-society.png';
import ateam from './Photos/Silver/a-team.png';
import threea from './Photos/Bronze/3a.png';
import actuonix from './Photos/Bronze/actuonix.png';
import airtech from './Photos/Bronze/airtech.png';
import asa from './Photos/Bronze/asa.png';
import bionicsnetwork from './Photos/Bronze/bionicsnetwork.png';
import digikey from './Photos/Bronze/digikey.png';
import ieee from './Photos/Bronze/ieee.png'
import nova from './Photos/Bronze/nova.jpeg';
import prismlab from './Photos/Bronze/prismlab.png';
import sensitronic from './Photos/Bronze/sensitronics.jpeg';
import skf from './Photos/Bronze/skf.png';
import spaenaur from './Photos/Bronze/spaenaur.png';
import crn from './Photos/Supporting/crn.png';
import bcit from './Photos/Supporting/bcit.jpg';

export const Sponsor = () => {
    return(
        <Layout>
            <div class="py-3" />
            <div className="headerBlue text-center">OUR SPONSORS</div>
            <div class="py-2" />
            <div class="sponsor-header text-center">GOLD</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ubcapplied } />
            <div class="py-2" />
            <div class="sponsor-header text-center">SILVER</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <div class="row">
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ubcbio } />
                </div>
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ starfish } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt=''  src={ ateam } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 75, width: 275}} alt='' src={ kitronyx } />
                </div>
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ alma } />
                </div>
            </div>
            <div class="py-2" />
            <div class="sponsor-header text-center">BRONZE</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <div class="row">
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ threea } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 50, width: 275}} alt='' src={ actuonix } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' src={ airtech } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' src={ asa } />
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' src={ bionicsnetwork } />
                </div>
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ digikey } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ieee } />
                </div>
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ nova } />
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 100, width: 130}} alt='' src={ prismlab } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 75, width: 300}} alt='' src={ sensitronic } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 75, width: 300}} alt='' src={ skf } />
                </div>
                <div class="col-sm">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 175, width: 240}} alt='' src={ spaenaur } />
                </div>
            </div>
            <div class="py-2" />
            <div class="sponsor-header text-center">SUPPORTING ORGANIZATIONS</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>
            <div class="py-2" />
            <div class="row">
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ crn } />
                </div>
                <div class="col-sm">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ bcit } />
                </div>
            </div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class='py-3' />

            <div class="row">
                <div class="col-sm">
                    <div class="sponsor-header-mini text-center">SUPPORTING</div>
                    <div class="sponsor-header-bold text-center">other</div>
                    <div class="sponsor-header-mini text-center">MATERIAL DONATION</div>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Logo presented on merchandise</p>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Termly newsletter update</p>
                </div>
                <div class="col-sm">
                    <div class="sponsor-header-mini text-center">BRONZE</div>
                    <div class="sponsor-header-bold text-center">$500+</div>
                    <div class="sponsor-header-mini text-center">DONATION</div>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Logo presented on merchandise</p>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Termly newsletter update</p>
                </div>
                <div class="col-sm">
                    <div class="sponsor-header-mini text-center">SILVER</div>
                    <div class="sponsor-header-bold text-center">$1,000+</div>
                    <div class="sponsor-header-mini text-center">DONATION</div>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Logo presented on merchandise</p>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Termly newsletter update</p>
                </div>
                <div class="col-sm">
                    <div class="sponsor-header-mini text-center">GOLD</div>
                    <div class="sponsor-header-bold text-center">$5,000+</div>
                    <div class="sponsor-header-mini text-center">DONATION</div>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Logo presented on merchandise</p>
                    <div class="py-2" />
                    <p class="grasp-icons text-center">Termly newsletter update</p>
                </div>
            </div>

            <div class="py-5" />
            <div class="sponsor-header">
                FOR MORE SPONSORSHIP INFORMATION:
                <button class = "cute-btn"><a class = "link" href = "https://www.google.com">Sponsorship Package</a></button>
            </div>
            


        </Layout>
    );
};