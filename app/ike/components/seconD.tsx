import Image from "next/image"
import { MdOutlineSecurity } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";

export default function SeconD() {
    return (
        <div className="flex flex-col items-center gap-20">
            <h1 className="text-6xl max-w-6xl text-black text-center" id="biggerText">
                 Core Cybersecurity Tracks
            </h1>
            <div className="flex gap-5">
                <div className="flex flex-col items-center gap-7 border border-lightblue rounded-3xl bg-lightblue p-5 pr-10 pl-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <MdOutlineSecurity className="w-20 h-20 text-orange"/>
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-black">
                            Foundational Security & <br/> Defense
                        </h1>
                        <p className="text-black max-w-2xs text-xl text-center">Build essential threat mitigation, network scanning, and vulnerability assessment skills</p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-7 border border-darkblue rounded-3xl bg-darkblue p-5 pr-10 pl-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <PiExamFill className="w-20 h-20 text-lightblue" />
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-zinc-200">
                            Exam Prep & Practical Labs
                        </h1>
                        <p className="text-zinc-200 max-w-2xs text-xl text-center">Intensive practice exams, mock scenarios, and live simulation environments tailored for first-time pass success</p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-7 border border-lightblue rounded-3xl bg-lightblue p-5 pr-10 pl-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <GrCertificate className="w-20 h-20 text-orange"/>
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-black">
                            CEH v13 AI Certification
                        </h1>
                        <p className="text-black text-xl max-w-2xs text-center">Harness artificial intelligence for advanced penetration testing, exploit development, and active defense</p>
                    </div>

                </div>
            </div>
        </div>
    )
}