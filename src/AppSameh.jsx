import React from 'react'
import Navbar from './components/basic/Navbar'
import Basic from './components/basic/Basic'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Authors from './components/Authors/Authors'
import Categories from './components/Categories/Categories'
import Book from './components/Books/Book'
import BookAdd from './components/Books/BookAdd'
import DetailsCopies from './components/Books/DetailsCopies'

export default function AppSameh() {
  return (
    <section className='container-xll container-fluid'>
        <div className="row basic-row">
        
            <Navbar/>
        
            <div className="datails">
                <div className="d-flex flex-column position-relative">

                    {/* <Basic component={component}/> */}
                    <Routes>
                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='authors' element={<Authors/>} />
                        <Route path='categories' element={<Categories/>} />
                        <Route path='book' element={<Book/>} />
                        <Route path='bookadd' element={<BookAdd/>} />
                        <Route path='detailscopies' element={<DetailsCopies/>} />
                    </Routes>

                </div>
            </div>
        </div>
    </section>
  )
}
