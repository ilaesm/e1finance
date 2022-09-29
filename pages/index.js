import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import about from './about'
import Navbar from '../components/navbar'
import Email from '../components/email'
import Ticker from '../components/ticker'
import Typewriter from 'typewriter-effect'


export default function Home() {
  return (
  <div>
  <Navbar />
<section className="dark:bg-gray-800"> 
	<div className="container mx-auto flex flex-col items-center justify-center w-screen px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
    <div className="text-black font-bold text-[70px] font-['Manrope'] w-screen grow pb-6 font-medium">
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Investing')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Trading')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Experience')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Coming soon')
      .stop()
      .start()    
  }}
/>
</div>
		{/* <p className="px-8 mt-8 mb-12 text-[#b5b5b5] font-['DM_Sans'] font-lg mt-9 ">The E1 Investing Competition is a global investing competition for highschool students</p> */}
		{/* <p className="px-8 mt-8 mb-12 text-[#333333] font-['Manrope'] font-lg mt-9 font-normal">The E1 Investing Competition is a global investing competition for highschool students</p> */}
		<p className="px-8 mt-8 mb-12 text-[#333333] font-['Manrope'] font-lg mt-9 font-normal">The E1 Investing Competition is a global investing competition for highschool students</p>
	</div>
    <Head>
      <title>Home - E1 Investing Competition</title>
    </Head>
</section>
<Email />
<Ticker />
</div>
)
}
