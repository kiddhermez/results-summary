import React from 'react';
import ItemScore from './ItemScore';
import MemoryIcon from './icons/MemoryIcon';
import ReactionIcon from './icons/ReactionIcon';
import VerbalIcon from './icons/VerbalIcon';
import VisualIcon from './icons/VisualIcon';
import { motion } from 'framer-motion';
interface Props {
    data: number[];
    useCounter: (final: number) => number;
}

const Sumary = ({ data, useCounter }: Props) => {
    return (
        <section className='flex flex-col gap-5 p-10 md:w-[50%]'>
            <h1 className='mb-5 text-3xl font-semibold'>Summary</h1>
            <div className='flex w-auto flex-col gap-5 overflow-hidden'>
                <ItemScore
                    icon={<ReactionIcon />}
                    title='Reaction'
                    score={data[0]}
                    color='#FF5555'
                    delay={0.25}
                    useCounter={useCounter}
                />
                <ItemScore
                    icon={<MemoryIcon />}
                    title='Memory'
                    score={data[1]}
                    color='#FFB21E'
                    delay={0.5}
                    useCounter={useCounter}
                />
                <ItemScore
                    icon={<VerbalIcon />}
                    title='Verbal'
                    score={data[2]}
                    color='#00BB8F'
                    delay={0.75}
                    useCounter={useCounter}
                />
                <ItemScore
                    icon={<VisualIcon />}
                    title='Visual'
                    score={data[3]}
                    color='#1125D6'
                    delay={1}
                    useCounter={useCounter}
                />
            </div>
            <motion.button
                whileTap={{ scale: [1.1, 0.95] }}
                whileHover={{
                    scale: 1.05,
                }}
                onClick={() => {
                    location.reload();
                }}
                className='mt-5 rounded-full bg-[#303B59] p-5 text-2xl text-white hover:bg-gradient-to-b hover:from-[#6742FF] hover:to-[#312CE9]'
            >
                Continue
            </motion.button>
        </section>
    );
};

export default Sumary;
