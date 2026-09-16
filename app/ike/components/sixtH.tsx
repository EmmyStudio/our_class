import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
export default function SixtH() {
    return (
        <div className="flex flex-col gap-20">
            <h1 className="text-6xl text-black text-center" id="biggerText">
                Choose the Plan That Fits You Best
            </h1>
            <div className="flex items-center gap-5 mx-auto">
                <div className="flex flex-col items-center gap-5 border border-white bg-orange rounded-3xl p-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <FaGraduationCap className="w-15 h-15 text-white"/>
                    <h3 className="text-black text-3xl">
                        Standard Training
                    </h3>
                    <p className="text-lightblue text-xl max-w-2xs text-center">Essential instructor-led lectures and basic lab access for career starters.</p>
                    <div className="flex">
                        <p className="text-lightblue text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            49
                        </h1>
                        <p className="text-lightblue text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl">Full CEH v13 AI syllabus</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl">Live lecture access</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl">Community study group</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 border border-white bg-darkblue rounded-3xl p-10 h-150 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <FaAward className="w-15 h-15 text-white"/>
                    <h3 className="text-black text-3xl">
                        Certification Bundle
                    </h3>
                    <p className="text-lightblue text-xl max-w-2xs text-center">Complete training plus the official EC-Council exam voucher</p>
                    <div className="flex">
                        <p className="text-lightblue text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            137
                        </h1>
                        <p className="text-lightblue text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-darkblue">✓</p>
                            <p className="text-black text-xl">Full CEH v13 AI curriculum</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-darkblue">✓</p>
                            <p className="text-black text-xl">Official certification exam voucher</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-darkblue">✓</p>
                            <p className="text-black text-xl">Dedicated mock tests</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 border border-white bg-orange rounded-3xl p-10 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <FaBuilding className="w-15 h-15 text-white"/>
                    <h3 className="text-black text-3xl">
                        Enterprise & Corporate
                    </h3>
                    <p className="text-lightblue text-xl max-w-80 text-center">Customized training cohorts and specialized threat scenarios for security teams</p>
                    <div className="flex">
                        <p className="text-lightblue text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            89
                        </h1>
                        <p className="text-lightblue text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl"> Dedicated company batches</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl">Customized lab environments</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center bg-lightblue h-7 w-7 rounded-full text-orange">✓</p>
                            <p className="text-black text-xl">Direct mentor progress tracking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}