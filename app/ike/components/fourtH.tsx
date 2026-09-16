import First from "./motion components/fourthFirst";
import Second from "./motion components/fourthSecond";

export default function FourtH() {
    return (
        <div className="flex gap-10 justify-center pt-10 pb-10">
            <First />            
            <div className="flex flex-col justify-center">
                <div className="flex flex-col gap-10">
                    <h1 className="text-6xl text-black text-center max-w-100" id="biggerText">
                        Why New Horizons?
                    </h1>
                    <p className="text-2xl text-zinc-500 max-w-100 text-center">Global standards, practical hands-on labs, and direct pathways to industry certification.</p>
                </div>
            </div>
            <Second />            
        </div>
    )
}