'use client';
import { motion } from 'framer-motion';
import Result from './Result';
import Sumary from './Sumary';

interface Props {
    data: number[];
    result: number;
}

const Container = ({ data, result }: Props) => {
    return (
        <motion.article
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            className='flex flex-col rounded-[30px] shadow-[0_20px_25px_-5px_#6240fc40] md:flex-row'
        >
            <Result score={result} />
            <Sumary data={data} />
        </motion.article>
    );
};

export default Container;
