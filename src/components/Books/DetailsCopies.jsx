import React from 'react'
import book1 from '../../images/Details&&Copies/Book 1.jpg'
import calendar from '../../images/Details&&Copies/Calendar.svg'
import copy from '../../images/Details&&Copies/copy.svg'

import './detailsCopies.css'
import Basic from '../basic/Basic';
import { Link } from 'react-router-dom'


export default function DetailsCopies() {
  const component ="Books";

  // function onClickFocus () {
  //   document.getElementById("focus").focus();
  // }

  function onclickDescription () {
    document.getElementById( 'copiesbook' ).style.display = 'none';
    document.getElementById( 'copiesbook1' ).style.display = 'none';
    document.getElementById( 'detailsbook' ).style.display = 'block';
    document.getElementById( 'detailsbook1' ).style.display = 'block';
  }

  function onclickCopies () {
    document.getElementById( 'detailsbook' ).style.display = 'none';
    document.getElementById( 'detailsbook1' ).style.display = 'none';
    document.getElementById( 'copiesbook' ).style.display = 'block';
    document.getElementById( 'copiesbook1' ).style.display = 'flex';
  }

  return (
  <>
  <Basic component={component}/>

  <div className="detailscopies-menu mx-2 p-4">
    <div className="detailscopies-menu-header d-flex">
      <div className="detailscopies-menu-img">
        <img src={book1} alt="" />
      </div>
      <div className="detailscopies-menu-datails ">
        <div className="detailscopies-datails-des p-4 d-flex">
          <div>
            <h5>The book Thief</h5>
            <p>Markus Zusak</p>
          </div>
          <span className='detailscopies-Status'>Available For Rental</span>
        </div>
        <div className="detailscopies-datails-icons p-2 d-flex align-items-end flex-wrap">
          <div className="datails-icon-date m-2">
            <div className=' d-flex align-items-center'>
              <div className="datails-icon-date-img">
                <img className='w-100' src={calendar} alt="" />
              </div>
              <h5>01 jan,2008</h5>
            </div>
            <p>Bublishing date</p>
          </div>
          <div className="datails-icon-date m-2">
            <div className=' d-flex align-items-center'>
              <div className="datails-icon-date-img">
                <img className='w-100' src={calendar} alt="" />
              </div>
              <h5>01 jan,2008</h5>
            </div>
            <p>Bublishing date</p>
          </div>
          <div className="datails-icon-copies m-2">
            <div className=' d-flex align-items-center'>
              <div className="datails-icon-date-img">
                <img className='w-100' src={copy} alt="" />
              </div>
              <h5>0</h5>
            </div>
            <p>copies</p>
          </div>
          <div className="datails-icon-detailsonly" id='detailsbook1'>
            <span className='detailscopies-Status'>litery fiction</span>
          </div>
          <div className="datails-icon-copiesonly" id='copiesbook1'>
            <span className='detailscopies-Status'>edventure</span>
            <span className='detailscopies-Status'>crime</span>
            <span className='detailscopies-Status'>thrifer</span>
            <button className="btn copiesonly-edit">edit</button>
          </div>
        </div>
      </div>
    </div>
    <div className="detailscopies-menu-footer d-flex">
      <div className="detailscopies-footer-details">
        <Link onClick={onclickDescription} id='focus'>description</Link>
      </div>
      <div className="detailscopies-footer-copies">
        <Link onClick={onclickCopies}>copies</Link>
      </div>
    </div>
  </div>
  <div className="detailsbook mx-2 px-3 py-2" id='detailsbook'>
    <h3>discription</h3>
    <p>
      AT THE HEART OF THE NARRATIVE IS LIESEL, A YOUNG GIRL SENT TO LIVE WITH FOSTER PARENTS, 
      HANS AND ROSA HUBERMANN, IN THE FICTIONAL TOWN OF MOLCHING THE STORY UNFOLDS AGAINST THE BACKDROP OF THE OPPRESSIVE REGIME OF ADOLF HITLER, 
      PROVIDING A UNIQUE PERSPECTIVE ON THE WAR FROM THE EYES OF AN ORDINARY GERMAN FAMILY
    </p>
  </div>
  <div className="copiesbook mx-2" id='copiesbook'>
    <div className="add-copiesbook px-3 d-flex align-items-center justify-content-between">
      <h2>copies</h2>
      <Link to="/bookadd00000">
        <button className="btn">add</button>
      </Link>
    </div>
    <div className="overflow-x-auto">
      <div className="copiesbook-menu-items overflow-x-auto">
        <div className=' align-items-center flex-wrap w-100 copiesbook-grid-container p-2'>
            <div className=" nav-menu">serial number</div>
            <div className=" nav-menu text-center">edition</div>
            <div className=" nav-menu text-center">Rental?</div>
            <div className=" nav-menu text-center">Status</div>
            <div className=" nav-menu text-center">created on</div>
            <div className=" nav-menu text-center">rental history</div>
            <div className=" nav-menu text-center">Actions</div>
          </div>

          <div className='align-items-center w-100 copiesbook-grid-container copiesbook-grid-container-data p-2'>
            <div className="">10000005</div>
            <div className="text-center">8</div>
            <div className="text-center">
              <button className="btn">not Available</button>
            </div>
            <div className="text-center">
              <button className="btn">Available</button>
            </div>
            <div className="text-center">May 13, 2010</div>
            <div className="text-center">
              <button className="btn">history</button>
            </div>
            <div className="text-center">
              <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 copiesbook-grid-container copiesbook-grid-container-data p-2'>
            <div className="">10000004</div>
            <div className="text-center">8</div>
            <div className="text-center">
              <button className="btn"> Available</button>
            </div>
            <div className="text-center">
              <button className="btn">Available</button>
            </div>
            <div className="text-center">May 13, 2010</div>
            <div className="text-center">
              <button className="btn">history</button>
            </div>
            <div className="text-center">
              <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 copiesbook-grid-container copiesbook-grid-container-data p-2'>
            <div className="">10000003</div>
            <div className="text-center">3</div>
            <div className="text-center">
              <button className="btn">not Available</button>
            </div>
            <div className="text-center">
              <button className="btn">Available</button>
            </div>
            <div className="text-center">May 13, 2010</div>
            <div className="text-center">
              <button className="btn">history</button>
            </div>
            <div className="text-center">
              <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 copiesbook-grid-container copiesbook-grid-container-data p-2'>
            <div className="">10000002</div>
            <div className="text-center">2</div>
            <div className="text-center">
              <button className="btn">not Available</button>
            </div>
            <div className="text-center">
              <button className="btn">Available</button>
            </div>
            <div className="text-center">May 13, 2010</div>
            <div className="text-center">
              <button className="btn">history</button>
            </div>
            <div className="text-center">
              <button className="btn">Actions</button>
            </div>
          </div>

          <div className='align-items-center w-100 copiesbook-grid-container copiesbook-grid-container-data p-2'>
            <div className="">10000001</div>
            <div className="text-center">1</div>
            <div className="text-center">
              <button className="btn">not Available</button>
            </div>
            <div className="text-center">
              <button className="btn">Available</button>
            </div>
            <div className="text-center">May 13, 2010</div>
            <div className="text-center">
              <button className="btn">history</button>
            </div>
            <div className="text-center">
              <button className="btn">Actions</button>
            </div>
          </div>

      </div>
    </div>
  </div>
  </>
  )
}
