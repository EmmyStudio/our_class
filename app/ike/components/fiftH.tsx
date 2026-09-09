import Image from "next/image";
export default function FiftH() {
    return (
        <div className="flex flex-col gap-20">
            <h1 className="text-7xl text-black text-center">
                Meet Our Language Experts
            </h1>
            <div className="flex gap-5 mx-auto">
                <div className="flex max-w-80 flex-col gap-10 border items-center border-white rounded-3xl bg-pink-100 p-7">
                    <Image
                        src="/man1.jpg"
                        width={300}
                        height={200}
                        alt="first man"
                        className="rounded-3xl"
                    />
                    <div className="flex flex-col gap-5 mt-auto">
                        <h1 className="text-3xl text-black">
                            John Smith
                        </h1>
                        <p className="text-2xl w-63 text-zinc-700">15+ years of experience in Business English coaching</p>
                    </div>
                </div>
                <div className="flex max-w-80 flex-col gap-10 border border-white rounded-3xl bg-yellow-200 p-7">
                    <Image
                        src="/man2.jpg"
                        width={250}
                        height={700}
                        alt="second man"
                        className="h-95 rounded-3xl "
                    />
                    <h1 className="text-3xl text-black mt-auto">
                        Robert Lee
                    </h1>
                </div>
                <div className="flex max-w-80 flex-col gap-10 border border-white rounded-3xl bg-pink-100 p-7">
                    <Image
                        src="/woman1.jpg"
                        width={250}
                        height={200}
                        alt="first woman"
                        className="h-95 rounded-3xl" />
                    <h1 className="text-3xl text-black mt-auto">
                        Sophia Marti
                    </h1>
                </div>
                <div className="flex max-w-80 flex-col gap-10 border border-white rounded-3xl bg-yellow-200 p-7">
                    <Image
                        src="/woman2.jpg"
                        width={250}
                        height={200}
                        alt="second woman"
                        className="h-95 rounded-3xl" />
                    <h1 className="text-3xl text-black mt-auto">
                        Roberta Lee
                    </h1>
                </div>
            </div>
        </div>
    )
}