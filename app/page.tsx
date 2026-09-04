import Image from "next/image";
import { NavBar } from "./navbar";
import "./globals.css";
import { Footer } from "./footer";
import Second from "@/components/second";
import Third from "@/components/third";
import Fourth from "@/components/fourth";
import Fifth from "@/components/fifth";
import Sixth from "@/components/sixth";
import Seventh from "@/components/seventh";

export default function Home() {
  return (
    <>
    <div className="relative bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat 
                    before:absolute before:inset-0 before:bg-black/50 before:rounded-lg
                    flex flex-col flex-1 flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className=" z-10 flex flex-1 w-full max-w-6xl flex-row flex-grow items-center justify-around gap-24 py-32 px-8  sm:items-start">
        
        <div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
            <h3 className="">
              PRIVATE EQUITY
            </h3>
            <h1 className="max-w-xs text-4xl scale-125 origin-left leading-10 text-black dark:text-zinc-50" id='bigText'>
              Building valuable corporate legacies on foundations of trust
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We partner with exceptional management teams to acquire, grow and transform market-leading businesses across six consecutive fund vintages
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              id='button'
            >
              Get in Touch
            </a>
          </div>
        </div>
        

        <div className="flex flex-col rounded-lg bg-zinc-300 p-6 text-zinc-900 shadow-md items-center gap-5 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          $8.7B+
          </h1>
          <div className="text-left">
            <h4>
              Assets Under Management
            </h4>
            <h4>
              Across Six Institutional Funds
            </h4>
          </div>
        </div>
      </main>



      <Footer/>
      
    </div>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    <Seventh/>
    </>
  );
}
