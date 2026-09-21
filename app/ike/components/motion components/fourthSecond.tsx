"use client";
import { motion } from 'framer-motion';

export default function Second ()
{
    return(
        <motion.div 
        initial={{ opacity: 0, y: -100 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.7, ease: "easeOut" }}

        viewport={{ once: false, margin: "-100px" }}

        className="flex flex-col gap-20 pt-25">
                <div className="flex flex-col gap-7 border border-black rounded-3xl bg-orange p-7">
                    <div className="flex items-center gap-5">
                        <h1 className="flex items-center justify-center border border-lightblue bg-lightblue/20 text-lightblue text-3xl rounded-full p-3">
                            03.
                        </h1>
                        <h1 className="text-black text-3xl">
                        AI-Powered Tooling
                        </h1>
                    </div>
                    <p className="text-xl text-lightblue max-w-85">Master modern AI frameworks used in active exploit analysis and defense.</p>
                </div>
                <div className="flex flex-col gap-7 border border-black rounded-3xl bg-darkblue p-7">
                    <div className="flex items-center gap-5">
                        <h1 className="flex items-center justify-center border border-lightblue bg-lightblue/20 text-lightblue text-3xl rounded-full p-3">
                            04.
                        </h1>
                        <h1 className="text-black text-3xl">
                        Official Certification Exam
                        </h1>
                    </div>
                    <p className="text-xl text-lightblue max-w-85">Full preparation and support to earn your globally recognized CEH credential.</p>
                </div>
            </motion.div>
    )
}