import Image from "next/image";

export default function Team(){
    return (
        <>
            <div className="font-bold text-lg my-6">
                <p className="text-center">Meet The Team</p>
            </div>
            <div className="grid grid-cols-1 w-4/5 mx-auto md:grid-cols-2">
                <Person person="Eddy" bio={eddybio} pic="/eddyweb.JPG" />
                <Person person="Mikey" bio={mikeybio} pic="/mikeyweb.JPG" />
                <Person person="Jackson" bio={birdbio} pic="/birdweb.JPG" />
                <Person person="Ethan" bio={ethanbio} pic="/ethanweb.JPG" />
            </div>
        </>
    );
}

function Person({person,bio,pic}:{person:string, bio:string, pic:string}){
    return (
        <div className="flex flex-col mx-auto my-6 md:p-6">
            <Image
                src={pic}
                width={300}
                height={200}
                alt={person}
                className="place-self-center rounded-lg mb-5 shadow-md shadow-white md:w-3/4"
            />
            <p className="font-semibold text-lg place-self-center mb-6">{person}</p>
            <p>{bio}</p>
        </div>
    );
}
const eddybio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptates non rerum numquam pariatur cupiditate aliquid rem harum facilis quasi, est adipisci aperiam architecto qui tempora fuga ex mollitia. Vitae.";
const mikeybio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptates non rerum numquam pariatur cupiditate aliquid rem harum facilis quasi, est adipisci aperiam architecto qui tempora fuga ex mollitia. Vitae.";
const birdbio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptates non rerum numquam pariatur cupiditate aliquid rem harum facilis quasi, est adipisci aperiam architecto qui tempora fuga ex mollitia. Vitae.";
const ethanbio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptates non rerum numquam pariatur cupiditate aliquid rem harum facilis quasi, est adipisci aperiam architecto qui tempora fuga ex mollitia. Vitae.";