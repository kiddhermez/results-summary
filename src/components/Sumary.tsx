import React from 'react';
import ItemScore from './ItemScore';
import MemoryIcon from './icons/MemoryIcon';
import ReactionIcon from './icons/ReactionIcon';
import VerbalIcon from './icons/VerbalIcon';
import VisualIcon from './icons/VisualIcon';

const Sumary = () => {
    return (
        <section className='flex flex-col gap-5 p-10 md:w-[50%]'>
            <h1 className='mb-5 text-3xl font-semibold'>Summary</h1>
            <ItemScore
                icon={<ReactionIcon />}
                title='Reaction'
                score={80}
                color='#FF5555'
            />
            <ItemScore
                icon={<MemoryIcon />}
                title='Memory'
                score={92}
                color='#FFB21E'
            />
            <ItemScore
                icon={<VerbalIcon />}
                title='Verbal'
                score={61}
                color='#00BB8F'
            />
            <ItemScore
                icon={<VisualIcon />}
                title='Visual'
                score={72}
                color='#1125D6'
            />
            <button className='mt-5 rounded-full bg-[#303B59] p-5 text-2xl text-white hover:bg-gradient-to-b hover:from-[#6742FF] hover:to-[#312CE9]'>
                Continue
            </button>
        </section>
    );
};

export default Sumary;
