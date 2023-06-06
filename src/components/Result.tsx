import { motion } from 'framer-motion';

interface Props {
    score: number;
    useCounter: (final: number) => number;
}

const Result = ({ score, useCounter }: Props) => {
    const count = useCounter(score);
    return (
        <section className='flex flex-col items-center justify-between gap-5 rounded-b-[30px] bg-gradient-to-b from-[#6742FF] to-[#312CE9] p-10 text-center text-white md:w-[45%] md:rounded-[30px]'>
            <h2 className='text-xl font-semibold opacity-70 md:text-2xl'>
                Your Result
            </h2>
            <div className='flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#4A24CF] md:h-56 md:w-56'>
                <motion.p
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className='text-5xl font-bold md:text-7xl'
                >
                    {count}
                </motion.p>
                <p className='text-lg opacity-70 md:text-xl'>of 100</p>
            </div>
            <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3 }}
                className='text-4xl font-semibold'
            >
                {score <= 30 ? 'Oh No' : score >= 70 ? 'Excelent' : 'Great'}
            </motion.h3>
            <p className='text-lg'>
                You scored higher than {score <= 10 ? 3 : score - 5}% of the
                people who haven taken these tests.
            </p>
        </section>
    );
};

export default Result;
