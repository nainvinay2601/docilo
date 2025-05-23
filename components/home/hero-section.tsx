import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in  lg:px-12 max-w-7xl">
      <div className="flex">
        <div className="  relative p-[1px] overflow-hidden  rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative px-6 py-2 text-base font-medium bg-white  rounded-full group-hover:bg-gray-50 transition-colors duration-200"
          >
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" /> 
            <p className="text-base text-[14px] text-rose-600">Powered By AI</p>
          </Badge>
        </div>
      </div>
      <h1 className="font-bold     pt-6 pb-2 text-[24px] text-center capitalize lg:text-[36px]">
        Transform PDF's into{" "}
        <span className="relative inline-block">
          {/* /50 means we are reducing the opacity  */}
          <span className="relative  px-2 z-10 ">concise</span>{" "}
          <span
            className="absolute  inset-0  bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>{" "}
        </span>
        summaries
      </h1>
      <h2 className="text-lg sm:text-xl   lg:text-[20px] text-center px-4 lg:px-0  lg:max-w-4xl text-[16px]  text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>
      <Button
        variant={"link"}
        className="text-white mt-6 text-base sm:text-lg  lg:text-xl  rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500
        hover:from-rose-500 hover:to-slate-900 hover:no-underline font-medium shadow-lg  transition-all  duration-300"
      >
        {" "}
        <Link href={"/#pricing"} className="flex gap-3 items-center">
          <span className="text-[14px] lg:text-[16px] font-medium">
            Try Docilo
          </span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
}
