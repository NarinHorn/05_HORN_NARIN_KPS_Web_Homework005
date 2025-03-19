"use client"

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SearchBarComponent = () => {
    const router = useRouter();
    const pathName = usePathname();

    console.log("pathName",pathName);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchData = e.target.elements['default-search'].value;

        // if search data exist, push current route to search
        if (searchData) {
            router.push(`${pathName}?search=${encodeURIComponent(searchData)}`);
        } else {
            router.push(pathName);
        }
    }

    return (
        <form className="w-full mx-auto" onSubmit={handleSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <button className="absolute inset-y-0 start-3 flex items-center ps-3 cursor-pointer">
                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
                <input type="search" id="default-search" className="rounded-full block w-full px-4 py-3 ps-15 text-md text-gray-900 border-none bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Search book or category" />
            </div>
        </form>
    )
}

export default SearchBarComponent