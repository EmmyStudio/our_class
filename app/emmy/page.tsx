

export default function () {
    return (
        <>
            <div className="bg-white min-h-screen p-8">

                <div className="border-2 border-zinc-300 rounded-xl overflow-hidden">

                    <main className="flex w-full max-w justify-around gap-2 px-8 bg-blue-500">

                         <div className="flex flex-col">
                            <div className="flex flex-col items-center self-center gap-10 max-w-100 p-10 bg-grey">
                                <h1 className="text-white font-bold text-4xl" id="bigText">Speak English with confidence & clarity</h1>
                            </div>

                                <div className="flex flex-row justify-between items-center w-full gap-6">
                                    <div className="flex-col">
                                        <div className="flex flex-col items-start gap-2 rounded-lg bg-zinc-300 p-6 text-zinc-900 shadow-md text-left">
                                            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
                                                14k+
                                            </h1>
                                            <h4>Students trusted our vocadia</h4>
                                        </div>
                    <div className="flex flex-col gap-2 pt-3">
                        <h5 className="bg-orange-500 text-white rounded-lg px-2 py-1 w-fit">Speaking Skills</h5>
                        <h5 className="bg-orange-500 text-white rounded-lg px-2 py-1 w-fit self-end">Creative Learning</h5>
                        <h5 className="bg-orange-500 text-white rounded-lg px-4 py-1 w-fit">Writing Skills</h5>
                        <h5 className="bg-orange-500 text-white rounded-lg px-4 py-1 w-fit self-end">Vocabulary</h5>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/course1.png" alt="Girl" className="w-48 h-auto" />
                </div>

                <div className="flex flex-col items-start gap-3 max-w-35">
                    <h3 className="border-2 border-orange-500 bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-center text-sm leading-none p-3">
                        VOCADIA ENGLISH COURSES
                    </h3>
                    <h4>Unlock new opportunities with personalized English courses made just for you</h4>
                    <h3 className="bg-orange-500 text-white rounded-full px-4 py-1 w-fit">
                        Get Started
                    </h3>
                </div>
            </div>
        </div>
    </main>

        <div className="flex flex-row gap-120 pt-0 bg-black p-8">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-6xl text-blue-500 font-bold pt-3" id="bigText">ABOUT US</h1>
                </div>
                <div className="flex flex-row gap-4">
                    <h3 className="text-4xl" id="bigText">80+ <span className="text-xs">Years</span></h3>
                    <h3 className="text-4xl" id="bigText">80+ <span className="text-xs">Years</span></h3>
                    <h3 className="text-4xl" id="bigText">80+ <span className="text-xs">Years</span></h3>
                </div>
            </div>
            <div className="max-w-90 pt-10 text-white">
                <h2>Our Duty has always been to deliver grade quality years of human and physical and technological advancement. Our Duty has always been to deliver grade quality years of human and physical and technological advancementOur Duty has always been to deliver grade quality years of human and physical and technological advancement</h2>
            </div>
        </div>

    </div>
    <div className="flex flex-col items-center gap-10 bg-white p-8">
        <div>
            <h1 className="text-4xl font-bold text-black pt-8 text-center">Our Specialized Programs</h1>
        </div>
        <div className="flex flex-row gap-4">
            <div className="flex flex-col rounded-lg bg-orange-500 p-6 text-zinc-900 shadow-md items-center gap-5 text-center">
                
                <h1>Basic English Mastery</h1>
                <h3>Learn Estential Grammaer and vocabulary for beginners</h3>
            </div>
            <div className="flex flex-col rounded-lg bg-blue-300 p-6 text-zinc-900 shadow-md items-center gap-5 text-center">
                <h1>Basic English Mastery</h1>
                <h3>Learn Estential Grammaer and vocabulary for beginners</h3>
            </div>
            <div className="flex flex-col rounded-lg bg-orange-500 p-6 text-zinc-900 shadow-md items-center gap-5 text-center">
                <h1>Basic English Mastery</h1>
                <h3>Learn Estential Grammaer and vocabulary for beginners</h3>
            </div>

        </div>
    </div>
    <div className="pt-30">
    <div className="relative flex flex-row gap-1 pt-0 items-center w-auto h-100 bg-blue-600 rounded-3xl overflow-hidden p-8">
        <img src="nysc.png" alt="###" className="w-auto h-auto z-12 pt-6" />
        <div className="flex flex-col gap-3 z-10">
            <h2 className="text-4xl font-bold text-white">Limited Time Offer!</h2>
            <p className="text-lg text-blue-100">Enroll now and get 20% OFF on all courses!</p>
            <div className="flex flex-row gap-4 pt-2">
                <h2 className="border-2 border-white text-white font-semibold rounded-full px-6 py-2 hover:bg-orange-500">Claim Now</h2>
                <h2 className="border-2 border-white text-white font-semibold rounded-full px-6 py-2 hover:bg-orange-500">Contact Now</h2>
            </div>
        </div>
    </div>
    </div>
</div>


    </>
    )
}