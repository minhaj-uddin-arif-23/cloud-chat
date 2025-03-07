import { CiSearch } from "react-icons/ci";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaIndent } from "react-icons/fa";
import { RiAtFill } from "react-icons/ri";

import image from '@/assets/imagees.png'
export default function Sidebar() {
  return (
    <div className="grid grid-cols-12 w-full min-h-screen">
     
      <aside className="col-span-3 lg:col-span-3 bg-[#242424]  p-4">
    <div className="flex justify-between">
    <div>
      <div className="flex ">
      <p><RiAtFill className="text-yellow-500 mt-2 text-2xl"/></p>
        <h1 className="text-2xl font-bold text-white ml-3"> 
       socrates</h1>
      </div>
        </div>
        <div className="flex gap-3 mt-2 text-2xl">
            <p className="text-[#868686]">< CiSearch/></p>
            <p className="text-[#868686]">< TbLayoutSidebarLeftCollapseFilled/></p>
        </div> 
        {/* add folder section */}
       
    </div>
    <div className="relative w-full">
      {/* Icon inside Input */}
      <GoPlus className="absolute left-18 top-16 transform -translate-y-1/2 text-gray-100 text-lg" />

      {/* Input Field */}
      <input
        type="text"
        className="w-full px-24 py-2 mt-10 border-2 rounded-4xl border-[#2B2B2B] bg-transparent text-white placeholder-gray-100 focus:outline-none"
        placeholder="Add Folder"
      />
    </div> 
    <div className="relative w-full">
      {/* Icon inside Input */}
      <GoPlus className="absolute left-18 top-10 transform -translate-y-1/2 text-gray-100 text-lg" />

      {/* Input Field */}
      <input
        type="text"
        className="w-full px-24 py-2 mt-4 border-2 rounded-4xl border-[#2B2B2B] bg-[#454545] text-white placeholder-gray-100 focus:outline-none"
        placeholder="Create chat"
      />
    </div>

    <div className="bg-[#454545] p-4 rounded-2xl mt-44">
      <h1 className="text-white">Upgrade to Premium</h1>
      <p className="text-gray-400 text-sm">Make the most of all features!</p>
      <input
        type="text"
        className="w-full px-20  py-2 mt-4 border-2 rounded-4xl border-orange-500 bg-[#454545] text-white placeholder-gray-100 focus:outline-none"
        placeholder="Create chat"
      />
    </div>
    <div className="flex mt-7 gap-4">
      <FaIndent className="text-white mt-1 bg-gray-800 "/>
      <h1 className="text-white">Flow AI Templates</h1>
    </div>
   <div className="flex justify-between">
   <div className="flex ">
      <img src={image} className="rounded-full w-12 border-2 mt-5" alt="" />
      <p className="mt-9 ml-3 text-white text-sm">Minhaj Uddin Arif</p>
    </div>
    <div className="">
      <IoSettingsOutline className="mt-8 text-3xl text-[#868686]" />
    </div>
   </div>
      </aside>

     
      <main className="col-span-9 lg:col-span-9 bg-[#2B2B2B] p-6">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </main>
    </div>
  )
}
