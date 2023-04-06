import Experience from '@/Components/Experience/Experience';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import Resources from '@/Components/Resources/Resources';
import Rewards from '@/Components/Rewards/Rewards';
import Testimonials from '@/Components/Testimonials/Testimonials';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DSF Bank</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Header />
      <main>
        <Experience />
        <Resources />
        <Rewards />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
