import React, { useEffect } from 'react'
import About from '../components/About';
import Classes from '../components/Classes';
import Contact from '../components/contact';
import HeroSlider from '../components/HeroSlider';
import { LastContent } from '../components/lastContent';
import { Media } from '../components/Media';
import Rent from '../components/Rent';



export const Home = () => {

    useEffect(() => {
      window.scroll(0, 0);
    }, []);
  
  
    return (
      <>
      <HeroSlider/>
        <div className='container mx-auto relative' id="home_section">
          <div className='mt-4 p-4 lg:shadow-x1 lg:absolute lg:left-0
           lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
        </div>   
        </div>
        <About/>
        <LastContent/>
        <Classes/>
        <Rent/>
        <Media/>
        <Contact/>
      </>
    )
  }