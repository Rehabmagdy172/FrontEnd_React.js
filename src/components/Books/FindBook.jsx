import React from 'react'
import find from '../../images/Find A Book.jpg'
import search from '../../images/Icons/search.svg'
import Basic from '../basic/Basic';
import './findBook.css'


export default function FindBook() {

    const component ="Search";

  return (
    <>
    <Basic component={component}/>

    <div className="find-book d-flex align-items-center">
        <div className="p-3 find-book-container d-flex align-items-center justify-content-between">
            <div className="find-book-container-search">
                <p>Find A book</p>
                <div className="book-container-search-search d-flex align-items-center justify-content-between">
                    <img className="w-25" src={search} alt=""/>
                    <input name="search" type="search" placeholder="Search"/>
                </div>
            </div>
            <div className="find-book-container-img">
                <img src={find} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
