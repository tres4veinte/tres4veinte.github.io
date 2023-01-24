import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import foto1 from "../../img/foto1.jpg";
import foto2 from "../../img/foto2.jpg";
import foto3 from "../../img/foto3.jpg";
import media1 from "../../img/media2.mp4";


const CarouselSection = () => {
    return (
      <Carousel className='flex flex-col  sls:max-w-[230px] ls:max-w-[300px] lg:max-w-[385px] items-center justify-center'>
                <div>
                    <img src={foto3} className="cursor-pointer" alt="" />
                    <p className="ls:hidden legend">Lorem ispum lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className=" ls:hidden legend">Lorem ispum lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className=" ls:hidden legend">Lorem ispum lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className=" ls:hidden legend">Lorem ispum lorem</p>
                </div>
                <div>
                    <img src={foto3} alt="" className="cursor-pointer"/>
                    <p className=" ls:hidden legend">Lorem ispum lorem</p>
                </div>
                
            </Carousel>
    );
  };
  
  export default CarouselSection;