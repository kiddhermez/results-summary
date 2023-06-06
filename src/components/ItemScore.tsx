'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Props {
    icon: any;
    title: string;
    score: number;
    color: string;
    delay: number;
    useCounter: (final: number) => number;
}

const ItemScore = ({ icon, title, score, color, delay, useCounter }: Props) => {
    const count = useCounter(score);

    const divStyle = {
        background: `linear-gradient(to right, ${color}20 ${count}%, #00000000 ${count}%)`,
        color: color,
        border: `solid ${color} .5px`,
    };
    return (
        <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: delay }}
            style={divStyle}
            className='flex justify-between gap-5 rounded-2xl p-5'
        >
            <section className='flex gap-2'>
                {icon}
                <h3>{title}</h3>
            </section>
            <section className='flex gap-2'>
                <p className='text-black'>{Math.floor(count)}</p>
                <p className='text-black opacity-50'>/ 100</p>
            </section>
        </motion.div>
    );
};

export default ItemScore;
