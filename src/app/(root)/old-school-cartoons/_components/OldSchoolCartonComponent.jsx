"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OldSchoolCartonComponent = ({ cartoonGenres, cartoons }) => {
  const router = useRouter();
  const pathName = usePathname();
  const typeOfPage = "cartoon";

  const [cartoonGenresData, setCartoonGenresData] = useState(cartoonGenres);
  const [cartoonsData, setCartoonsData] = useState(cartoons);
  const [selectedCartoons, setSelectedCartoons] = useState("");
  const [cartoonsDataFilter, setCartoonsDataFilter] = useState();
  const [selectedCartoonsName, setSelectedCartoonsName] = useState("Old School Cartoons");

  // split to get year only
  const splitYear = (publicYear) => {
    let year = String(publicYear).split('-')[0];
    return year;
  }

  // handleChangeOption
  const handleChangeOption = (e) => {
    const selectedOption = e.target.value;
    setSelectedCartoons(selectedOption);

    if (selectedOption !== "Select a Category" && selectedOption !== "Filter by Category") {

      // filter cartoons by category
      const filters = cartoonsData.filter(eachCartoon => eachCartoon.ct_genre_id == selectedOption);

      // set filter book by category
      setCartoonsDataFilter(filters);

      // filter category name
      const foundSelectedCartoonName = cartoonGenresData.find(c => c.id == selectedOption);

      // set category name
      setSelectedCartoonsName(foundSelectedCartoonName.cartoon_genre);

    } else {
      setCartoonsDataFilter(cartoons);
    }
  }

  // set CartoonsDataFilter
  useEffect(() => {
    setCartoonsDataFilter(cartoons);
  }, [cartoons])

  return (
    <div className='m-12'>
      <div className='flex justify-between w-full border-b-light-blue border-b'>
        <div className='mb-2'>
          <h2 className='text-deep-teal font-bold bg-ghost-white px-7 py-2 w-fit rounded-xl'>{selectedCartoonsName}</h2>
        </div>

        <form className="min-w-70">
          <select id="CategorySelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChangeOption}
          >
            <option value="Select a Category" className='hidden'>Select a Category</option>
            <option value="Filter by Category" className='font-bold text-black' disabled>Filter by Category</option>
            {/* map cartoonGenres */}
            {cartoonGenresData?.map((cartoonGenre) => (
              <option key={cartoonGenre.id} value={cartoonGenre.id}>{cartoonGenre.cartoon_genre}</option>
            ))}
          </select>
        </form>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-5 mt-10 h-[67.5vh] overflow-auto'>
        <section className="w-full bg-white">
          <div className="mx-auto max-w-[1160px]">
            <main className="flex items-center flex-col md:flex-row gap-20 flex-wrap">

              {/* map cartoons */}
              {cartoonsDataFilter?.map((cartoon) => (
                <Link key={cartoon.id} href={`/read-full-article/${cartoon.id}?type=${typeOfPage}&name=${pathName}`}>
                  <img className="mb-5 rounded-3xl w-[320px] h-[420px]" src={cartoon.image} />
                  <div>
                    <h3 className="text-black text-xl font-semibold">{cartoon.ct_title}</h3>
                    <span className="flex flex-row gap-3 text-deep-teal text-lg font-semibold">
                      <img src="/icons/eye.svg" alt="eye" />
                      <span>{cartoon.view_count}</span>
                      <span>times</span>
                      <span>|</span>
                      <span>{splitYear(cartoon.published_year)}</span>
                    </span>
                  </div>
                </Link>
              ))}

            </main>
          </div>

        </section>
      </div>
    </div>
  )
}
export default OldSchoolCartonComponent