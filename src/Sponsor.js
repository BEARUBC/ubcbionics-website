import react from 'react';
import { Layout } from './components/Layout';
import ubcapplied from './Photos/Gold/ubc-applied.png';
import starfish from './Photos/Silver/Starfish.png';
import digikey from './Photos/Supporting/digikey.png';
import ieee from './Photos/Bronze/ieee.png'
import bionicsnetworklogo from './Photos/Gold/bionicsnetworklogo.png';
import ece from './Photos/Gold/ece.png';
import sbme from './Photos/Gold/sbme.jpeg';
import egbc from './Photos/Silver/egbc.png';
import asee from './Photos/Supporting/asee.png';
import eus from './Photos/Supporting/eus.jpeg';
import pololu from './Photos/Supporting/pololu.png';
import mecheng from './Photos/Bronze/mecheng.jpeg';
import ubcmaterials from './Photos/Bronze/ubcmaterials.png';

export const Sponsor = () => {
    return(
        <Layout>
            <div class="py-4" />
            <div className="headerBlue text-center">OUR SPONSORS</div>
            <div class="py-3" />
            <div class="sponsor-header text-center">GOLD</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <div class="row">
                <div class="col-sm-3">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ubcapplied } />
                </div>
                <div class="col-sm-3">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ece } />
                </div>
                <div class="col-sm-3">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt=''  src={ bionicsnetworklogo } />
                </div>
                <div class="col-sm-3">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt=''  src={ sbme } />
                </div>
            </div>
            <div class="py-3" />
            <div class="sponsor-header text-center">SILVER</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-2"></div>
                <div class="col-sm-2">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ egbc } />
                </div>
                <div class="col-sm-2">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ starfish } />
                </div>
            </div>
            <div class="py-3" />
            <div class="sponsor-header text-center">BRONZE</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-2" />
            <div class="row">
                <div class="col-sm-4">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ mecheng } />
                </div>
                <div class="col-sm-4">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" style={{height: 75, width: 275}} alt='' src={ ubcmaterials } />
                </div>
                <div class="col-sm-4">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' src={ ieee } />
                </div>
            </div>
     
            <div class="sponsor-header text-center">SUPPORTING ORGANIZATIONS</div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>
            <div class="py-2" />
            <div class="row">
            <div class="col-sm-3">
            <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ digikey } />
            </div>
            <div class="col-sm-3">
            <img class="sq_sponsor img-responsive center-block d-block mx-auto" style={{height: 175, width: 250}} alt='' src={ pololu } />
            </div>
                <div class="col-sm-3">
                    <img class="rect_sponsor img-responsive center-block d-block mx-auto" alt='' style={{height: 115, width: 310}} src={ asee } />
                </div>
                <div class="col-sm-3">
                    <img class="sq_sponsor img-responsive center-block d-block mx-auto" alt='' src={ eus } />
                </div>
            </div>
            <hr  style={{color: '#000000', backgroundColor: '#000000', height: 1, borderColor : '#000000'}}/>

            <div class="py-3" />
            <div class="sponsor-header">
                FOR MORE SPONSORSHIP INFORMATION: 
                <button class = "cute-btn"><a class = "link" href = "https://drive.google.com/drive/u/1/folders/1L06FEgcfDd0wOwUYOpnhefMNBcIUzbFQ">Sponsorship Package</a></button>
                </div>
        
            


        </Layout>
    );
};