import { CiSearch } from "react-icons/ci";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { HiMiniSparkles } from "react-icons/hi2";
import { FaIndent } from "react-icons/fa";
import { RiAtFill } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaDropbox } from "react-icons/fa6";
import image from "@/assets/imagees.png";
import { FaGoogleDrive } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import cursor from "@/assets/image.png";
import { PiWarningCircle } from "react-icons/pi";
import { MdWbCloudy } from "react-icons/md";

export default function Sidebar() {
  const [files] = useState([
    { name: "Report_file.pdf", id: 1 },
    { name: "Article.docs", id: 2 },
  ]);
  const [hover, setHover] = useState(false);
  return (
    <div className="grid grid-cols-12 w-full min-h-screen">
      {/* left content */}
      <aside className="col-span-12 sm:col-span-3 lg:col-span-3 bg-[#242424]">
        <div className="h-screen w-full lg:w-80 bg-[#242424] p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <RiAtFill className="text-yellow-500 text-2xl" />
                <h1 className="text-2xl font-bold text-white ml-3">socrates</h1>
              </div>
              <div className="flex gap-3 text-2xl">
                <CiSearch className="text-[#868686]" />
                <TbLayoutSidebarLeftCollapseFilled className="text-[#868686]" />
              </div>
            </div>

            {/* Add Folder Section */}
            <div className="relative w-full mt-6">
              <GoPlus className="absolute left-18 top-6 transform -translate-y-1/2 text-gray-100 text-lg" />
              <input
                type="text"
                className="w-full px-24 py-2 border-2 rounded-full border-[#2B2B2B] bg-transparent text-white placeholder-gray-100 focus:outline-none"
                placeholder="Add Folder"
              />
            </div>

            {/* Create Chat Section */}
            <div className="relative w-full mt-4">
              <GoPlus className="absolute left-18 top-6 transform -translate-y-1/2 text-gray-100 text-lg" />
              <input
                type="text"
                className="w-full px-24 py-2 border-2 rounded-full border-[#2B2B2B] bg-[#454545] text-white placeholder-gray-100 focus:outline-none"
                placeholder="Create chat"
              />
            </div>
          </div>

          {/* --------- Lower Section --------- */}
          <div>
            {/* Premium Section */}
            <div className="bg-[#454545] p-4 rounded-2xl">
              <h1 className="text-white">Upgrade to Premium</h1>
              <p className="text-gray-400 text-sm">
                Make the most of all features!
              </p>
              <input
                type="text"
                className="w-full px-16 py-2 mt-4 border-2 rounded-full border-orange-500 bg-[#454545] text-white placeholder-gray-100 focus:outline-none"
                placeholder="Upgrade plan"
              />
            </div>

            {/* AI Templates */}
            <div className="flex mt-7 gap-4">
              <FaIndent className="text-white mt-1 bg-gray-800" />
              <h1 className="text-white">Flow AI Templates</h1>
            </div>

            {/* User Info Section */}
            <div className="flex justify-between mt-6 items-center">
              <div className="flex items-center">
                <img
                  src={image}
                  className="rounded-full w-12 border-2"
                  alt="User"
                />
                <p className="ml-3 text-white text-sm">Minhaj Uddin Arif</p>
              </div>
              <IoSettingsOutline className="text-3xl text-[#868686]" />
            </div>
          </div>
        </div>
      </aside>

      {/* main content in slide */}
      <main className="col-span-12 sm:col-span-9 lg:col-span-9 bg-[#2B2B2B] p-6">
        <p className="text-sm ml-28 items-center justify-center text-center  rounded-full md:w-full sm:w-full hidden lg:inline ">
          <Button className="">
            <PiWarningCircle /> The web version does not display local chats. To
            access all features, please{" "}
            <span className="text-orange-500   ">install the app</span>
          </Button>
        </p>

        <div className="p-14">
          <div className="text-center">
            <p className="text-4xl font-bold text-white flex items-center justify-center">
              Add Files to{" "}
              <MdWbCloudy className="ml-2 rounded-md p-1 mb-3 bg-black text-blue-700 mr-3 left-1 relative" />
              Cloud Chat
            </p>
            <p className="text-[#B7B7B7] text-sm mt-4">
              Your files will not be stored on our servers and no AI models will
              be trained.
            </p>
            <p className="text-[#F37F0C] text-sm">
              Supported File Types: .docx, .pdf, .epub, and many text filetypes
            </p>
          </div>
        </div>

        {/* 4 card section */}
        <div className="flex flex-col items-center gap-3 p-6">
          {/* File Upload Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-3 bg-[#242424] p-6 rounded-2xl w-80 sm:w-96 items-center">
              <LiaExternalLinkAltSolid className="text-yellow-400 w-10 h-12" />
              <p className="text-white">
                Drag & drop local files here,
                <br /> or click to select
              </p>
            </div>

            {/* Public URL Upload */}
            <div className="flex flex-col gap-3 bg-[#242424] p-6 rounded-2xl w-80 sm:w-96">
              <div className="flex items-center gap-3">
                <MdOutlineFileUpload className="text-yellow-400 w-10 h-12" />
                <p className="text-white">Enter a public URL:</p>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 pr-20 bg-[#353535] text-white rounded-full border-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="https://www.example.com.pdf"
                />
                <Button className="absolute right-[0.5px] top-1/2 transform -translate-y-1/2 bg-[#535353] text-white px-4 py-1 rounded-full">
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Cloud Upload Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex gap-3 bg-[#242424] p-6 rounded-2xl w-80 sm:w-96 items-center">
              <FaDropbox className="text-blue-400 w-10 h-12" />
              <p className="text-white">Add files from Dropbox</p>
            </div>
            <div className="flex gap-3 bg-[#242424] p-6 rounded-2xl w-80 sm:w-96 items-center">
              <FaGoogleDrive className="text-green-400 w-10 h-12" />
              <p className="text-white">Add files from Google Drive</p>
            </div>
          </div>

          {/* Uploaded Files List */}
          <div className="bg-[#242424] px-5 py-2 w-full max-w-2xl mt-3 flex gap-6 rounded-full flex-wrap">
  {files.map((file) => (
    <div
      key={file.id}
      className="flex items-center justify-between bg-[#2B2B2B] p-3 rounded-full mb-2 w-full sm:w-auto"
    >
      <div className="flex gap-5">
        <div className="flex items-center gap-3">
          <AiOutlineFileText className="text-red-600 w-6 h-6" />
          <p className="text-white text-sm">{file.name}</p>
        </div>
        <label className="flex items-center gap-2 text-white cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-yellow-400 text-sm"
          />
          Force OCR
        </label>
      </div>
    </div>
  ))}
</div>


          {/* Action Buttons */}
          <div className="flex gap-6 mt-6 flex-col sm:flex-row">
            <Button className="px-20 py-6 rounded-4xl text-white bg-[#2B2B2B] border-1 border-yellow-600 hover:bg-yellow-400 hover:text-black cursor-pointer">
              Start
            </Button>
            <p className="mt-3 text-white">or</p>

            <Button className="px-8 py-6 rounded-4xl text-white bg-yellow-500 border-1 border-yellow-600 hover:bg-[#2B2B2B] hover:text-white cursor-pointer text-sm">
              <HiMiniSparkles /> Start With Deep Drive
            </Button>
            <PiWarningCircle className="text-white mt-5" />
          </div>

          {/* Cursor Icon and Card */}
          <div className="relative w-full max-w-md p-4 text-white">
            {/* Cursor Icon */}
            <img
              src={cursor} // Ensure the cursor image is in the public folder
              alt="Icon"
              className="absolute top-[-35px] left-[447px] z-10 w-8 text-white"
            />

            {/* Card */}
            <div className="">
              <div
                className={`relative rounded-2xl ml-20 bg-black p-6 shadow-lg text-white transition-all ${
                  hover ? "opacity-90" : "opacity-100"
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <p className="text-sm font-sm">
                  Deep Dive processes documents section by section for{" "}
                  <span className="font-semibold">"unlimited"</span> context,
                  enabling complete answers. Run once per chat to unlock Table
                  AI and Prompt Loops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
