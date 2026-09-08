import Image from "next/image"
export default function SeconD() {
    return (
        <div className="flex flex-col items-center gap-20">
            <h1 className="text-8xl max-w-6xl text-black text-center font-bold" id="bigText">
                Our Specialized Programs
            </h1>
            <div className="flex gap-5">
                <div className="flex flex-col items-center gap-7 border border-pink-100 rounded-3xl bg-pink-100 p-5 pr-10 pl-10">
                    <Image
                        src="/firstIcon.png"
                        width={100}
                        height={100}
                        alt="icon1"
                        className="w-20 h-20 object-cover border bg-purple-500 rounded-full"
                    />
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-black">
                            Basic English Mastery
                        </h1>
                        <p className="text-black max-w-2xs text-xl text-center">Learn essential grammar and vocabulary for beginners</p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-7 border border-purple-500 rounded-3xl bg-purple-500 p-5 pr-10 pl-10">
                    <Image
                        src="/secondIcon.png"
                        width={100}
                        height={100}
                        alt="icon2"
                        className="w-20 h-20 object-cover border bg-pink-100 rounded-full"
                    />
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-zinc-200">
                            Business English
                        </h1>
                        <p className="text-zinc-200 max-w-2xs text-xl text-center">Improve your professional communication skills</p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-7 border border-pink-100 rounded-3xl bg-pink-100 p-5 pr-10 pl-10">
                    <Image
                        src="/thirdIcon.png"
                        width={100}
                        height={100}
                        alt="icon3"
                        className="w-20 h-20 object-cover border bg-purple-500 rounded-full"
                    />
                    <div className="flex flex-col gap-7 items-center">
                        <h1 className="text-3xl text-center text-black">
                            Exam Prep
                        </h1>
                        <p className="text-black text-xl max-w-2xs text-center">Get ready for IELTS and TOEFL with expert guidance</p>
                    </div>

                </div>
            </div>
        </div>
    )
}