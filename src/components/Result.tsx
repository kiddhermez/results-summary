import React from 'react';

const Result = () => {
    return (
        <section
            className={`
                flex w-[45%] flex-col items-center
                justify-between gap-5 rounded-[30px]
                bg-[#6240fc] p-10 text-center text-white`}
        >
            <h2 className='text-2xl font-semibold opacity-70'>Your Result</h2>
            <div
                className={`
                    flex h-56 w-56 flex-col
                    items-center justify-center rounded-[100%]
                    bg-gradient-to-b from-[#4A24CF]`}
            >
                <p className='text-7xl font-bold'>76</p>
                <p className='text-xl opacity-70'>of 100</p>
            </div>
            <h3 className='text-4xl font-semibold'>Great</h3>
            <p className='text-lg'>
                You scored higher than 65% of the people who haven taken these
                tests.
            </p>
        </section>
    );
};

export default Result;
