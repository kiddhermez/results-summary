import Result from '@/components/Result';
import Sumary from '@/components/Sumary';
import json from '@/api/data.json';

export default function Home() {
    console.log(typeof json);
    return (
        <main className='flex h-screen w-screen items-center justify-center bg-white'>
            <article className='flex flex-col rounded-[30px] shadow-[0_20px_25px_-5px_#6240fc40] md:flex-row'>
                <Result />
                <Sumary />
            </article>
        </main>
    );
}
