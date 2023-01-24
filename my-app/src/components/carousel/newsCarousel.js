import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import foto1 from "../../img/foto1.jpg";
import foto3 from "../../img/foto3.jpg";



const NewsCarousel = () => {
    return (
      <Carousel className='flex flex-col  sls:max-w-[230px] ls:max-w-[300px] lg:max-w-[385px] items-center justify-center'>
                <div>
                    <img src={foto1} className="cursor-pointer" alt="" />
                    <p className="ls legend">22 de Enero. Lorem Lorem Lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className="ls legend">22 de Enero. Lorem Lorem Lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className="ls legend">22 de Enero. Lorem Lorem Lorem</p>
                </div>                
            </Carousel>
    );
  };
  
  export default NewsCarousel;