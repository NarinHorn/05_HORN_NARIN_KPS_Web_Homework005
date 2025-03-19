import BookCategoryComponent from './_components/BookCategoryComponent'
import { getAllBook, getAllBookCategories, getBookByBookTitle } from '@/app/service/book.service';

const BookCategoriesPage = async ({searchParams : searchParamsPromise}) => {

  const searchParams = await searchParamsPromise || null;
  
  // get search query
  const searchQuery = searchParams?.search || '';

  // call getAllBookCategories
  const bookCategorydata = await getAllBookCategories();
  const bookCategories = bookCategorydata.payload;

  // call getAllBook
  const bookData = await getAllBook();
  const books = bookData.payload;

  // check if user search or not
  let searchBooks;
  if (searchQuery) {
    // call api search book by book title
    const searchBookData = await getBookByBookTitle(searchQuery);
    searchBooks = searchBookData.payload;
  } else {
    searchBooks = books;
  }

  return (
    <BookCategoryComponent
      bookCategories={bookCategories}
      books={searchBooks}
    />
  )
}
export default BookCategoriesPage