import Image from "next/image";
import Link from "next/link";

export default function Property(){
    return(
        <div className="">
            <Prop />
        </div>
    );
}

function Prop(){
    return (
        <div className="flex flex-col h-fit md:flex-row">
            <Long />
            <Short />
        </div>
    );
}

function Long(){
    return (
        <div className="mx-auto my-10 w-5/6 flex flex-col md:p-6 md:shadow-lg md:shadow-cyan-600 md:rounded-lg md:w-2/5 md:my-4 md:bg-slate-700 md:h-fit">
            <p className="font-bold text-lg text-center mb-5">Long Team Rentals</p>
            <ul>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Tenant Screening and Placement </span> We handle tenant applications, background checks, and lease agreements. We find reliable, responsible tenants who will stay for an extended period.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Rent Collection and Financial Management </span> We collect rent on your behalf, handle late payments, and ensure consistent cash flow. Additionally, we manage property-related expenses, such as maintenance and repairs.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Property Maintenance </span> Regular inspections, maintenance, and repairs are part of our responsibilities. We address issues promptly to keep the property in good condition.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Communication </span> We act as a liaison between you and the tenant. We handle inquiries, complaints, and maintenance requests.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Legal Compliance </span> We stay up-to-date with local laws and regulations. We ensure that your property complies with safety codes, zoning rules, and other legal requirements.</li>
            </ul>
            <button className="rounded-full bg-cyan-500 mt-4 text-gray-100 py-2 px-4 font-semibold w-fit mx-auto md:animate-bounce"><Link href="/contact">Level Up <span className="text-lg">&#8648;</span></Link></button>
        </div>
    );
}

function Short(){
    return (
        <div className="mx-auto  w-5/6 flex flex-col md:my-4 md:p-6 md:shadow-lg md:shadow-cyan-600 md:rounded-lg md:w-2/5 md:bg-slate-700 md:h-fit">
            <p className="font-bold text-lg text-center mb-5">Short Team Rentals</p>
            <ul>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Listing Optimization </span> We create appealing listings with high-quality photos, engaging descriptions, and competitive pricing. We attract guests and maximize occupancy.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Booking Management </span> We handle guest inquiries, bookings, and reservations. We coordinate check-ins, check-outs, and cleaning schedules.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Guest Services </span>  During the guest’s stay, we provide assistance, address any issues, and ensure a positive experience. This includes handling emergencies and maintenance requests promptly.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Cleaning and Maintenance </span> Regular cleaning and maintenance are crucial for short-term rentals. We arrange cleaning services between guests and perform necessary repairs.</li>
                <li className="p-2 text-md text-center"><span className="font-semibold text-lg block mb-4 text-center text-slate-400">Revenue Optimization </span> We monitor market trends, adjust pricing based on demand, and optimize revenue. Our expertise helps you achieve higher returns on your investment.</li>
            </ul>
            <button className="rounded-full bg-cyan-500 my-4 text-gray-100 py-2 px-4 font-semibold w-fit mx-auto md:animate-bounce md:my-2"><Link href="/contact">Level Up <span className="text-lg">&#8648;</span></Link></button>
        </div>
    );
}