"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
export default function Fifth() {
    return(
        <motion.div 
        initial={{ opacity: 0, x: 100 }}

        whileInView={{ opacity: 1, x: 0 }}

        transition={{ duration: 0.7, ease: "easeOut" }}

        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-20">
            <h1 className="text-6xl text-black text-center" id="biggerText">
                Meet Our Previous Clients
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
                <div className="flex max-w-80 flex-col gap-7 border items-center border-white rounded-3xl bg-lightblue p-7">
                    <Image
                        src="/man1.jpg"
                        width={300}
                        height={200}
                        alt="first man"
                        className="h-66 rounded-3xl"
                    />
                    <div className="flex flex-col gap-5 mt-auto">
                        <h1 className="text-3xl text-black">
                            John Smith
                        </h1>
                        <p className="text-2xl max-w-63 text-zinc-700">Experienced Cybersecurity Analyst with 15+ years of experience</p>
                    </div>
                </div>
                <div className="flex max-w-80 flex-col gap-7 border border-white rounded-3xl bg-orange/40 p-7">
                    <Image
                        src="/man22.jpg"
                        width={250}
                        height={700}
                        alt="second man"
                        className="h-85 rounded-3xl "
                    />
                    <div className="flex flex-col gap-5 mt-auto">
                        <h1 className="text-3xl text-black mt-auto">
                            Robert Lee
                        </h1>
                        <p className="text-2xl max-w-63 text-zinc-700">Governance and Risk Analyst</p>
                    </div>

                </div>
                <div className="flex max-w-80 flex-col gap-7 border border-white rounded-3xl bg-lightblue p-7">
                    <Image
                        src="/woman1.jpg"
                        width={250}
                        height={200}
                        alt="first woman"
                        className="h-85 rounded-3xl" />
                    <div className="flex flex-col gap-5 mt-auto">
                        <h1 className="text-3xl text-black mt-auto">
                            Sophia Marti
                        </h1>
                        <p className="text-2xl max-w-63 text-zinc-700">Security Operations Center Analyst</p>
                    </div>

                </div>
                <div className="flex max-w-80 flex-col gap-10 border border-white rounded-3xl bg-orange/40 p-7">
                    <Image
                        src="/woman2.jpg"
                        width={250}
                        height={200}
                        alt="second woman"
                        className="h-85 rounded-3xl" />
                    <div className="flex flex-col gap-5 mt-auto">
                        <h1 className="text-3xl text-black mt-auto">
                            Roberta Lee
                        </h1>
                        <p className="text-2xl max-w-63 text-zinc-700">Computer Engineering Undergraduate</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
