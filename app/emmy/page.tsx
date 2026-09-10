import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiGift, FiAward, FiCheckCircle } from "react-icons/fi";


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
                <img src="/checklist.png" 
                alt="Profile" 
                style={{ 
                    width: "100px", 
                    height: "100px", 
                    }} />
                <h1>Basic English Mastery</h1>
                <h3>Learn Estential Grammaer and vocabulary for beginners</h3>
            </div>
            <div className="flex flex-col rounded-lg bg-blue-300 p-6 text-zinc-900 shadow-md items-center gap-5 text-center">
                <img src="/book.png" 
                alt="Profile" 
                style={{ 
                    width: "100px", 
                    height: "100px",  
                    }} />
                <h1>Basic English Mastery</h1>
                <h3>Learn Estential Grammaer and vocabulary for beginners</h3>
            </div>
            <div className="flex flex-col rounded-lg bg-orange-500 p-6 text-zinc-900 shadow-md items-center gap-5 text-center">
                <img src="/certificate.png" 
                alt="Profile" 
                style={{ 
                    width: "100px", 
                    height: "100px",  
                    }} />
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
    <div className="flex flex-col items-center gap-10 bg-white p-8 pt-40">
        <div className="grid grid-cols-3 gap-6 items-center max-w-6xl">
            <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3 bg-blue-300 rounded-2xl p-6 -mt-40">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-orange-600 text-white font-bold rounded-full w-10 h-10">01.</span>
                            <h1 className="text-black text-lg font-semibold">Expert Teachers</h1>
                        </div>
                        <p className="text-sm text-zinc-600">Our certified instructors are equipped to provide you with the skills and knowledge you need to succeed in your career.</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-blue-300 rounded-2xl mt-10 p-6">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-orange-600 text-white font-bold rounded-full w-10 h-10">02.</span>
                            <h1 className="text-black text-lg font-semibold">Flexible Learning</h1>
                        </div>
                        <p className="text-sm text-zinc-600">Access Lessons anytime anywhere to match your schedule.</p>
                    </div>
            </div>
            <div>
                <div className="flex flex-col items-center text-center gap-3 -mt-30">
                    <p className="text-4xl font-bold text-black leading-tight" id="bigText">Course <br /> Benefits</p>
                    <h3 className="text-sm text-zinc-600">Discover what thousands of students trust Vocadia for mastering English.</h3>
                </div>

            </div>
            <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3 bg-blue-300 rounded-2xl p-6">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-orange-600 text-white font-bold rounded-full w-10 h-10">03.</span>
                            <h1 className="text-black text-lg font-semibold">Track Progress</h1>
                        </div>
                        <p className="text-sm text-zinc-600">Get personalized feedback and track your growth through project reports.</p>
                    </div>
                    <div className="flex flex-col gap-3 bg-blue-300 rounded-2xl p-6 mt-10">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-orange-600 text-white font-bold rounded-full w-10 h-10">04.</span>
                            <h1 className="text-black text-lg font-semibold">Engaging Lessons</h1>
                        </div>
                        <p className="text-sm text-zinc-600">Lessons are designed to be interactive and engaging, keeping you motivated throughout your learning journey.</p>
                    </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center gap-10 w-full max-w-auto pt-20">

        <h1 className="text-4xl font-bold text-black text-center" id="bigText">Meet Our Language Experts</h1>

        <div className="grid grid-cols-4 gap-10 w-full">

            <div className="flex flex-col gap-4 bg-blue-300 rounded-2xl p-4">
                <img src="/johnsmith.jpg" alt="" className="w-full h-64 object-cover rounded-xl"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold text-black">John Smith</h3>
                    <p className="text-sm text-zinc-600">15+ years of experience in Business English coaching.</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 bg-orange-500 rounded-2xl p-4">
                <img src="/janedoe.jpg" alt="" className="w-full h-64 object-cover rounded-xl"/>
                <h3 className="text-lg font-semibold text-black">Jane Doe</h3>
                <p className="text-sm tenxt-zinc-800">15+ years of experience in Business English coaching.</p>
            </div>

            <div className="flex flex-col gap-4 bg-blue-300 rounded-2xl p-4">
                <img src="/janesmith.jpg" alt="" className="w-full h-64 object-cover rounded-xl"/>
                <h3 className="text-lg font-semibold text-black">Jane Smith</h3>
                <p className="text-sm text-zinc-600">15+ years of experience in Business English coaching.</p>
            </div>

            <div className="flex flex-col gap-4 bg-orange-500 rounded-2xl p-4">
                <img src="/johnsmith.jpg" alt="" className="w-full h-64 object-cover rounded-xl"/>
                <h3 className="text-lg font-semibold text-black">John Smith</h3>
                <p className="text-sm text-zinc-800">15+ years of experience in Business English coaching.</p>
            </div>

        </div>
    </div>
    
<div className="flex flex-col items-center gap-16 bg-white p-8">

    <h1 className="text-4xl font-bold text-black text-center">
        Choose the Plan That Fits You Best
    </h1>

    <div className="flex flex-row gap-6 max-w-6xl">

        {/* General plan */}
        <div className="flex flex-col items-center text-center gap-4 bg-yellow-200 rounded-2xl p-8 w-80">
            <FiGift className="text-black w-8 h-8" />
            <h3 className="text-xl font-semibold text-black">General</h3>
            <p className="text-sm text-zinc-700">Perfect for beginners wanting to build a strong foundation.</p>

            <div className="flex items-end gap-1">
                <span className="text-lg font-medium text-black pb-3">$</span>
                <span className="text-5xl font-bold text-black">49</span>
                <span className="text-sm text-zinc-600 pb-2">/Month</span>
            </div>

            <div className="flex flex-col items-start gap-3 w-full pt-2">
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Access to Basic English Program</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Weekly live sessions</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Community forum access</p>
                </div>
            </div>
        </div>

        {/* Advanced plan */}
        <div className="flex flex-col items-center text-center gap-4 bg-purple-100 rounded-2xl p-8 w-80">
            <FiAward className="text-black w-8 h-8" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-black">Advanced</h3>
            <p className="text-sm text-zinc-700">Ideal for intermediate learners seeking fluency.</p>

            <div className="flex items-end gap-1">
                <span className="text-lg font-medium text-black pb-3">$</span>
                <span className="text-5xl font-bold text-black">137</span>
                <span className="text-sm text-zinc-600 pb-2">/Month</span>
            </div>

            <div className="flex flex-col items-start gap-3 w-full pt-2">
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Unlimited course access</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Weekly one-on-one mentoring</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Priority support and certification</p>
                </div>
            </div>
        </div>

        {/* Business plan */}
        <div className="flex flex-col items-center text-center gap-4 bg-yellow-200 rounded-2xl p-8 w-80">
            <FiGift className="text-black w-8 h-8" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-black">Business</h3>
            <p className="text-sm text-zinc-700">Ideal for intermediate learners seeking fluency.</p>

            <div className="flex items-end gap-1">
                <span className="text-lg font-medium text-black pb-3">$</span>
                <span className="text-5xl font-bold text-black">89</span>
                <span className="text-sm text-zinc-600 pb-2">/Month</span>
            </div>

            <div className="flex flex-col items-start gap-3 w-full pt-2">
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Access to all courses</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Bi-weekly live coaching</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-600 w-5 h-5" />
                    <p className="text-sm text-black">Progress tracking</p>
                </div>
            </div>
        </div>

    </div>

</div>
    
    <div className="flex flex-col items-center gap-10 bg-zinc-50 p-8">

    <h1 className="text-4xl font-bold text-black text-center">What Our Students Say</h1>

    
    <div className="flex flex-row items-center justify-center gap-4">

        <img src="/ceo1.jpg" alt="Student" className="w-32 h-56 object-cover rounded-2xl opacity-60" />
        <img src="/ceo2.jpg" alt="Student" className="w-36 h-64 object-cover rounded-2xl opacity-80" />
        <img src="/janedoe.jpg" alt="Julio Arafa" className="w-44 h-72 object-cover rounded-2xl" />
        <img src="/janesmith.jpg" alt="Student" className="w-36 h-64 object-cover rounded-2xl opacity-80" />
        <img src="/johnsmith.jpg" alt="Student" className="w-32 h-56 object-cover rounded-2xl opacity-60" />

    </div>

    
    <div className="flex flex-col items-center text-center gap-4 max-w-xl">
        <p className="text-lg text-black">
            "Vocadia's business English program gave me the confidence to lead meetings and write professional emails effectively. My career has benefited greatly from their courses."
        </p>
        <h4 className="text-zinc-500">Julio Arafa</h4>
    </div>

    </div>
    
    

</div>


    </>
    )
}