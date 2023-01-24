import React, { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [firstUnderline, setFirstUnderline] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
      window.scrollY === 1 ? setFirstUnderline(true) : setFirstUnderline(false);
    });
  });

  const [activeLink, setActiveLink] = useState("sobre");


  useEffect(() => {
    const sections = {
      sobre: document.getElementById("sobre_section"),
      clases: document.getElementById("clases_section"),
      alquiler: document.getElementById("alquiler_section"),
      contacto: document.getElementById("contacto_section"),
    };

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + window.innerHeight;
      Object.entries(sections).forEach(([sectionName, section]) => {
        if (section.offsetTop <= scrollPos) {
          setActiveLink(sectionName);
        }
      });
    });
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-y-7
       lg:flex-row lg:justify-between lg:gap-y-0"
      >
        {header ? (
          <h1 className="text-3xl  text-black font-bebas tracking-widest cursor-pointer">
            TRES<span className="text-[#17bf9e]">4</span>VEINTE
          </h1>
        ) : (
          <h1 className="text-3xl  text-white font-bebas tracking-widest cursor-pointer">
            TRES<span className="text-[#17bf9e]">4</span>VEINTE
          </h1>
        )}

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4  tracking-[1px] text-[14px] mel:text-[14px] sl:text-[10px] sls:text-[10px] sls:font-bold lg:text-[20px] ls:gap-x-4
          uppercase font-black lg:gap-x-8`}
        >
          <a
            className={`transition ${
              activeLink === "sobre"  && !firstUnderline  ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#sobre_section"
            onClick={() => setActiveLink("sobre")}
          >
            Sobre
          </a>
          <a
            className={`transition ${
              activeLink === "clases" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#clases_section"
            onClick={() => setActiveLink("clases")}
          >
            Clases
          </a>
          <a
            className={`transition ${
              activeLink === "alquiler" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#alquiler_section"
            onClick={() => setActiveLink("alquiler")}
          >
            Alquiler
          </a>
          <a
            className={`transition ${
              activeLink === "contacto" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#contacto_section"
            onClick={() => setActiveLink("contacto")}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
