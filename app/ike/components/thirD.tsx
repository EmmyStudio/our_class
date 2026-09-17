import Image from "next/image"
export default function ThirD() {
    return (
        <div className="flex flex-col items-center gap-6 sm:gap-10 lg:gap-15 bg-darkblue p-6 sm:p-12 lg:p-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-20 border border-darkblue bg-darkblue shadow-xl rounded-4xl mx-4 sm:mx-10 lg:mx-30 p-6 md:p-0 transition-all duration-300 hover:shadow-2xl hover:shadow-black hover:scale-105 lg:hover:scale-115">
                <Image
                    src="/woman.png"
                    width={400}
                    height={500}
                    alt="woman"
                    className="w-40 sm:w-64 md:w-80 lg:w-[400px] h-auto"
                />
                <div className="flex flex-col gap-6 lg:gap-10 md:mr-10 lg:mr-20">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl max-w-xl text-white text-center md:text-left">
                            Limited Time Offer: <span className="text-orange">Save 40% Off!</span>
                        </h1>
                        <h3 className="text-white text-base sm:text-lg lg:text-xl text-center md:text-left">
                            Enroll between September 8th – 30th, 2026 to claim your exclusive tuition discount on the CEH v13 AI Training & Certification Exam package!
                        </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                        <a href="https://google.com"
                            className="flex h-14 w-full sm:w-50 items-center justify-center p-5 border border-darkblue bg-lightblue rounded-4xl text-xl text-darkblue hover:bg-orange/30 hover:text-lightblue hover:border-black hover:shadow-xl"
                        >
                            Claim Now
                        </a>
                        <a href=""
                            className="flex h-14 w-full sm:w-60 items-center justify-center p-5 border border-pink-100 rounded-4xl text-xl text-pink-100 hover:bg-orange/80 hover:text-lightblue hover:border-black hover:shadow-xl"
                        >
                            Talk to an Advisor
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}