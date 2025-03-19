import React from 'react'

const HomeComponent = () => {
  return (
    <div className='m-12'>
      <div className='border-b-light-blue border-b pb-2'>
        <h2 className='text-deep-teal font-bold bg-ghost-white px-7 py-2 w-fit rounded-xl'>Homepage</h2>
      </div>
      <div className='flex flex-row justify-center items-center flex-wrap gap-20 mt-3 h-[67.5vh]'>
        <a href='/book-categories' className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl px-8 pb-8 pt-40 w-[314px] h-[471px] mt-24 group">
          <img src="/images/wisper.png" alt="wisper" className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:brightness-60" />
          <span className='absolute top-3 left-3 z-10 bg-white w-fit flex justify-center items-center gap-2 px-3 py-1 rounded-3xl'>
            <img src="/icons/tag.svg" alt="tag" />
            <span className="text-md font-bold text-deep-teal">Book</span>
          </span>

          {/* Pop-up Text  */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-4xl font-bold w-[175px] h-[150px] text-center">View All Available Books</p>
          </div>
        </a>

        <a href='/old-school-cartoons' className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl px-8 pb-8 pt-40 w-[314px] h-[471px] mt-24 group">
          <img src="/images/study.png" alt="study" className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:brightness-60" />

          <span className='absolute top-3 left-3 z-10 bg-white w-fit flex justify-center items-center gap-2 px-3 py-1 rounded-3xl'>
            <img src="/icons/tag.svg" alt="tag" />
            <span className="text-md font-bold text-deep-teal">Cartoon</span>
          </span>

          {/* Pop-up Text  */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-4xl font-bold w-[175px] h-[150px] text-center">View All Available Books</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HomeComponent