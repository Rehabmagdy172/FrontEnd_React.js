import React from 'react'
import bookAdd from '../../images/Image of add book.jpg'
import Navbar from '../basic/Navbar';
import Basic from '../basic/Basic';
import './bookAdd.css'
import DisplayImage from './UploadImage';

export default function BookAdd() {
    const component ="Books";

    return (
        <section className='container-xll container-fluid'>
            <div className="row basic-row">
              <Navbar/>
      
                <div className="datails">
                    <div className="d-flex flex-column">
                      <Basic component={component}/>

                      <div className="addbook-menu py-2 ">
                        <div className="addbook">
                            <h3>add book</h3>
                        </div>
                        <div className="addbook-date ">
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>image</p>
                                </div>
                                <div className="date-input d-flex justify-content-center">
                                    <div className="mx-2 img-upload">
                                        {/* <img className='w-100' src={bookAdd} alt="" /> */}
                                        <DisplayImage/>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>title</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>author name</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>Categories</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>Bublisher</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>Bublishing date</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                            <div className=' d-flex align-items-center my-4'>
                                <div className="date-name">
                                    <p>Hall</p>
                                </div>
                                <div className="date-input">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>
                    
                        <div className="addbook-button">
                            <button className="btn addbook-button-1">add book</button>
                            <button className="btn addbook-button-2">cancel</button>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </section>
  )
}
