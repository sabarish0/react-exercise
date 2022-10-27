import React from 'react';
import './style.css';
import Bar from './head.js';
function About() {
    return(
        <div className='about'>
            <Bar/>
            <center>
                <h1>CENTUARY PROCEESING MILLS</h1>
                <p>19 Thirunagar colony 4th street,<br/>Erode- 638 005,tamilnadu<br/>
                <i class="bi bi-telephone-fill"></i> Telephone no : 2293250</p>
                <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Centuary%2019%20THIRUNAGAR%20COLONY%204TH%20STREET,%20Tamil%20Nadu%20638003&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </center>
        </div>
    )
}
export default About;