import Image from "next/image";
import { NavBar } from "./navbar";
import "./globals.css";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div className="relative bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat 
                    before:absolute before:inset-0 before:bg-black/50 before:rounded-lg
                     flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main className=" z-10 flex flex-1 w-full max-w-6xl flex-row items-center justify-around gap-24 py-32 px-8  sm:items-start">
        
        <div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
            <h3 className="">
              PRIVATE EQUITY
            </h3>
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
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
        

        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          $8.7B+
          </h1>
          <div className="text-right">
            <h4>
              Assets Under Management
            </h4>
            <p>
              Across Six Institutional Funds
            </p>
          </div>
        </div>
      </main>
      <div>
          <Footer />
        </div>
    </div>
  );
}
