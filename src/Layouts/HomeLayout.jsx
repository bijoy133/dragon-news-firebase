import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
            <Latest/>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto gap-3  grid grid-cols-12'>
              <aside className='col-span-3 sticky top-0 h-fit'>
                <LeftAside></LeftAside>
              </aside>
               
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section >

                <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
              </aside>
            </main>
        </div>
    );
};

export default HomeLayout;