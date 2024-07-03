import Header from "./Header";
import About from "./About";
import Products from "./Products";
import Tdt from "./Tdt";
import Follow from "./Follow";
import Footer from "./Footer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Power2 } from "gsap/all";

const Hero = () => {

  const PCimage = useRef(null);
  const PCtext1 = useRef(null);
  const PCtext2 = useRef(null);
  const PCtext3 = useRef(null);

  //  Mobile reference's

  const Mobimage = useRef(null);
  const Mobtext1 = useRef(null);
  const Mobtext2 = useRef(null);
  const Mobtext3 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(PCimage.current, {
      opacity: 1,
      duration: 1.4,
      ease: Power2.easeIn,
    })
    .from(PCtext1.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')
    .from(PCtext2.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')
    .from(PCtext3.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')

    // Mobile Animation

    const tl2 = gsap.timeline();

    tl2.to(Mobimage.current, {
      opacity: 1,
      duration: 1.4,
      ease: Power2.easeIn,
    })
    .from(Mobtext1.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')
    .from(Mobtext2.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')
    .from(Mobtext3.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeInOut,
    },'a')
  });


  return (
    <>
      <div className=" bg-black w-full">
        <Header />
        <section id="home" className="relative bg-[#1b1b1b]">
          {/* <-------Mobile--------> */}
          <div className="lg:hidden bg-gradient-to-b from-black to-[#080D28]">
            <div className="flex justify-center items-center flex-col gap-1 lg:hidden py-8 ">
              <h2 ref={Mobtext1} className=" text-white font-extralight font-inter text-2xl">
                Shree
              </h2>
              <h1 ref={Mobtext2} className="text-white font-roboto text-4xl">Crafteria</h1>
              <h3 ref={Mobtext3} className="pt-6 text-white font-mono font-extralight tracking-[4px] text-lg ">
                Craft Of Divine
              </h3>
            </div>
            <img ref={Mobimage} className=" w-full object-cover opacity-0 mx-auto pb-4" src="mobile.png" />
          </div>
          {/* <-------Dekstop--------> */}
          <figure className=" w-full overflow-hidden">
          <img ref={PCimage} data-scroll data-scroll-speed="-.2"
            className=" w-full object-cover opacity-0 hidden lg:block"
            src="https://dl.dropboxusercontent.com/scl/fi/4jcuuhyryle9tw452xjel/1-2-_000000.jpg?rlkey=j553bxh07n2atr44uzmxkr8l3&st=gsfoxyu1&dl=0"
          />
          </figure>
          <div className="space-y-1 hidden lg:block lg:absolute left-[10%] top-1/2 -translate-y-1/2 z-20">
            <h2 ref={PCtext1} className=" text-white font-extralight font-inter lg:text-6xl xl:text-7xl">
              Shree
            </h2>
            <h1 ref={PCtext2} className="text-white font-roboto lg:text-8xl xl:text-9xl">
              Crafteria
            </h1>
            <h3 ref={PCtext3} className="pt-7 text-white font-mon lg:tracking-[4px] lg:text-2xl xl:text-3xl font-extralight">
              Craft Of Divine
            </h3>
          </div>
        </section>
        <About />
        <Products />
        <Tdt />
        <Follow />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
