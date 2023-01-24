import React from "react";


const ClassCard = ({ item }) => {
  return (
    <div className="flex items-center justify-center">
    <div className="bg-white shadow-2x1 min-h-[500px] group w-[300px] lg:w-full">
      <div className="overflow-hidden">
          <img
            className="group-hover:scale-110 transition-all duration-300 w-full"
            src={item.image}
            alt={item.name}
          ></img>
      </div>
      <div
        className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px]
         -translate-y-1/2 flex justify-center items-center uppercase
         font-tertiary tracking-[1px] font-semibold text-base       
         "
      >
        <div className="flex justify-between items-center w-[80%]">
          <div>
            <div className="flex items-center  gap-x-2 cursor-pointer">
              <div className="text-black">
                  <i class="fa-solid fa-compress"></i>
              </div>
              <div className="flex gap-x-1">
                <div>Profesor:</div>
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
              <div>Nombre</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
          <h3 className="h3">{item.name}</h3>
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
        ¡Inscribete!
      </div>
    </div>
    </div>
  );
};

export default ClassCard;