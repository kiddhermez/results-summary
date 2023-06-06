'use client';
import { motion } from 'framer-motion';
import Result from './Result';
import Sumary from './Sumary';
import { useState, useEffect } from 'react';

interface Props {
    data: number[];
    result: number;
}

const useCounter = (maxValue: number) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const durationInSeconds = 2;
        const step = maxValue / (60 * durationInSeconds);

        const counter = setInterval(() => {
            setCount((lastValue) => {
                const newValue = lastValue + step;

                if (newValue >= maxValue) {
                    clearInterval(counter);
                    return maxValue;
                }

                return newValue;
            });
        }, 1000 / 60);
    }, [maxValue]);

    return count;
};

const Container = ({ data, result }: Props) => {
    return (
        <motion.article
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            className='flex flex-col rounded-[30px] shadow-[0_20px_25px_-5px_#6240fc40] md:flex-row'
        >
            <Result score={result} useCounter={useCounter} />
            <Sumary data={data} useCounter={useCounter} />
        </motion.article>
    );
};

export default Container;
