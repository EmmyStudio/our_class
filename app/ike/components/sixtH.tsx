import Image from "next/image";
import Sixth from "./motion components/sixth";

export default function SixtH() {
    return (
        <div className="flex flex-col gap-15">
            <h1 className="text-6xl text-black text-center" id="biggerText">
                Choose the Plan That Fits You Best
            </h1>
            <Sixth />
        </div>
    )
}