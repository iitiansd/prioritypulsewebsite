import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img1.jpg';
import img3 from '../images/img1.jpg';
import './Form.css';
function Imageslider(){
    return(
        <div>
        
         <Carousel >
             <Carousel.Item>
                 <img src = {img1} height = "350px" width = "700px" alt = "img1"/>
                 </Carousel.Item>
                 <Carousel.Item>
                 <img src = {img2} height = "350px" width = "700px" alt = "img2"/>
                 </Carousel.Item>
                 <Carousel.Item>
                 <img src = {img3} height = "350px" width = "700px" alt = "img3"/>
                 </Carousel.Item>
             </Carousel>
        </div>
    );
}
export default Imageslider;