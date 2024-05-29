import Image from "next/image";

export default function Contact(){
    return(
        <>
            <div className="w-5/6 flex flex-col mx-auto h-screen">
                <Phone />
            </div>
        </>
    );
}

function Phone(){
    return (
        <div className="md:flex md:flex-col md:place-items-center md:shadow-lg md:shadow-cyan-500 md:w-fit md:p-6 md:place-self-center md:rounded-lg md:my-14 md:bg-slate-700">
            <p className="text-lg font-bold text-center my-6">Talk To Us</p>
            <p className="font-medium text-md text-center">Contact us to see how we can help you get closer to a more stress free state!</p>
            <p className="flex flex-row my-14 h-1/4 font-semibold text-md ">
                <Image
                    src="/contact-us.png"
                    width={70}
                    height={70}
                    alt="phone picture"
                    className="h-fit my-auto md:"
                />
                <p className="flex flex-col my-auto ml-10 md:">
                    <span className="underline decoration-2 underline-offset-4 mb-2">Call Us</span>
                    <span className="font-bold text-cyan-600 animate-pulse">631-568-1633</span>
                </p>
            </p>
            <p className="flex flex-row my-14 h-1/4 font-semibold text-md md:my-0 md:ml-28">
                <Image
                    src="/email.png"
                    width={70}
                    height={70}
                    alt="email picture"
                    className="h-fit my-auto"
                />
                <p className="flex flex-col ml-10 my-auto ">
                    <span className="underline decoration-2 underline-offset-4 mb-2">Email Us</span>
                    <span className="font-bold text-cyan-600 animate-pulse">jebteam@passaroleasing.com</span>
                </p>            
            </p>
            <p className="flex flex-row  h-1/4 font-semibold text-md md:my-14">
                <Image
                    src="/conversation.png"
                    width={70}
                    height={70}
                    alt="text picture"
                    className="h-fit my-auto"
                />
                <p className="flex flex-col my-auto ml-10">
                    <span className="underline decoration-2 underline-offset-4 mb-2">Text Us</span>
                    <span className="font-bold text-cyan-600 animate-pulse">631-568-1633</span>
                </p>            
            </p>
        </div>
    );
}