"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const BookCategoryComponent = ({ bookCategories, books }) => {
  const router = useRouter();
  const pathName = usePathname();
  const typeOfPage = "book";

  const [bookCategoriesData, setBookCategories] = useState(bookCategories);
  const [bookData, setBookData] = useState(books);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [bookDataFilter, setBookDataFilter] = useState();
  const [selectedCategoriesName, setSelectedCategoriesName] = useState("All Books");

  // handleChangeOption
  const handleChangeOption = (e) => {

    // set selectedCategories (category id)
    const selectedOption = e.target.value;
    setSelectedCategories(selectedOption);

    if (selectedOption !== "Select a Category" && selectedOption !== "Filter by Category") {

      // filter book by category
      const filters = bookData.filter(eachBook => eachBook.book_cate_id == selectedOption);

      // filter category name
      const foundSelectedCategoryName = bookCategoriesData.find(category => category.id == selectedOption);

      // set filter book by category
      setBookDataFilter(filters);

      // set category name
      setSelectedCategoriesName(foundSelectedCategoryName.book_cate_name);

    } else {
      setBookDataFilter(books);
    }
  }

  // set bookDataFilter
  useEffect(() => {
    setBookDataFilter(books);
  }, [books])

  return (
    <div className='m-12'>
      <div className='flex justify-between w-full border-b-light-blue border-b'>
        <div className='mb-2'>
          <h2 className='text-deep-teal font-bold bg-ghost-white px-7 py-2 w-fit rounded-xl'>{selectedCategoriesName}</h2>
        </div>

        <form className="min-w-70">
          <select id="CategorySelect"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChangeOption}
          >
            <option value="Select a Category" className='hidden'>Select a Category</option>
            <option value="Filter by Category" className='font-bold text-black' disabled>Filter by Category</option>
            {/* map bookCategories */}
            {bookCategoriesData?.map((bookCategory) => (
              <option key={bookCategory.id} value={bookCategory.id}>{bookCategory.book_cate_name}</option>
            ))}
          </select>
        </form>
      </div>
      <div className='grid gap-5 lg:grid-cols-2 mt-10 h-[67.5vh] overflow-auto'>

        {/* card book */}
        {/* map books */}
        {bookDataFilter?.map((book) => (
          <div key={book.id} className="flex bg-ghost-white rounded-4xl shadow-md m-4 h-fit w-fit relative mt-30">
            {/* Image Section */}
            <div className="w-[240px] h-[235px] rounded-2xl">
              <img src={book.image} alt="book" className="shadow-lg w-[180px] h-[248px] object-cover rounded-2xl absolute top-[-100px] left-10" />
              <Link href={`/read-full-article/${book.id}?type=${typeOfPage}&name=${pathName}`} className="absolute bottom-7 left-10 bg-gray-300 text-blue py-2 px-2 rounded-2xl shadow-md transition-all duration-600 transform hover:translate-y-[-4px] hover:bg-deep-teal hover:text-white">
                READ FULL ARTICLE
              </Link>
            </div>

            {/* Text Section */}
            <div className="w-[300px] h-[235px] p-6">
              <div>
                <h2 className="line-clamp-1 text-blue font-semibold text-xl mb-2">{book.book_title}</h2>
                <p className="line-clamp-6 text-blue text-justify">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BookCategoryComponent