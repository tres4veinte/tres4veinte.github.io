import React from "react";

import foto1 from "../img/foto1.jpg";

const Rent = () => {
  return (
    <section className="py-24 ls:mt-[-230px] mt-[-100px]" id="alquiler_section">
      <div className="container mx-auto xl:flex xl:justify-center xl:items-center xl:space-x-40 lg:px-0 mt-[30px]">
        <div className="text-center mt-2 flex flex-col justify-center items-center xl:items-center xl:justify-start xl:mt-[-40px]">
          <div className="font-primary text-[42px] mb-8">RENTA</div>
          <p className="text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px] xl:max-w-[400px]">
            ¿Necesitas grabar tus propios sets? ¡Tenemos lo que necesitas! Dos
            CDJ y un mixer XONE-96, con los que podrás mezclar tus temas y
            grabarlos a un .wav que te lo enviamos para descargar a través de un
            link por correo.
          </p>
          <p className="ls:hidden text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px] xl:max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          className="flex item-center justify-center  max-w-sm mx-auto gap-[30px] 
        lg:grid-cols-1 lg:max-w-none lg:mx-0 mt-[50px]"
        >
          <div className="flex items-center justify-center sl:max-w-[240px]">
            <div className="bg-white shadow-2x1 min-h-[500px] group w-[300px] lg:w-full">
              <div className="overflow-hidden">
                <img
                  className="group-hover:scale-110 transition-all duration-300 w-full lg:max-w-[350px]"
                  src={foto1}
                  alt=""
                ></img>
              </div>
              <div
                className="bg-white shadow-lg max-w-[300px]  mx-auto h-[60px]
         -translate-y-1/2 flex justify-center items-center uppercase
         font-tertiary tracking-[1px] font-semibold text-base       
         "
              >
                <div className="flex justify-between items-center w-[80%] sl:w-[80%]">
                  <div>
                    <div className="flex items-center  gap-x-2 cursor-pointer">
                      <div className="text-black">
                        <i class="fa-solid fa-compress"></i>
                      </div>
                      <div className="flex gap-x-1">
                        <div>Valor:</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-2 cursor-pointer">
                    <div className="text-black">
                      <i
                        className="flex items-center text-[18px]"
                        class="fa-solid fa-person"
                      ></i>
                    </div>
                    <div className="flex gap-x-1">
                      <div>$1000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:hidden text-center">
                <h3 className="h3">Sala Renta</h3>
                <p className="max-w-[300px] mx-auto mb-3 lg:mb65">
                  lorem lorem lorem lorem lorem lorem lorem
                </p>
              </div>
              <div
                className="btn btn-secondary 
         btn-sm max-w-[250px]
         h-[70px] mx-auto
         hover:bg-white hover:text-black shadow-xl
         "
              >
                !Alquilar!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
