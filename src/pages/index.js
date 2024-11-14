import Head from 'next/head';
import Banner from "../components/banner";
import Section from "../components/section";

export const metadata = {
  title: "Michael Allen - Front End Developer",
  description: "Experienced Front End Developer with 9 years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Banner />
      <Section />
    </>
  )
}