import React from "react";
import foto1 from "../img/foto1.jpg";
import foto2 from "../img/foto2.jpg";
import foto3 from "../img/foto3.jpg";
import Media from "react-media";
import NewsCarousel from "./carousel/newsCarousel";

export const LastContent = () => {
  return (
    <section
      className="py-24 mt-[-120px] ls:mt-[-80px] mr-[40px] ls:container ls:mx-auto"
      
    >
      <Media query="(max-width: 1200px)">
        {(matches) => {
          if (matches) {
            return (
              <React.Fragment>
                <section className="py-24 mt-[-100px]">
                  <div className="container mx-auto lg:px-0 mt-[30px]">
                    <div className="text-center mt-2 flex flex-col justify-center items-center">
                    <div className="font-primary text-[42px] mb-[-20px]">NOVEDADES</div>
                    </div>
                    <div className="flex items-center justify-center mt-[40px]">
                      <NewsCarousel />
                    </div>
                  </div>
                </section>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <div>
                  <div className="container mx-auto lg:px-0 mt-[30px]">
                    <div className="text-center mt-2 flex ls:items-center ls:justify-center lg:justify-start lg:items-center">
                      <div className="font-primary text-[40px] mb-8 lg:ml-[20px]">
                        NOVEDADES
                      </div>
                    </div>

                    <div>
                      <div class="flex item-center justify-center lg:items-start lg:justify-start px-5 py-15 mx-auto lg:mr-[250px]">
                        <div class="flex flex-wrap -m-4 w-2/4 lg:w-full items-center justify-center space-y-10 lg:space-y-0">
                          <div class="p-4 sm:w-1/2 lg:w-1/3 max-h-[370px]">
                            <div class="lg:h-full ls:h-[220px] ls:w-[170px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img
                                className="lg:h-50 md:h-48 w-full object-cover object-center"
                                src={foto1}
                                alt="blog"
                              />
                              <div class="p-6 hover:bg-[#17bf9e] hover:text-white transition duration-300 ease-in">
                                <h2 class="text-base ls:text-[14px] mb-1 text-[#17bf9e] font-semibold">
                                  Enero 20, 2023
                                </h2>
                                <h1 class="text-base  ls:text-[14px] lg:text-2xl font-semibold mb-3">
                                  Novedad Nro1
                                </h1>
                                <h1 class=" text-base leading-relaxed mb-3 ">
                                  Lorem ipsum dolor sit amet consectetur
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div class="p-4 sm:w-1/2 lg:w-1/3 max-h-[370px] hover:text-white">
                            <div class="h-full border-2 ls:h-[220px] ls:w-[170px] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img
                                class="lg:h-50 md:h-48 w-full object-cover object-center"
                                src={foto2}
                                alt="blog"
                              />
                              <div class="p-6 hover:bg-[#17bf9e] hover:text-white transition duration-300 ease-in">
                                <h2 class="text-base  ls:text-[14px] text-[#17bf9e] mb-1 font-semibold">
                                  Enero 20, 2023
                                </h2>
                                <h1 class="text-2xl  ls:text-[14px] font-semibold mb-3">
                                  Novedad Nro1
                                </h1>
                                <h1 class=" text-base  ls:text-[14px] leading-relaxed mb-3 ">
                                  Lorem ipsum dolor sit amet consectetur
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div class="p-4 sm:w-1/2 lg:w-1/3 max-h-[370px]">
                            <div class="h-full border-2 ls:h-[220px] ls:w-[170px] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img
                                class="lg:h-50 md:h-48 w-full object-cover object-center"
                                src={foto3}
                                alt="blog"
                              ></img>
                              <div class="p-6 hover:bg-[#17bf9e] hover:text-white transition duration-300 ease-in">
                                <h2 class="text-base  ls:text-[14px] hover:text-white text-[#17bf9e] mb-1 font-semibold">
                                  Enero 20, 2023
                                </h2>
                                <h1 class="text-2xl  ls:text-[14px] font-semibold mb-3">
                                  Novedad Nro1
                                </h1>
                                <h1 class=" text-base ls:text-[14px] leading-relaxed mb-3 ">
                                  Lorem ipsum dolor sit amet consectetur
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }}
      </Media>
    </section>
  );
};
