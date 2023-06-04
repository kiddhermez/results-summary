import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
    icon: any;
    title: string;
    score: number;
    color: string;
}

const ItemScore = ({ icon, title, score, color, ...props }: Props) => {
    const divStyle = {
        backgroundColor: color + '20',
        color: color,
    };
    return (
        <div
            style={divStyle}
            className={`flex justify-between gap-5 rounded-2xl p-5`}
        >
            <section className='flex gap-2'>
                {icon}
                <h3>{title}</h3>
            </section>
            <section className='flex gap-2'>
                <p className='text-black'>{score}</p>
                <p className='text-black opacity-50'>/ 100</p>
            </section>
        </div>
    );
};

export default ItemScore;
