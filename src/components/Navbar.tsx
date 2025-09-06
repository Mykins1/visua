import { MagnifyingGlass } from "phosphor-react";
import Userimage from "../assets/visuaLogo.jpeg";

export default function Navbar(){
    return (
      <section className="fixed bg-white px-2 md:px-3 py-3 md:mb-2 top-0 w-full">
        <article className="flex items-center gap-4 md:justify-between w-full">
          <h2 className="font-extrabold text-lg">Visua</h2>
          <div className="relative w-[90%]">
            <MagnifyingGlass
              className="absolute  left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              className="bg-gray-200 p-2 pl-10 rounded-md w-full transition duration-200 font-normal"
              placeholder="Search..."
            />
          </div>
          <img
            src={Userimage}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
        </article>
      </section>
    );
}