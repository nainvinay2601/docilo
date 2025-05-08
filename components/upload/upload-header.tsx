import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";
export default function UploadHeader() {
  return (
    <div className="flex flex-col items-center  justify-center  gap-6  text-center">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800  animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="flex items-center relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors"
        >
          <div className="w-5 h-5 mr-2">
            <Sparkles className="w-full h-full text-rose-600 animate-pulse" />
          </div>

          <p>AI Powered Content</p>
        </Badge>
      </div>

      <div className="text-3xl capitalize font-bold tracking-tight  text-gray-900  sm:text-4xl">
        Start Uploading
        <span className="relative inline-block">
          {/* /50 means we are reducing the opacity  */}
          <span className="relative  px-2 z-10 ">Your PDF's</span>{" "}
          <span
            className="absolute  inset-0  bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>{" "}
        </span>
      </div>
      <div className="lg:mt-2 text-[16px] lg:text-lg  leaidng-8  text-gray-600 max-w-2xl text-center">
        <p>Upload Your PDF And Let AI Do The Magic ✨</p>
      </div>
    </div>
  );
}
