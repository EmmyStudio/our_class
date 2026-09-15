import Image from "next/image";
export default function Final() {
    return (
        <div className="flex flex-col items-center gap-15 bg-lightblue p-15">
            <h1 className="text-7xl max-w-6xl text-black text-center" id="biggerText">
             Testimonials
            </h1>
            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center h-90 -space-x-25">
                    <Image
                        src="/ceo1.jpg"
                        width={150}
                        height={300}
                        alt="women everywhere bro"
                        className="w-51 h-70 rounded-3xl mt-auto contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/ceo2.jpg"
                        width={150}
                        height={300}
                        alt="yet another woman"
                        className="w-51 h-70 z-10 rounded-3xl contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/man15.jpg"
                        width={200}
                        height={400}
                        alt="only man"
                        className="w-51 h-70 z-15 rounded-3xl mb-auto"
                    />
                    <Image
                        src="/woman2.jpg"
                        width={150}
                        height={300}
                        alt="another woman"
                        className="w-51 h-70 z-10 rounded-3xl contrast-75 grayscale-[40%] brightness-110"
                    />
                    <Image
                        src="/woman1.jpg"
                        width={150}
                        height={300}
                        alt="first woman"
                        className="w-51 h-70 rounded-3xl mt-auto contrast-75 grayscale-[40%] brightness-110"
                    />
                </div>
                <div className="flex flex-col items-center gap-10">
                    <p className="text-3xl text-black max-w-5xl text-center">"The CEH v13 AI course at New Horizons gave me real-world command over both cutting-edge offensive tools and defense strategies. Passing the exam accelerated my cybersecurity career instantly."</p>
                    <p className="text-3xl text-orange">Certified Ethical Hacker Alum, New Horizons Nigeria.</p>
                </div>

            </div>
        </div>

    )
}