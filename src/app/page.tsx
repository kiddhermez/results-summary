import Container from '@/components/Container';
import { randomInt } from 'crypto';

export default function Home() {
    const data = Array.from({ length: 4 }, () => randomInt(101));
    let result = 0;
    data.map((num) => (result += num));
    return (
        <main className='grid h-screen bg-white md:place-content-center'>
            <Container data={data} result={Math.floor(result / 4)} />
        </main>
    );
}
