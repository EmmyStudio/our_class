import Image from "next/image"
export default function ThirD ()
{
    return (
        <div className="flex items-center justify-center gap-20 border bg-purple-500 rounded-4xl ml-30 mr-30">
            <Image
            src="/woman.png"
            width={400}
            height={500}
            alt="woman"
            className=""
            />
            <div className="flex flex-col gap-5">
                <h1 className="text-7xl max-w-6xl text-white text-center">
                    Limited Time Offer!
                </h1>
                <h3 className="text-white text-3xl">
                    Enroll now and get 20% OFF on all courses!
                </h3>
                <div className="flex gap-10">
                    <a href="https://google.com"
                    className="flex h-14 w-50 items-center justify-center p-5 border border-purple-500 bg-green-300 rounded-4xl text-xl text-purple-500 hover:bg-purple-900 hover:text-pink-100"
                    >
                        Claim Now
                    </a>
                    <a href=""
                    className="flex h-14 w-60 items-center justify-center p-5 border border-pink-100 rounded-4xl text-xl text-pink-100 hover:bg-pink-100 hover:text-purple-500"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
        </div>
    )
}