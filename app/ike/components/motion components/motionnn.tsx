"use client";
import { motion } from 'framer-motion';

export default function Motionnn()
{
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6, ease: "easeOut" }}

        viewport={{ once: false, margin: "-100px" }}

        className="p-15">
                        <div className="flex justify-between gap-10">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-4xl text-orange">
                                    About New Horizons Nigeria
                                </h1>
                                <div className="flex gap-10">
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            v13 AI
                                        </h1>
                                        <p className="text-lightblue text-xl">Latest Curriculum</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            100%
                                        </h1>
                                        <p className="text-lightblue text-xl">Exam-Aligned Labs</p>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl text-darkblue">
                                            77
                                        </h1>
                                        <p className="text-lightblue text-xl">Top Mentors</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white max-w-200 text-2xl">At New Horizons Nigeria, we offer comprehensive cybersecurity training programs designed to equip you with the latest skills and knowledge in ethical hacking and network defense. Join us to advance your career in the ever-evolving field of cybersecurity.</p>
                        </div>
                    </motion.div>
    )
}