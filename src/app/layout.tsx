import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';

const inter = Hanken_Grotesk({
    subsets: ['latin'],
    weight: ['500', '700', '800'],
});

export const metadata = {
    title: 'Results Summary',
    description: 'Results',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
