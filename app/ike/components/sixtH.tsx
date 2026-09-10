import Image from "next/image";
export default function SixtH() {
    return (
        <div className="flex flex-col gap-30">
            <h1 className="text-7xl text-black text-center">
                Choose the Plan That Fits You Best
            </h1>
            <div className="flex items-center gap-5 mx-auto">
                <div className="flex flex-col items-center gap-5 border border-white bg-yellow-200 rounded-3xl p-10">
                    <Image
                        src="/firstIcon.png"
                        width={50}
                        height={50}
                        alt=""
                        className=""
                    />
                    <h3 className="text-black text-3xl">
                        General
                    </h3>
                    <p className="text-zinc-500 text-xl max-w-2xs text-center">Perfect for beginners wanting to build a strong foundation</p>
                    <div className="flex">
                        <p className="text-zinc-500 text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            49
                        </h1>
                        <p className="text-zinc-500 text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Access to Basic English Program</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Weekly live sessions</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Community forum access</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 border border-white bg-purple-200 rounded-3xl p-10 h-150">
                    <Image
                        src="/secondIcon.png"
                        width={50}
                        height={50}
                        alt=""
                        className=""
                    />
                    <h3 className="text-black text-3xl">
                        Advanced
                    </h3>
                    <p className="text-zinc-500 text-xl max-w-2xs text-center">Ideal for intermediate learners seeking fluency</p>
                    <div className="flex">
                        <p className="text-zinc-500 text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            137
                        </h1>
                        <p className="text-zinc-500 text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Unlimited course access</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Weekly one-on-one mentoring</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Priority support and certification</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5 border border-white bg-yellow-200 rounded-3xl p-10">
                    <Image
                        src="/firstIcon.png"
                        width={50}
                        height={50}
                        alt=""
                        className=""
                    />
                    <h3 className="text-black text-3xl">
                        Business
                    </h3>
                    <p className="text-zinc-500 text-xl max-w-80 text-center">Meant for business professionals seeking better understanding</p>
                    <div className="flex">
                        <p className="text-zinc-500 text-3xl text-left">$</p>
                        <h1 className="text-black text-8xl">
                            89
                        </h1>
                        <p className="text-zinc-500 text-xl text-right mt-auto">/Month</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Access to all courses</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Bi-Weekly live coaching</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <p className="flex items-center justify-center border border-yellow-200 bg-purple-500 h-7 w-7 rounded-full text-yellow-100">✓</p>
                            <p className="text-black text-xl">Progress tracking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}