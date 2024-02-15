import React, { useState } from 'react'
import search from '../../images/Icons/search.svg'
import './authors.css'
// import '../basic/basic.css'
import Basic from '../basic/Basic';

export default function Authors() {

  const [toggle, setToggle] = useState(false);
  const component ="Authors";

  return (
  <>
  <Basic component={component}/>
    
  <div className="add-authors px-3 d-flex align-items-center justify-content-between">
    <h2>{component}</h2>
    <button onClick={() => setToggle(prev => !prev)} className="btn">ADD</button>
  </div>
  <div style={{top: toggle && "0"}} className="add-authors-card">
    <div className="card-top d-flex justify-content-between p-3">
      <p>Add Author</p>
      <i onClick={() => setToggle(prev => !prev)} className="bi bi-x-lg"></i>
    </div>
    <div className="div-form px-3">
      <form className=' bg-white' >
        <div className="form-input d-flex flex-column justify-content-around py-2">
          <div className="input-border"></div>
          <input type="text" name="" id="" placeholder='Author' />
          <div className="input-border"></div>
        </div>
        <div className="form-button d-flex justify-content-end">
          <button onClick={() => setToggle(prev => !prev)} className="btn button-close ">close</button>
          <button className="btn button-save">save</button>
        </div>
      </form>
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