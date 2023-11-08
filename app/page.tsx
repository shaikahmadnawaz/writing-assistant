"use client";
import ReactWrapBalancer from "react-wrap-balancer";
import Link from "next/link";
import Github from "@/components/GitHub";

export default function Home() {
  return (
    <main className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
      <div className="pt-32 pb-16 md:pt-52 md:pb-32">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="relative inline-flex before:absolute before:inset-0 ">
              <Link
                className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent bg-gradient-to-r from-white/80 via-white rounded-full to-white/80 hover:bg-white group text-zinc-900 transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0  before:rounded-full before:pointer-events-none"
                href="https://github.com/shaikahmadnawaz/writing-assistant"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Writing Assistant is Open Source{" "}
                  <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
            <ReactWrapBalancer>
              Elevate your writing with our AI-Enhanced Writing Assistant!
            </ReactWrapBalancer>
          </h1>
          <p className="mb-8 text-lg text-zinc-300">
            Grammar checks, style suggestions, and creative insights. Your
            creative companion in the world of words.
          </p>
          <div className="">
            <Link
              className="flex max-w-fit items-center justify-center mx-auto w-full  whitespace-nowrap transition duration-150 ease-in-out font-medium px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white rounded-full space-x-2 to-white/80 hover:bg-white group"
              href="https://github.com/shaikahmadnawaz/writing-assistant"
              target="_blank"
            >
              <Github className="w-4 h-4 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out mr-3" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
