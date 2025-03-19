import React from "react";
import { getBookById } from "@/app/service/book.service";
import { getCartoonById } from "@/app/service/cartoon.service";
import Link from "next/link";

const ReadFullArticleDetailPage = async ({ params: paramsPromise, searchParams: searchParamsPromise }) => {

  // get search query (type and name)
  const searchParams = await searchParamsPromise || null;
  const type = searchParams?.type || "";
  const pathName = searchParams?.name || "";

  // get dynamic route (id)
  const params = await paramsPromise || null;
  const Id = params?.readFullArticleId || "";

  // data detail to display
  let data;
  let dataDetail;

  if (type === "book") {
    // get book by id
    data = await getBookById(Id);
    dataDetail = data.payload;
  } else {
    // get cartoon by id
    data = await getCartoonById(Id);
    dataDetail = data.payload;
  }

  // split to get year only
  const splitYear = (publicYear) => {
    let year = String(publicYear).split('-')[0];
    return year;
  }

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto mt-20 ">
        {/* breadcrumb */}
        <nav className="flex text-lg font-semibold text-gray-700" aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-4 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <img className="hidden group-hover:block w-[24px] h-[24px]" src="/icons/link.svg" alt="link" />
                <img className="group-hover:hidden" src='/icons/home-2.svg' alt='home-2' />
                <p className="group-hover:text-deep-teal">Home</p>
              </Link>
            </li>
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <li>
              <div className="flex items-center">
                <Link href={pathName} className="inline-flex items-center gap-2 group">
                  <img className="hidden group-hover:block w-[24px] h-[24px]" src="/icons/link.svg" alt="link" />
                  <img className="group-hover:hidden" src={`/icons/${type === 'book' ? 'book-2.svg' : 'emoji-happy2.svg'}`} alt="sectionLogo" />
                  <p className="group-hover:text-deep-teal">{ type === 'book' ? 'Book Categories' : 'Old School Cartoons' }</p> 
                </Link>
              </div>
            </li>
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <li aria-current="page">
              <div className="flex items-center">
                <img src={`/icons/${type === 'book' ? 'book-3.svg' : 'play-circle.svg'}`} alt="titleLogo" />
                <span className="ms-1 md:ms-2 text-red-700">
                  {type === "book" ? dataDetail.book_title : dataDetail.ct_title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* article */}
        <article className="w-full relative mt-30 bg-white rounded-t-[50px]">
          <div className="px-20 pt-70 pb-10 flex flex-col gap-3">
            <img src={dataDetail.image} alt="img" className="w-[300px] h-[430px] rounded-3xl shadow-xl absolute right-20 top-[-130px]" />
            <p className="text-gray-700 text-2xl font-semibold">{type === "book" ? dataDetail.book_title : dataDetail.ct_title}</p>
            <h3 className="text-deep-teal font-semibold text-xl">
              <span className="text-black font-normal text-xl">by </span>
              {type === "book" ? dataDetail.book_author : dataDetail.ct_creator}
            </h3>

            {type === "cartoon" && (
              <>
                <span className="flex flex-row gap-3 text-deep-teal text-lg font-semibold">
                  <img src="/icons/eye.svg" alt="eye" />
                  <span>{dataDetail.view_count}</span>
                  <span>times</span>
                  <span>|</span>
                  <span>{splitYear(dataDetail.published_year)}</span>
                </span>
              </>
            )}
            <p className="text-justify text-gray-700 mt-2">
              {type === "book" ? dataDetail.description : dataDetail.ct_description}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ReadFullArticleDetailPage;
