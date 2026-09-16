import Image from "next/image";
import SeconD from "./components/seconD";
import ThirD from "./components/thirD";
import FourtH from "./components/fourtH";
import FiftH from "./components/fiftH";
import SixtH from "./components/sixtH";
import Final from "./components/final";
export default function () {
    return (
        <>
            <div className="flex flex-col gap-40 bg-white p-15">
                <div className="flex flex-col rounded-4xl bg-black gap-10 pd-15">
                    <div className="flex flex-col bg-lightblue border border-white rounded-4xl items-center gap-10 pt-15 pl-15 pr-15">
                        <h1 className="text-7xl max-w-4xl text-darkblue text-center font-bold" id="biggerText">
                            Master Ethical Hacking with CEH v13 AI
                        </h1>
                        <div className="flex justify-between gap-20">
                            <div className="flex flex-col gap-5 text-center">
                                <div className="flex flex-col gap-5 items-center justify-center border border-darkblue/30 rounded-4xl bg-darkblue p-7 w-65 transition-all duration-300 hover:shadow-xl hover:scale-105">
                                    <h1 className="text-8xl text-lightblue text-center font-bold" id="bigText">
                                        #1
                                    </h1>
                                    <p className="max-w-40 text-white text-xl text-center">ICT Training Institute</p>
                                </div>
                                <div className="flex flex-col gap-5">
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
                                className=""
                            />
                            <div className="flex flex-col items-center gap-7 ">
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
                    <div className="p-15">
                        <div className="flex justify-between gap-10">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-4xl text-orange">
                                    About New Horizons Nigeria
                                </h1>
                                <div className="flex gap-10">
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            v13 AI
                                        </h1>
                                        <p className="text-lightblue text-xl">Latest Curriculum</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            100%
                                        </h1>
                                        <p className="text-lightblue text-xl">Exam-Aligned Labs</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            77
                                        </h1>
                                        <p className="text-lightblue text-xl">Top Mentors</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white max-w-200 text-2xl">At New Horizons Nigeria, we offer comprehensive cybersecurity training programs designed to equip you with the latest skills and knowledge in ethical hacking and network defense. Join us to advance your career in the ever-evolving field of cybersecurity.</p>
                        </div>
                    </div>

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