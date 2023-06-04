import Result from '@/components/Result';
import Sumary from '@/components/Sumary';

export default function Home() {
    return (
        <main className='flex h-screen w-screen items-center justify-center bg-white'>
            <article className='flex rounded-[30px] shadow-[0_20px_25px_-5px_#6240fc40]'>
                <Result />
                <Sumary />
            </article>
        </main>
    );
}
