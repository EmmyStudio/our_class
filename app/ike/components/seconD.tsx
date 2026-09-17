import Image from "next/image"
import Second from "./motion components/second";

export default function SeconD() {
    return (
        <div className="flex flex-col items-center gap-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl max-w-6xl text-black text-center" id="biggerText">
                 Core Cybersecurity Tracks
            </h1>
            <Second />
        </div>
    )
}