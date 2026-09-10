import Image from "next/image";
export default function Final() {
    return (
        <div className="flex flex-col items-center gap-20 bg-zinc-200 p-20">
            <h1 className="text-7xl max-w-6xl text-black text-center">
                What Our Students Say
            </h1>
            <div className="flex flex-col items-center gap-15">
                <div className="flex items-center h-100 -space-x-25">
                    <Image
                        src="/ceo1.jpg"
                        width={150}
                        height={300}
                        alt="women everywhere bro"
                        className="w-55 h-75 rounded-3xl mt-auto contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/ceo2.jpg"
                        width={150}
                        height={300}
                        alt="yet another woman"
                        className="w-55 h-75 rounded-3xl contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/man15.jpg"
                        width={200}
                        height={400}
                        alt="only man"
                        className="w-55 h-75 z-15 rounded-3xl mb-auto"
                    />
                    <Image
                        src="/woman2.jpg"
                        width={150}
                        height={300}
                        alt="another woman"
                        className="w-55 h-75 z-10 rounded-3xl contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/woman1.jpg"
                        width={150}
                        height={300}
                        alt="first woman"
                        className="w-55 h-75 rounded-3xl mt-auto contrast-75 grayscale-[40%] brightness-110"
                    />
                </div>
                <div className="flex flex-col items-center gap-10">
                    <p className="text-3xl text-black max-w-4xl text-center">"Vocadia's business English program gave me the confidence to lead meetings and write professional emails effectively. My career has benefitted greatly from their courses."</p>
                    <p className="text-3xl text-zinc-500">Julio Arafa</p>
                </div>

            </div>
        </div>

    )
}