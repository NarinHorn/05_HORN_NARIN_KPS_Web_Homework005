// get all book category
export const getAllBookCategories = async () => {
    try {
        // fetch data api
        const res = await fetch("https://nextjs-homework005.vercel.app/api/book_category");

        // convert to object
        const bookCategories = await res.json();
        return bookCategories;
    } catch(error) {
        console.log(error);
    }
}

// get all book
export const getAllBook = async () => {
    try {
        // fetch data
        const res = await fetch("https://nextjs-homework005.vercel.app/api/book");

        // convert to obj
        const books = await res.json();
        return books;
    } catch(error) {
        console.log(error);
    }
}

// get book by book title
export const getBookByBookTitle = async (bookTitle) => {
    try {
        // fetch data
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${bookTitle}`);

        // convert to obj
        const data = await res.json(); 
        return data;
    } catch(error) {
        console.log(error);
    }
}

// get book by id
export const getBookById = async (id) => {
    try {
        // fetch data
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`);

        // convert to obj
        const data = await res.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}
