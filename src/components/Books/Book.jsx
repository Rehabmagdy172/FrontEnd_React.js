import React, { useState } from 'react'
import search from '../../images/Icons/search.svg'
import book1 from '../../images/Books/Book 1.jpg'
import book1show from '../../images/Book 1.jpg'
import book2 from '../../images/Books/Book 2.jpg'
import book3 from '../../images/Books/Book 3.jpg'
import book4 from '../../images/Books/Book 4.jpg'
import book5 from '../../images/Books/Book 5.jpg'
import './book.css'
import Basic from '../basic/Basic';
import { Link } from 'react-router-dom'

export default function Book() {
  const component ="Books";
  const [toggle, setToggle] = useState(false);

  return (
    <>
  <Basic component={component}/>
      
  <div className="add-book px-3 d-flex align-items-center justify-content-between">
    <h2>{component}</h2>
    <Link to="/bookadd">
      <button className="btn">add</button>
    </Link>
  </div>
  
  <div className="book-menu py-2 ">
    <div className="book-menu-search px-2 py-3 d-flex justify-content-between">
      <div className="book-menu-search-search d-flex justify-content-between">
        <img className=" w-25" src={search} alt=""/>
        <input name="search" type="search" placeholder="Search by title or author"/>
      </div>
      <div>
        {/* <button className="btn">export</button> */}
      </div>
    </div>
    <div className="overflow-x-auto">
      <div className="book-menu-items overflow-x-auto">
        <div className=' align-items-center flex-wrap w-100 book-grid-container p-2'>
            <div className=" nav-menu">Book</div>
            <div className=" nav-menu text-center">Bublisher</div>
            <div className=" nav-menu text-center">Bublishing date</div>
            <div className=" nav-menu">Hall</div>
            <div className=" nav-menu text-center">Rental</div>
            <div className=" nav-menu text-center">Status</div>
            <div className="nav-menu d-flex justify-content-end books-status">
              <p className="px-3" >Actions</p>
            </div>
          </div>

          <div className='align-items-center w-100 book-grid-container book-grid-container-data p-2'>
            <div className="d-flex align-items-center book-view">
              <div onClick={() => setToggle(prev => !prev)} className="book-view-img">
                <img src={book1} alt=""/>
              </div>
              <div className="book-view-des">
              <Link to="/detailscopies">
                <h5>The book Thief</h5>
                <p>Markus Zusak</p>
              </Link>
              </div>
            </div>
            <div className="text-center">Random House Grp</div>
            <div className=" text-center">May 13, 2010</div>
            <div className="">Main Hall</div>
            <div className="books-status"><p>Available</p></div>
            <div className="books-status"><p>Deleted</p></div>
            <div className=" d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 book-grid-container book-grid-container-data p-2'>
            <div className="d-flex align-items-center book-view">
              <div className="book-view-img">
                <img src={book2} alt=""/>
              </div>
              <div className="book-view-des">
                <h5>The angel’s game</h5>
                <p>carlos RULZ ZAFON</p>
              </div>
            </div>
            <div className="text-center">Transworld Grp</div>
            <div className=" text-center">May 13, 2010</div>
            <div className="">Main Hall</div>
            <div className="books-status"><p>Available</p></div>
            <div className="books-status"><p>Available</p></div>
            <div className=" d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 book-grid-container book-grid-container-data p-2'>
            <div className="d-flex align-items-center book-view">
              <div className="book-view-img">
                <img src={book3} alt=""/>
              </div>
              <div className="book-view-des">
                <h5>The LITTLE STRANGER</h5>
                <p>SARAH WATERS</p>
              </div>
            </div>
            <div className="text-center">Random House Grp</div>
            <div className=" text-center">May 13, 2010</div>
            <div className="">Main Hall</div>
            <div className="books-status"><p>Available</p></div>
            <div className="books-status"><p>Available</p></div>
            <div className=" d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 book-grid-container book-grid-container-data p-2'>
            <div className="d-flex align-items-center book-view">
              <div className="book-view-img">
                <img src={book4} alt=""/>
              </div>
              <div className="book-view-des">
                <h5>GYPSY BOY</h5>
                <p>MIKEY WALSH</p>
              </div>
            </div>
            <div className="text-center">Random House Grp</div>
            <div className=" text-center">May 13, 2010</div>
            <div className="">Main Hall</div>
            <div className="books-status"><p>Available</p></div>
            <div className="books-status"><p>Available</p></div>
            <div className=" d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 book-grid-container book-grid-container-data p-2'>
            <div className="d-flex align-items-center book-view">
              <div className="book-view-img">
                <img src={book5} alt=""/>
              </div>
              <div className="book-view-des">
                <h5>Eats,shoots&leaves</h5>
                <p>Lynne truss</p>
              </div>
            </div>
            <div className="text-center">Transworld Grp</div>
            <div className=" text-center">May 13, 2010</div>
            <div className="">Main Hall</div>
            <div className="books-status"><p>Available</p></div>
            <div className="books-status"><p>Available</p></div>
            <div className=" d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>

      </div>
    </div>
  </div>

  <div style={{display: toggle && "block"}} className="image-view">
    <div className="img-book-show">
      <img src={book1show} alt="" />
    </div>
    <div onClick={() => setToggle(prev => !prev)} className="img-show-close">
      {/* <i onClick={() => setToggle(prev => !prev)} className="bi bi-x-lg"></i> */}
    </div>
  </div>
  </>
  )
}
