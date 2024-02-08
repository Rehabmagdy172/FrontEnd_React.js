import React, { useState } from 'react'
import untitled from '../../images/Untitled design.jpg'

import book1Recently from '../../images/Books/Book1(Recently).jpg'
import book1Top from '../../images/Books/Book1(Top).jpg'
import book2Recently from '../../images/Books/Book2(Recently).jpg'
import book2Top from '../../images/Books/Book2(Top).jpg'
import book3Recently from '../../images/Books/Book3(Recently).jpg'
import book3Top from '../../images/Books/Book3(Top).jpg'
import book4Recently from '../../images/Books/Book4(Recently).jpg'
import book4Top from '../../images/Books/Book4(Top).jpg'
import './dashboard.css'
import Navbar from '../basic/Navbar'
import Basic from '../basic/Basic'

export default function Dashboard() {

    const component ="Dashboard";
    
  return (
    <section className='container-xll container-fluid'>
        <div className="row basic-row">
            
            <Navbar/>
            
            <div className="datails">
                <div className="d-flex flex-column">

                    <Basic component={component}/>

                    <div className="dash-view d-flex justify-content-center align-items-center flex-column">
                        <div className="untitled">
                            <img src={untitled} alt="" />
                        </div>
                        <div className="dash-view-categore my-4 d-flex justify-content-between">
                            <div className="view-categore-recently ">
                                <h3>Recently Added Books</h3>
                                <div className="view-categore-row d-flex">
                                    <div className="w-25 h-100 recently-img">
                                        <img src={book1Recently} alt=""/>
                                    </div>
                                    <div className="w-25 h-100 recently-img">
                                        <img src={book2Recently} alt=""/>
                                    </div>
                                    <div className="w-25 h-100 recently-img">
                                        <img src={book3Recently} alt=""/>
                                    </div>
                                    <div className="w-25 h-100 recently-img">
                                        <img src={book4Recently} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="view-categore-top ">
                                <h3>Top Books Add</h3>
                                <div className="d-flex flex-column justify-content-between top-row ">
                                    <div className="d-flex align-items-center p-0 top-row-book">
                                        <div className="top-img">
                                            <img src={book1Top} alt=""/>
                                        </div>
                                        <div className="top-des">
                                            <h5>The book Thief</h5>
                                            <p>Markus Zusak</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-0 top-row-book">
                                        <div className="top-img">
                                            <img src={book2Top} alt=""/>
                                        </div>
                                        <div className="top-des">
                                            <h5>The angel’s game</h5>
                                            <p>carlos RULZ ZAFON</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-0 top-row-book">
                                        <div className="top-img">
                                            <img src={book3Top} alt=""/>
                                        </div>
                                        <div className="top-des">
                                            <h5>The LITTLE STRANGER</h5>
                                            <p>SARAH WATERS</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-0 top-row-book">
                                        <div className="top-img">
                                            <img src={book4Top} alt=""/>
                                        </div>
                                        <div className="top-des">
                                            <h5>GYPSY BOY</h5>
                                            <p>MIKEY WALSH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
