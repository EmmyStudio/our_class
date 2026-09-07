import Image from "next/image";
export default function Sixth() {
    return (
        <div className="flex flex-col bg-white gap-10 p-10">
            <div className="flex justify-center text-zinc-500 p-5">
                <a href="">Portfolio Leaders</a>
                <a href=""
                    className="mx-auto pl-15">What Our Partners Say</a>
                <a
                    href=""
                    className="ml-auto"
                >Since 2004</a>
            </div>
            <div className="flex flex-col items-center gap-10">
                <h1 className="text-6xl max-w-100 text-black" id="bigText">
                    Trusted by clients <span className="text-red-500">worldwide.</span>
                </h1>
                <p className="max-w-100 text-zinc-500">Hear from the CEOs and founders who partnered with Northvale to scale their businesses, strengthen governance, and achieve transformative outcomes</p>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col gap-20 border border-solid border-white p-5 bg-[url('/box1.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex gap-5">
                        <Image
                            src="/ceo1.jpg"
                            width={200}
                            height={200}
                            alt="female ceo"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                            <h3 className="text-zinc-200">Kimberly Mastralengo</h3>
                            <p className="text-zinc-500">CFO, Atlas Industrial Solutions</p>
                        </div>
                    </div>
                    <h2 className="text-4xl max-w-110 text-white" id="bigText">"Northvale revamped our supply chain, saving us $40M annually — <span className="text-zinc-500">a major boost for our growth."</span></h2>
                </div>
                <div className="flex flex-col gap-20 border border-solid border-white p-5 bg-[url('/box2.jpg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex gap-5">
                        <Image
                            src="/ceo2.jpg"
                            width={200}
                            height={200}
                            alt="female ceo"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                            <h3 className="text-zinc-200">Emmi Calloway</h3>
                            <p className="text-zinc-500">CEO, Meridian Group</p>
                        </div>
                    </div>
                    <h2 className="text-4xl max-w-110 text-black" id="bigText">
                        "Northvale invested both capital and a team, doubling our <span className="text-zinc-500">EBITDA in less than three years."</span>
                    </h2>
                </div>
                <div className="relative flex flexbox border border-solid border-white p-5 bg-[url('/box3.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/50">
                    <h2 className="z-10 text-2xl max-w-45 text-zinc-300 mt-auto" id="bigText">
                        Invest start with stories
                    </h2>
                </div>
                <div className="flex flex-col flexbox border border-solid border-white bg-red-600 p-5">
                    <p className="max-w-45 text-white">We've delivered 56+ projects that <span className="text-zinc-300">help companies generate real results</span></p>
                    <div className="mt-auto">
                        <div className="flex">
                            <Image
                                src="/ceo2.jpg"
                                width={200}
                                height={200}
                                alt="female ceo"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <Image
                                src="/ceo1.jpg"
                                width={200}
                                height={200}
                                alt="female ceo"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <Image
                                src="/box1.jpg"
                                width={200}
                                height={200}
                                alt="female ceo"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                        </div>
                        <p className="text-zinc-200">Trusted by clients worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    )
}