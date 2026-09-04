import Image from "next/image";
export default function Fourth() {
    return (
        <div className="flex p-10 justify-center">
            <div className="relative bg-white before:absolute before:inset-0 before:bg-black/50">
                <Image
                    src="/clip5.png"
                    width={300}
                    height={700}
                    alt="fashionista"
                    className="max-w-200 max-h-900"
                />
            </div>
            <div className="flex flex-col justify-center border border-black bg-zinc-900 p-20 gap-25">
                <div className="">
                    <p className="text-red-700 text-lg" id="bigText">Total Fundraised Capital</p>
                    <div className="flex flex-col gap-3 pt-8 ">
                        <h1 className="text-6xl max-w-xs text-white" id="bigText">
                            $11B<span className="text-zinc-500">+</span>
                        </h1>
                        <p className="text-zinc-500 max-w-100">Across six institutional funds since inception, Northvale has raised over $11 Billion from leading pension funds, endowments and sovereign wealth funds</p>
                    </div>
                </div>

                <div className="">
                    <p className="text-red-700 text-lg" id="bigText">Portfolio Revenue Growth</p>
                    <div className="flex flex-col gap-3 pt-8">
                        <h1 className="text-6xl max-w-xs text-white" id="bigText">
                            69<span className="text-zinc-500">%</span>
                        </h1>
                        <p className="text-zinc-500 max-w-100">Average revenue growth achieved across portfolio companies within the first three years of Northvale ownership, driven by strategic operational initiatives</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-w-xl border border-black bg-black p-20 justify-center gap-20">
                <p className="max-w-sm text-lg text-white ">We deploy patient, conviction driven capital into market-leading businesses — partnering with exceptional management teams to accelerate value creation through operational excellence and strategic growth</p>
                <Image
                src="/fourth2.jpg"
                width={345}
                height={359}
                alt="graph pic"
                className=""
                />
            </div>
        </div>
    )
}