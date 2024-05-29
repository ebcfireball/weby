import Link from "next/link";

export default function Real(){
    return (
        <div className="flex flex-col md:flex-row">
           <Firsthome />
           <Selling />
           <Investment /> 
        </div>
    );
}

function Firsthome(){
    return (
        <div className="mx-auto  h-fit w-5/6 flex flex-col md:p-6 md:shadow-lg md:shadow-cyan-600 md:rounded-lg md:w-fit md:my-4 md:bg-slate-700 md:mx-6 2xl:w-1/4 2xl:mx-auto">
            <p className="font-bold text-lg text-center mb-5">Buying A Home</p>
            <ul>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Find the Right Property</span> After understanding your preferences, budget, and requirements, we will schedule appointments for you to tour homes that match your criteria. We have a strong grasp of the local inventory and can help you find properties that align with your needs.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Negotiate the Offer</span> Once you’ve found a property you like, we will guide you on an appropriate price to offer. We’ll present your offer to the seller’s agent and negotiate on your behalf. Our goal is to secure the best deal for you.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Other Proffesionals </span> We can refer you to reliable professionals, such as mortgage brokers, real estate attorneys, home inspectors, and movers. This network of experts ensures a smoother process from start to finish.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Help Overcome Setbacks </span>Real estate transactions can encounter setbacks, whether related to financing, inspections, or other issues. We will help you navigate these challenges, providing advice and solutions along the way.</li>
            </ul>
            <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 py-2 px-4 font-semibold w-1/3 mx-auto animate-pulse"><Link href="/contact">Buy </Link></button>
        </div>
    );
}



function Selling(){
    return (
        <div className="mx-auto my-10 w-5/6 flex flex-col md:p-6 md:shadow-lg md:shadow-cyan-600 md:rounded-lg md:w-fit md:my-4 md:bg-slate-700 md:mx-6 2xl:w-1/4 2xl:mx-auto">
            <p className="font-bold text-lg text-center mb-5">Selling Your Home</p>
            <ul>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Listing Your Home</span> We will list your house on the multiple listing service (MLS) with accurate details, high-quality photos, and an appealing description. This exposure helps attract potential buyers.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Pricing Strategy</span> We analyze market data, recent sales, and comparable properties to determine the right price for your home. We aim to maximize your sales price while ensuring competitiveness.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Marketing </span>We create a comprehensive marketing plan. This includes online listings, open houses, virtual tours, and targeted advertising. We leverage their network and connections to reach potential buyers.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Negotiations </span>When offers come in, we negotiate on your behalf. We handle counteroffers, contingencies, and other terms to secure the best deal for you.</li>
            </ul>
            <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 py-2 px-4 font-semibold w-1/3 mx-auto animate-pulse "><Link href="/contact">Sell</Link></button>
        </div>
    );
}

function Investment(){
    return (
        <div className="mx-auto w-5/6 flex flex-col md:p-6 md:shadow-lg md:shadow-cyan-600 md:rounded-lg md:w-fit md:my-4 md:bg-slate-700 md:mx-6 2xl:w-1/4 2xl:mx-auto">
            <p className="font-bold text-lg text-center mb-5">Investing</p>
            <ul>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Market Insights and Trends</span> We keep a pulse on the local real estate market. We identify emerging trends, neighborhoods with growth potential, and areas where investment opportunities abound. Our insights help you make informed decisions.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Networking</span> We connect you with other professionals—property managers, contractors, lenders, and inspectors. These connections streamline the investment process and ensure you have a reliable team.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Investment Strategies</span>Different investment strategies exist—long-term rentals, fix-and-flip, vacation rentals, etc. We help you choose the right strategy based on your risk tolerance and financial goals.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Due Diligence</span>Before closing a deal, due diligence is essential. We assist with property inspections, title searches, and legal paperwork. We ensure you’re making an informed investment.</li>
            </ul>
            <button className="rounded-full bg-cyan-500 my-4 text-gray-100 py-2 px-4 font-semibold w-fit mx-auto animate-pulse"><Link href="/contact">Start Investing</Link></button>
        </div>
    );
}