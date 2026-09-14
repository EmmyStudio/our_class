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
                <div className="flex flex-col border border-white rounded-4xl bg-black gap-10 pd-15">
                    <div className="flex flex-col bg-pink-100 border border-white rounded-4xl items-center gap-10 pt-15 pl-15 pr-15">
                        <h1 className="text-8xl max-w-4xl text-black text-center font-bold" id="bigText">
                             Master Ethical Hacking with CEH v13 AI
                        </h1>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col gap-5 text-center">
                                <div className="flex flex-col gap-10 border rounded-4xl bg-purple-500 p-7 pr-30">
                                    <h1 className="text-8xl text-green-200 text-center font-bold" id="bigText">
                                        #1
                                    </h1>
                                    <p className="max-w-40 text-white text-xl text-center">ICT Training Institute</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 max-w-40">AI-Driven Hacking</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 w-40 ml-auto">Threat Defense</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 max-w-40">Hands-on Labs</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 w-40 ml-auto">v13 AI Curriculum</p>
                                </div>
                            </div>
                            <Image
                                src="/schoolgirl.png"
                                width={600}
                                height={400}
                                alt="schoolgirl"
                                className=""
                            />
                            <div className="flex flex-col items-center gap-7 ">
                                <h3 className="flex items-center justify-center border border-purple-500 bg-purple-500 w-full aspect-square rounded-full max-w-57 p-5 text-green-200 text-2xl font-bold text-center" id="bigText">
                                Certified Ethical Hacker <br /> • <br /> Official Exam Prep
                                </h3>
                                <p className="flex text-black max-w-xs text-2xl font-bold">Stay ahead in cybersecurity with advanced AI-driven hacking methodologies and modern defense strategies.</p>
                                <a
                                    className="flex justify-center items-center border rounded-4xl bg-purple-500 p-2 h-15 w-full text-white"
                                    href="https://newhorizonsnigeria.com.ng">
                                    Register Today
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-15">
                        <div className="flex justify-between gap-10">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-4xl text-white">
                                    About New Horizons Nigeria
                                </h1>
                                <div className="flex gap-10">
                                    <div>
                                        <h1 className="text-3xl text-purple-800">
                                            v13 AI
                                        </h1>
                                        <p className="text-white text-xl">Latest Curriculum</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-purple-800">
                                            100%
                                        </h1>
                                        <p className="text-white text-xl">Exam-Aligned Labs</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-purple-800">
                                            77
                                        </h1>
                                        <p className="text-white text-xl">Top Mentors</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white max-w-200 text-2xl">At New Horizons Nigeria, we offer comprehensive cybersecurity training programs designed to equip you with the latest skills and knowledge in ethical hacking and network defense. Join us to advance your career in the ever-evolving field of cybersecurity.</p>
                        </div>
                    </div>

                </div>

                <SeconD />
                <ThirD />
                <FourtH />
                <FiftH />
                <SixtH /> 
                
            </div>
            <Final />

        </>
    )
}