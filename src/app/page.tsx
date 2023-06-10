import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='bg-[#1d2939] w-full h-screen '>
        <div className='flex items-center justify-between mt-10 mx-16'>
          <div className='flex item-center flex-col w-5/12 gap-9 ml-9'>
            <h3 className='text-[#70f5ee] text-lg capitalize'>INTRODUCING OUR COPYWRITING API</h3>
            <h1 className='text-6xl text-white font-bold'>Retrieve your generated copy in the fastest way possible</h1>
            <p className='text-[#adbdcc] text-xl'>
              Building the future of e-commerce with our state-of-the-art machine learning technology.
            </p>
            <div className='py-2.5 px-6 rounded-lg text-white bg-[#5148d7] hover:bg-[#5d55d3] cursor-pointer flex items-center text-center justify-center w-36 h-12'>
              Get API Key
            </div>
          </div>
          <Image src="/hero.svg" alt='hero image' width={400} height={400} className='h-auto w-90' />
        </div>
      </section>
      <section className='bg-white'>
        <div className='flex flex-col items-center justify-center'>
          <h3>Join 1,000+ marketers writing with AI</h3>
          {/* logo part */}
        </div>
      </section>
      <section className='flex flex-col items-center justify-center gap-5'>
        <p className='text-[#6e63fa] text-lg font-semibold'>WHAT WE PROVIDE</p>
        <h1 className='text-[#0a2540] text-5xl font-bold'>Product Description Generator API</h1>
        <p className='text-[#425466] w-3/4 text-xl text-center'>
          Hypotenuse AI uses computer vision and Natural Language Processing (NLP) to automatically generate product descriptions for e-commerce Product Detail Pages (PDP). We provide a simple API that allows you to send product information and retrieve back product descriptions for your PDP.
        </p>

      </section>
    </main>
  )
}
