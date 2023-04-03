import About from "@/components/About/About";
import Main from "@/components/Main/Main";
import Projects from "@/components/Projecte/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend|developer </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap);
        </style>
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
