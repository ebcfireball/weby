import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 w-full">
      <Navbar />
      <FirstGlance />
      <RealPropCards />
      <WhyChoose />
      <ContactUs />
    </div>
  );
}

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
    <div className="w-4/5 mx-auto flex flex-col">
      <button className="rounded-full font-semibold text-lg bg-cyan-700 text-gray-100 w-1/2 mx-auto my-8"><a href="">Contact Us</a></button>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Image 
            src="/Sky Logo PNG.png"
            width={169}
            height={65}
            alt="sky realty co"
          />
        </div>
        <div className="basis-1/2">
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
    <div className="flex flex-col w-4/5 mx-auto h-fit mt-14">
      <p className="font-bold text-lg text-center h-24 basis-1/8">Why Choose Us?</p>
      <div className="basis-1/4 rounded-lg bg-slate-900 text-gray-300 p-4">
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
      <div className="basis-1/4 my-7 rounded-lg bg-slate-900 text-gray-300 p-4">
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
      <div className="basis-1/4 rounded-lg bg-slate-900 text-gray-300 p-4">
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
  );
}

function RealPropCards(){
  return (
    <div className="grid grid-cols-1 w-4/5 mx-auto">
      <div className="flex flex-col w-full bg-slate-900 rounded-md p-6">
        <p className="text-lg font-semibold">Real Estate</p>
        <p className="font-medium mt-5">We help individuals find their perfect home, and investment properties.</p>
        <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold "><a href="">Learn More</a></button>
      </div>
      <div className="flex flex-col w-full bg-slate-900 rounded-md my-10 p-6">
        <p className="text-lg font-semibold">Property Management</p>
        <p className="font-medium mt-5">We put high quality tenants in to keep money flowing into your pockets, stress free.</p>
        <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold "><a href="">Learn More</a></button>
      </div>
    </div>
  );
}

function FirstGlance(){
  return (
    <div className="grid grid-cols-1 w-4/5 mx-auto h-screen pt-14">
      <Image 
        src="/jebteamlogo.png"
        width={340}
        height={340}
        alt="logo"
        className="rounded-lg shadow-lg shadow-cyan-700 bg-slate-900 mx-auto"
      />
      <div className="mx-auto">
        <p className="mb-5 text-xl font-bold">Jeb Real Estate and Property Management Team</p>
        <p className="font-medium">We are here to take your real estate and property management game to the next level.</p> 
        <p className="text-center font-bold mt-10">&darr;</p>
      </div>
    </div>
  );
}

function Navbar(){
  return (
    <div className="navbar flex justify-center">
      <div className="navbar-start flex flex-row justify-between w-4/5">
        <div className="dropdown font-semibold text-lg">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Contact</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Prop Mgmt</a></li>
            <li><a href="">Real Estate</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl ">
          <Image
            src="/jebteamlogo.png"
            width={48}
            height={48}
            alt=""
          />
        </a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Team</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
