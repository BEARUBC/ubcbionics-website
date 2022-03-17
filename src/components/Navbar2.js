import React from 'react';
import bionicslogo from '../Photos/bionicslogo.png';


export const Navbar2 = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark blue">
        <a class="navbar-brand" href="/">
            <img src={ bionicslogo } width="60" height="60" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item active">
                <a class="nav-link navbar-white-font text-white" href="/grasp">GRASP<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar-white-font text-white" href="/teams">TEAMS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar-white-font text-white" href="/join">JOIN US</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar-white-font text-white" href="/sponsors">SPONSORS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar-white-font text-white" href="/contactform">CONTACT US</a>
            </li>
            </ul>
        </div>
        </nav>
        
    )

}