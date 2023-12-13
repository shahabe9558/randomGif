import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = () => {
   const [tag, setTag] = useState("Pussy Cat");
   const { loading, gif, fetchData } = useGif();

    return (
        <div className="flex flex-col items-center bg-blue-400 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
            <h1 className="uppercase font-bold text-2xl underline ">Random {tag} gif </h1>
            {loading ? <Spinner/> : <img src={gif}/>}
            <div className="flex flex-col items-center gap-y-3 w-full">
                <input
                type="text"
                 value={tag}
                 onChange={(event)=> setTag(event.target.value)}
                 className="uppercase bg-[#F0F0F0] w-9/12 rounded-lg font-normal py-[5px] text-sm text-center"
                />
                <button onClick={()=> fetchData(tag)} 
                className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl"
                >
                    Generate
                </button>
            </div>
        </div>
    )
}
export default Tag;