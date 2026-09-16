"use client";
import { motion } from 'framer-motion';

export default function First() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.7, ease: "easeOut" }}

        viewport={{ once: false, margin: "-100px" }}
        
        className="flex flex-col gap-20 pb-25">
            <div className="flex flex-col gap-7 border border-white rounded-3xl bg-darkblue p-7">
                <div className="flex items-center gap-5">
                    <h1 className="flex items-center justify-center border border-lightblue bg-lightblue/20 text-lightblue text-3xl rounded-full p-3">
                        01.
                    </h1>
                    <h1 className="text-black text-3xl">
                        Certified Instructors
                    </h1>
                </div>
                <p className="text-xl text-lightblue max-w-80"> Learn directly from accredited ethical hackers and industry veterans.</p>
            </div>
            <div className="flex flex-col gap-7 border border-white rounded-3xl bg-orange p-7">
                <div className="flex items-center gap-5">
                    <h1 className="flex items-center justify-center border border-lightblue bg-lightblue/20 text-lightblue text-3xl rounded-full p-3">
                        02.
                    </h1>
                    <h1 className="text-black text-3xl">
                        Flexible Class Schedules
                    </h1>
                </div>
                <p className="text-xl text-lightblue max-w-80">Join weekday or weekend cohorts built for busy tech professionals.</p>
            </div>
        </motion.div>
    )
}