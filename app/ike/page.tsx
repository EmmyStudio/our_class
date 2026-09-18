import Image from "next/image";
import SeconD from "./components/seconD";
import ThirD from "./components/thirD";
import FourtH from "./components/fourtH";
import FiftH from "./components/fiftH";
import SixtH from "./components/sixtH";
import Final from "./components/final";
import Motionnn from "./components/motion components/motionnn";
import { FaAward } from "react-icons/fa";
export default function () {
    return (
        <>
            <div className="flex flex-col gap-40 bg-white sm:p-10 lg:p-15">
                <div className="flex flex-col rounded-4xl bg-black gap-10 pd-15">
                    <div className="flex flex-col bg-lightblue border border-white rounded-4xl items-center gap-10 sm:pt-10 sm:pl-10 sm:pr-10 lg:pt-15 lg:pl-15 lg:pr-15">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl max-w-4xl text-darkblue text-center font-bold" id="biggerText">
                            Master Ethical Hacking with CEH v13 AI
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                            <div className="flex flex-col gap-5 text-center">
                                <div className="flex flex-col gap-5 items-center justify-center border border-darkblue/30 rounded-4xl bg-darkblue/40 p-7 max-w-65 transition-all duration-300 hover:shadow-xl hover:scale-105">
                                    <div className="flex">
                                        <h1 className="text-8xl text-darkblue text-center font-bold" id="bigText">
                                            <span className="text-6xl">#</span>1
                                        </h1>
                                    </div>
                                    <p className="max-w-40 text-white text-xl text-center">ICT Training Institute</p>
                                </div>
                                <div className="flex flex-col gap-5 max-w-65">
                                    <p className="flex justify-center border rounded-3xl hover:shadow-xl border border-orange/30 border-3 bg-orange/30 text-lightblue p-2 max-w-40 transition-all duration-300 hover:shadow-xl hover:scale-105">AI-Driven Hacking</p>
                                    <p className="flex justify-center border rounded-3xl hover:shadow-xl border border-darkblue/30 border-3 bg-darkblue/30 text-darkblue p-2 w-40 ml-auto transition-all duration-300 hover:shadow-xl hover:scale-105">Threat Defense</p>
                                    <p className="flex justify-center border rounded-3xl hover:shadow-xl border border-orange/30 border-3 bg-orange/30 text-lightblue p-2 max-w-40 transition-all duration-300 hover:shadow-xl hover:scale-105">Hands-on Labs</p>
                                    <p className="flex justify-center border rounded-3xl hover:shadow-xl border border-darkblue/30 border-3 bg-darkblue/30 text-darkblue p-2 w-40 ml-auto transition-all duration-300 hover:shadow-xl hover:scale-105">v13 AI Curriculum</p>
                                </div>
                            </div>
                            <Image
                                src="/finalia.png"
                                width={500}
                                height={400}
                                alt="cybersecurity guy"
                                className="mt-auto h-150 w-100"
                            />
                            <div className="flex flex-col items-center gap-7 sm:m-auto">
                                <div className="p-5 rounded-full bg-orange/60">
                                    <div className="p-5 rounded-full bg-orange/80">
                                        <h3 className="flex items-center justify-center bg-orange w-full aspect-square rounded-full max-w-57 p-10 text-lightblue text-xl font-bold text-center transition-all duration-300 hover:shadow-xl hover:scale-110" id="bigText">
                                            Certified Ethical Hacker <br /> • <br /> Official Exam Prep
                                        </h3>
                                    </div>
                                </div>
                                <p className="flex text-black max-w-xs text-2xl text-center">Stay ahead in cybersecurity with advanced AI-driven hacking methodologies and modern defense strategies.</p>
                                <a
                                    className="flex justify-center items-center border border-darkblue/90 rounded-4xl bg-darkblue/70 p-2 h-15 w-full text-lightblue hover:text-white hover:shadow-xl"
                                    href="https://newhorizonsnigeria.com.ng">
                                    Register Today
                                </a>
                            </div>
                        </div>
                    </div>
                    <Motionnn />
                </div>
                <SeconD />
            </div>
            <ThirD />
            <div className="flex flex-col gap-40 bg-zinc-100 p-15">
                <FourtH />
            </div>
            <div className="flex flex-col gap-40 bg-white p-15">
                <FiftH />
                <SixtH />
            </div>
            <Final />
        </>
    )
}