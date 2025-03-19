"use client";
import React from 'react'
import { sidebarDatas } from '../data/sidebarDatas'
import { usePathname } from 'next/navigation'

const SideBarComponent = () => {
    // get current path
    const pathname = usePathname();

    return (
        <section>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="h-full w-63 2xl:w-96 bg-white" aria-label="Sidebar">
                <div className="h-full px-3 py-5 overflow-y-auto custom-font">
                    <article className="flex flex-col justify-center items-center ps-2.5 mb-5 w-full gap-3">
                        <img src="./images/boy.png" className="w-[168px] h-[160px]" alt="Flowbite Logo" />
                        <div className='flex flex-col justify-center items-center'>
                            <h1
                                className='text-2xl'
                                style={{ color: '#0B3954' }}
                            >Black Monster
                            </h1>
                            <p
                                className='text-xl'
                                style={{ color: '#087E8B' }}
                            >blackmonster@gmail.com
                            </p>
                        </div>
                    </article>

                    <ul className="mt-10 rounded-lg text-[18px]">
                        {sidebarDatas.map((data) => (
                        <li key={data.id}>
                            <a href={data.path} className={`flex items-center p-2.5 text-gray-700 rounded-lg hover:font-bold mx-5 
                                ${pathname === data.path ? 'bg-blue-100 text-blue-500' : 'hover:bg-gray-100 bg-white' } group`}>
                                <img className='ml-5' src={data.icon} alt={data.alt} />
                                <span className="ms-3">{data.title}</span>
                            </a>
                        </li>
                        ))}
                        <li>
                            <a className="flex items-center p-2.5 text-gray-700 rounded-lg hover:bg-gray-200 group hover:font-bold mt-5 bg-ghost-white mx-5">
                                <img className='ml-5' src="/icons/setting.svg" alt="setting" />
                                <span className="ms-3">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}

export default SideBarComponent