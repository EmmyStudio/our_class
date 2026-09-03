import Image from "next/image";
export default function Third() {
    return (
        <div className="pl-40 pr-40 p-10">
            <div className="bg-zinc-900 p-10 pt-20 pb-20 flex-column justify-center">
                <div className="flex w-full justify-between">
                    <p className="text-4xl max-w-xl text-white" id="bigText">Strategic <span className="text-red-700">capabilities</span> built to drive <span className="text-red-700">portfolio</span> performance</p>
                    <p className="max-w-100 text-zinc-400">Our integrated approach merges sector expertise with operational excellence to boost growth, enhance margins, and ensure long-term success</p>
                </div>
                <div className="flex gap-4 pt-10">
                    <div className="flex flex-col border border-solid border-black bg-black p-10">
                        <h5 className="text-zinc-500 mb-10">
                            INVESTMENTS
                        </h5>
                        <h1 className="text-4xl max-w-xl text-white mb-5" id="bigText">
                            Growth Equity & Buyouts
                        </h1>
                        <p className="max-w-100 text-zinc-400">We acquire controlling and sinificant minority positions in established businesses poised for accelerated growth through operational improvement</p>
                        <a
                            className="mt-auto flex h-8 w-full items-center justify-center border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://github.com/Aleem018"
                            target="_blank"
                            rel="noopener noreferrer"
                            id='button'
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="flex flex-col border border-solid border-black bg-black p-10">
                        <h5 className="text-zinc-500 mb-10">
                            OPERATIONS
                        </h5>
                        <h1 className="text-4xl max-w-xl text-white mb-5" id="bigText">
                            Operational Value Creation
                        </h1>
                        <p className="max-w-100 text-zinc-400">Our in-house operating team embeds alongside management to drive revenue growth, optimise cost structures, and implement best in-class governance</p>
                        <a
                            className="mt-auto flex h-8 w-full items-center justify-center border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://github.com/Aleem018"
                            target="_blank"
                            rel="noopener noreferrer"
                            id='button'
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="flex flex-col border border-solid border-black bg-red-600 p-10">
                        <h5 className="text-zinc-300 mb-10">
                            ADVISORY
                        </h5>
                        <Image
                            src="/proj.png"
                            width={300}
                            height={300}
                            alt="random pic"
                            className=""
                        />
                        <h1 className="text-4xl max-w-xl text-white mb-5" id="bigText">
                            Strategic Advisory & Exits
                        </h1>
                        <p className="max-w-100 text-zinc-400 mb-10">We guide portfolio companies through transformational events — from add-on acquisitions and market expansions to IPO readiness and divestitures</p>
                        <a
                            className="mt-auto flex h-8 w-full items-center justify-center bg-white border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                            href="https://github.com/Aleem018"
                            target="_blank"
                            rel="noopener noreferrer"
                            id='button'
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}