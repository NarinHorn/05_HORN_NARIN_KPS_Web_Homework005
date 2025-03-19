import React from 'react'
import OldSchoolCartonComponent from './_components/OldSchoolCartonComponent'
import { getAllCartoonGenres, getAllCartoons, getCartoonByTitle } from '@/app/service/cartoon.service';


const OldSchoolCarttonsPage = async ({searchParams : searchParamsPromise}) => {

  const searchParams = await searchParamsPromise || null;

  // get search query
  const searchQuery = searchParams?.search || '';

  // call getAllCartoonGenres
  const data = await getAllCartoonGenres();
  const cartoonGenres = data.payload;

  // call getAllCartoons
  const dataCartoons = await getAllCartoons();
  const cartoons = dataCartoons.payload;

  // check if user search or not
  let searchCartoon;
  if (searchQuery) {
    // call api search cartoon by title
    const searchCartoonData = await getCartoonByTitle(searchQuery);
    searchCartoon = searchCartoonData.payload;
  } else {
    searchCartoon = cartoons;
  }

  return (
    <OldSchoolCartonComponent
      cartoonGenres={cartoonGenres}
      cartoons={searchCartoon}
    />
  )
}

export default OldSchoolCarttonsPage