import Image from "next/image";
import SeconD from "./components/seconD";
import ThirD from "./components/thirD";
import FourtH from "./components/fourtH";
import FiftH from "./components/fiftH";
import SixtH from "./components/sixtH";
export default function () {
    return (
        <>
            <div className="flex flex-col gap-40 bg-white p-10">
                <div className="flex flex-col border border-white rounded-4xl bg-black gap-10 pd-15">
                    <div className="flex flex-col bg-pink-100 border border-white rounded-4xl items-center gap-10 pt-15 pl-15 pr-15">
                        <h1 className="text-8xl max-w-4xl text-black text-center font-bold" id="bigText">
                            Speak English with Confidence & Clarity
                        </h1>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-10 border rounded-4xl bg-purple-500 p-7 pr-30">
                                    <h1 className="text-8xl text-green-200">
                                        +14k
                                    </h1>
                                    <p className="max-w-40 text-white text-xl">Students trusted our vocadia</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 max-w-40">Speaking Skills</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 w-40 ml-auto">Creative Learning</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 max-w-40">Writing Skills</p>
                                    <p className="flex justify-center border rounded-3xl bg-green-300 p-2 w-40 ml-auto">Vocabulary</p>
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
                                <h3 className="flex items-center justify-center border border-purple-500 bg-purple-500 w-full aspect-square rounded-full max-w-55 p-5 text-green-200" id="bigText">
                                    Vocadia English Courses
                                </h3>
                                <p className="flex text-black max-w-xs text-2xl font-bold">Unlock new opportunities with personalized English coaching tailored for you</p>
                                <a
                                    className="flex justify-center items-center border rounded-4xl bg-purple-500 p-2 h-15 w-full text-white"
                                    href="https://google.com">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-15">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-6xl text-white">
                                    About Us
                                </h1>
                                <div className="flex gap-10">
                                    <div>
                                        <h1 className="text-6xl text-purple-800">
                                            +80
                                        </h1>
                                        <p className="text-white text-xl">Online Courses</p>
                                    </div>
                                    <div>
                                        <h1 className="text-6xl text-purple-800">
                                            10
                                        </h1>
                                        <p className="text-white text-xl">Years Experience</p>
                                    </div>
                                    <div>
                                        <h1 className="text-6xl text-purple-800">
                                            77
                                        </h1>
                                        <p className="text-white text-xl">Top Mentors</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white max-w-200 text-2xl">At Vocadia, we offer comprehensive English language courses tailored to your personal and professional growth. Whether you're a beginner or seeking advanced fluency, our dynamic lessons will help you speak, write and understand English with confidence.</p>
                        </div>
                    </div>

                </div>

                <SeconD />
                <ThirD />
                <FourtH />
                <FiftH />
                <SixtH /> 
            </div>

        </>
    )
}