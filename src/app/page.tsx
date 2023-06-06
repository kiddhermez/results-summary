'use client';
import Container from '@/components/Container';
import { Random } from 'random-js';
import { useEffect, useState } from 'react';

const random = new Random();
export default function Home() {
    const [data, setData] = useState<number[]>();
    const [result, setResult] = useState(0);

    useEffect(() => {
        const newData = Array.from({ length: 4 }, () => random.integer(0, 100));
        setData(newData);

        let res = 0;
        for (const num of newData) {
            res += num;
        }
        setResult(res);
    }, []);

    return (
        <main className='grid h-screen bg-white md:place-content-center'>
            <Container
                data={data ?? [80, 92, 61, 72]}
                result={Math.floor(result / 4)}
            />
        </main>
    );
}
