// get all cartoon genres
export const getAllCartoonGenres = async () => {
    try {
        // fetch data api
        const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon_genre");

        // convert to object
        const cartoonGenres = await res.json();
        return cartoonGenres;
    } catch(error) {
        console.log(error);
    }
}

// get all cartoons
export const getAllCartoons = async () => {
    try {
        // fetch data api
        const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");

        // convert to object
        const cartoons = await res.json();
        return cartoons;
    } catch(error) {
        console.log(error);
    }
}

// get cartoon by title
export const getCartoonByTitle = async (cartoonTitle) => {
    try {
        // fetch data
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?search=${cartoonTitle}`);

        // convert to obj
        const data = await res.json(); 
        return data;
    } catch(error) {
        console.log(error);
    }
}

// get cartoon by id
export const getCartoonById = async (id) => {
    try {
        // fetch data
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${id}`);

        // convert to obj
        const data = await res.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}