import React from "react";
import creadores from '../img/creadores.png'

export const About = () => {
  return (
    <section className=" ls:container h-[700px] ls:h-[850px] w-[100%] bg-white ls:mx-auto flex items-center justify-center" id="sobre_section">
      <div className="w-[1290px] max-w-[95%] mx-auto flex flex-wrap items-center justify-around lg:items-center">
        <img
          className="lg:w-[640px] w-[800px] max-w-[100%] h-auto py-0 px-10"
          src={creadores}
          alt=""
        ></img>
        <div className="w-[600px] max-w-[100%] py-0 px-0 ls:flex ls:flex-col ls:items-center ls:justify-center">
          <h4 className="text-[20px] text-[#777777] font-semibold mb-[10px]">
            ¿Quienes Somos?
          </h4>
        
          <h1 className="text-[50px] text-[#111111] font-bold mb-[20px] sl:text-[28px]  ls:text-[34px]">
            Somos Musica, Somos Creatividad.
          </h1>
    
          <p className="text-[18px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px]">
            ¡Bienvenidos a nuestra escuela de música techno! Somos una comunidad
            de amantes de la música electrónica que quieren compartir su pasión
            con otros.Mas abajo podrás ver las novedades y eventos que 
            tenemos planificados.
          </p>
          <div className="bg-white py-5 px-8 text-[16px] font-bold border-none outline-none mt-[-35px] ls:mt-[0px]">
            <button className="transition hover:cursor-pointer space-x-10 flex flex-col items-center justify-center lg:flex-row">
              <div
                className="btn btn-secondary 
         btn-sm max-w-[200px]
         h-[70px] mx-auto
         hover:bg-white hover:text-black shadow-xl ls:min-h-[70px]"
  
              >
                ¡Anotarme!
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;