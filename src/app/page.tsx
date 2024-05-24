import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-600 w-full ">
      <Navbar />
      <FirstGlance />
      <RealPropCards />
      <WhyChoose />
      <ContactUs />
    </div>
  );
}

//add team picture at the bottom of the home page

// export function useIsVisible(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//         setIntersecting(entry.isIntersecting)
//     } 
//     );
    
//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }

function ContactUs(){
  return (
    <div className="w-4/5 mx-auto flex flex-col md:my-32">
      <button className="rounded-full font-semibold text-lg bg-cyan-700 text-gray-100 w-1/2 mx-auto my-8 md:w-32 md:mb-20 md:hidden"><a href="">Contact Us</a></button>
      <div className="flex flex-row">
        <div className="basis-1/2 md:basis-1/4 md:mx-auto">
          <Image 
            src="/Sky Logo PNG.png"
            width={169}
            height={65}
            alt="sky realty co"
          />
        </div>
        <div className="basis-1/2 md:basis-1/4 md:mx-auto">
          <Image
            src="/passaroleasinglogo.png"
            width={300}
            height={83}
            alt="passaro leasing"
          />
        </div>
      </div>
    </div>
  );
}


function WhyChoose(){
  return (
    <div className="flex flex-col w-4/5 mx-auto h-fit mt-14 md:w-2/3 ">
      <p className="font-bold text-lg text-center h-24 basis-1/8">Why Choose Us?</p>
      <div className="md:flex-row md:flex">
        <div className="basis-1/4 rounded-lg bg-slate-900 text-gray-300 p-4 shadow-md shadow-gray-200/25">
          <p>
            <Image
              src="/quick.png"
              width={70}
              height={70}
              alt=""
            />
          </p>
          <p className="text-lg font-bold my-5">Quick Communication</p>
          <p className="font-medium">We respond quickly to owners, tenants, and potentials.</p>
        </div>
        <div className="basis-1/4 my-7 rounded-lg bg-slate-900 text-gray-300 p-4 md:my-0 md:mx-auto shadow-md shadow-gray-200/25">
          <p>
            <Image
                src="/productivity.png"
                width={70}
                height={70}
                alt=""
              />
          </p>
          <p className="text-lg font-bold my-5">Efficient Processes</p>
          <p className="font-medium">Our technology allows property tasks to be done efficiently.</p>
        </div>
        <div className="basis-1/4 rounded-lg bg-slate-900 text-gray-300 p-4 shadow-md shadow-gray-200/25">
          <p>
            <Image
                src="/knowledge.png"
                width={70}
                height={70}
                alt=""
              />
          </p>
          <p className="text-lg font-bold my-5">Expertise and Experience</p>
          <p className="font-medium">We specialize in marketing, and getting properties rented quickly.</p>
        </div>
      </div>
    </div>
  );
}

function RealPropCards(){
  return (
    <div className="flex flex-col w-4/5 mx-auto md:flex-row md:mb-48">
      <div className="flex flex-col w-full bg-slate-900 rounded-md p-6  md:rounded-lg md:w-1/3 mx-auto">
        <p className="text-lg font-semibold">Real Estate</p>
        <p className="font-medium mt-5">We help individuals find their perfect home, and investment properties.</p>
        <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold md:w-1/3 place-self-center hover:bg-cyan-900 hover:text-white hover:animate-bounce"><a href="">Learn More</a></button>
      </div>
      <div className="flex flex-col w-full bg-slate-900 rounded-md my-10 p-6 md:my-0 md:rounded-lg md:w-1/3 mx-auto">
        <p className="text-lg font-semibold">Property Management</p>
        <p className="font-medium mt-5">We put high quality tenants in to keep money flowing into your pockets, stress free.</p>
        <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold md:w-1/3 place-self-center hover:bg-cyan-900 hover:text-white hover:animate-bounce"><a href="">Learn More</a></button>
      </div>
    </div>
  );
}

function FirstGlance(){
  return (
    <div className="flex flex-col w-4/5 mx-auto h-screen pt-14 md:flex-row-reverse  md:pt-0 md:pb-32">
      <Image 
        src="/jebteamlogo.png"
        width={340}
        height={340}
        alt="logo"
        className="rounded-lg shadow-lg shadow-sky-700 bg-slate-900 mx-auto md:h-fit md:place-self-center"
      />
      <div className="mx-auto my-auto md:p-6">
        <p className="mb-5 text-xl font-bold md:mb-14">Jeb Real Estate and Property Management Team</p>
        <p className="font-medium">We are here to take your real estate and property management game to the next level.</p> 
        <p className="text-center text-lg font-bold mt-10 animate-bounce md:hidden">&darr;</p>
      </div>
    </div>
  );
}

function Navbar(){
  return (
    <div className="navbar flex justify-center">
      <div className="navbar-start flex flex-row justify-between w-4/5 md:justify-center">
        <div className="dropdown font-semibold text-lg">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="">Real Estate</a></li>
            <li><a href="">Prop Mgmt</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:shadow-lg hover:shadow-cyan-500">
          <Image
            src="/jebteamlogo.png"
            width={48}
            height={48}
            alt="JEB"
            className=""
          />
          <span className="hidden md:flex ">JEB</span>
        </a>
      </div>
      <div className="navbar hidden md:flex w-4/5 justify-center">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold ">
          <li><a href="" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Real Estate</a></li>
          <li><a href="" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Prop Mgmt</a></li>
          <li><a href="" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Team</a></li>
          <li><a href="" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
