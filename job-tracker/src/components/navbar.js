import { BiHomeAlt2, BiUser, BiInfoCircle, BiLogOut } from "react-icons/bi";
import { FiFeather } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="w-24 h-screen flex flex-col items-center bg-indigo-950 text-white text-4xl">
            <FiFeather className='h-1/4 cursor-pointer hover:text-5xl transition-all'/>
            <div id='functions' className='h-1/2 flex flex-col text-4xl justify-between md:py-24 bg-gray-200 px-2 rounded-full text-gray-700'>
                <BiHomeAlt2 className="hover:text-5xl cursor-pointer transition-all duration-300 hover:bg-slate-300 rounded-lg"/>
                <BiUser className="hover:text-5xl cursor-pointer transition-all duration-300 hover:bg-slate-300 rounded-lg"/>
                <BiLogOut className="hover:text-5xl cursor-pointer transition-all duration-300 hover:bg-slate-300 rounded-lg"/>
            </div>
            <BiInfoCircle className="h-1/4 cursor-pointer hover:text-5xl transition-all"/>
        </nav>
    );
};