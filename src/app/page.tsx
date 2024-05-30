import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";


export default function Home() {
  return (
    <>
      <FirstGlance />
      <RealPropCards />
      <WhyChoose />
      <ContactUs />
    </>
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
      <div className="flex flex-col w-full bg-slate-900 rounded-md p-8  md:rounded-lg md:w-1/3 mx-auto">
        <p className="text-lg font-semibold">Real Estate</p>
        <p className="font-medium mt-5">We help individuals find their perfect home, and investment properties.</p>
        <button className="rounded-full  bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold md:w-1/2 place-self-center hover:bg-cyan-900 hover:text-white hover:animate-pulse"><Link href="/realestate">Learn More</Link></button>
      </div>
      <div className="flex flex-col w-full bg-slate-900 rounded-md my-10 p-6 md:my-0 md:rounded-lg md:w-1/3 mx-auto">
        <p className="text-lg font-semibold">Property Management</p>
        <p className="font-medium mt-5">We put high quality tenants in your properties to keep money flowing into your pockets, stress free.</p>
        <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 p-2 font-semibold md:w-1/2 place-self-center hover:bg-cyan-900 hover:text-white hover:animate-pulse"><Link href="/propmgmt">Learn More</Link></button>
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
