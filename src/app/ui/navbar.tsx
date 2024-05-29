import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
      <div className="navbar flex justify-center">
        <div className="navbar-start flex flex-row justify-between w-4/5 md:justify-center">
          <div className="dropdown font-semibold text-lg">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/realestate">Real Estate</Link></li>
              <li><Link href="/propmgmt">Prop Mgmt</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl hover:shadow-lg hover:shadow-cyan-500">
            <Image
              src="/jebteamlogo.png"
              width={48}
              height={48}
              alt="JEB"
              className=""
            />
            <span className="hidden md:flex ">JEB</span>
          </Link>
        </div>
        <div className="navbar hidden md:flex w-4/5 justify-center">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold ">
            <li><Link href="/realestate" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Real Estate</Link></li>
            <li><Link href="/propmgmt" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Prop Mgmt</Link></li>
            <li><Link href="/team" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Team</Link></li>
            <li><Link href="/contact" className="rounded-full hover:bg-sky-700 hover:text-white hover:animate-pulse hover:shadow-cyan-500 hover:shadow-lg">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
}