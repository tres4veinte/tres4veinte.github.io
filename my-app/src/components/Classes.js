import React, { useContext } from "react";

import foto1 from "../img/foto1.jpg";
import foto2 from "../img/foto2.jpg";
import foto3 from "../img/foto3.jpg";
import ClassCard from "./classCard";



const Classes = () => {
  const classData = [
    {
      id: "01",
      name: "Clase de Musica 1",
      image: foto1,
    },

    {
      id: "02",
      name: "Clase de Musica 2",
      image: foto2,
    },

    {
      id: "03",
      name: "Clase de Musica 3",
      image: foto3,
    },
  ];

  return (
    <section className="py-24 ls:mt-[-220px]  mt-[-100px] " id="clases_section">
      <div className="container mx-auto lg:px-0 mt-[10px]">
        <div className="text-center mt-2 flex flex-col justify-center items-center">
          <div className="font-primary text-[42px] mb-8">CLASES</div>
          <p className="text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px]">
            ¿Quieres aprender a mezclar como un pro? ¿O quizás quieres aprender
            a producir tus propios DJ sets? Todas las clases que ofrecemos son
            abiertas tanto para alumnos principiantes.
          </p>
        </div>

        <div
          className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] 
        lg:grid-cols-3 lg:max-w-none lg:mx-0 mt-[50px]"
        >
          {classData.map((item) => {
            return <ClassCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Classes;
