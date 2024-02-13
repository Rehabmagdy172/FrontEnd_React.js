import React from 'react'
import search from '../../images/Icons/search.svg'
import './authors.css'
// import '../basic/basic.css'
import Basic from '../basic/Basic';

export default function Authors() {

    const component ="Authors";

  return (
  <>
  <Basic component={component}/>
    
  <div className="add-authors px-3 d-flex align-items-center justify-content-between">
    <h2>{component}</h2>
    <button className="btn">ADD</button>
  </div>
    <div className="add-authors-card d-none">
      <div className="card-top">Add Author</div>
      <div className="card-input">
        <input type="text" name="" id="" placeholder='Author' />
      </div>
      <div className="card-bottom">
        <button className="btn">close</button>
        <button className="btn">save</button>
      </div>
    </div>
    
  <div className="authors-menu py-2 ">
    <div className="authors-menu-search px-2 py-3 d-flex justify-content-between">
      <div className="authors-menu-search-search d-flex justify-content-between">
        <img className=" w-25" src={search} alt=""/>
        <input name="search" type="search" placeholder="Search"/>
      </div>
      <div>
        <button className="btn">export</button>
      </div>
    </div>
    <div className="overflow-x-auto">
        <div className="authors-menu-items overflow-x-auto">
            <div className=' d-flex align-items-center w-100 authors-grid-container p-2'>
              <div className="col-2 nav-menu">Name</div>
              <div className="col-2 nav-menu px-4">Status</div>
              <div className="col-3 nav-menu">Created on</div>
              <div className="col-3 nav-menu">last  updated on</div>
              <div className="col-2 nav-menu d-flex justify-content-end authors-status">
                <p className="px-4 py-1" >Actions</p>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">A. S. Byett</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">Alan sugar</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">Aleksander orlov</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">Alice sebold</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">andrea levy</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">andrew marr</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">arthur golden</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
    
            <div className=' d-flex align-items-center w-100 authors-grid-container authors-grid-container-data p-2'>
              <div className="col-2">audrey</div>
              <div className="col-2 authors-status"><p>Available</p></div>
              <div className="col-3">9/25/2022 10:32:49 pm</div>
              <div className="col-3"></div>
              <div className="col-2 d-flex justify-content-end">
              <button className="btn">Action</button>
              </div>
            </div>
        </div>
    </div>
  </div>

  </>
  )
} 