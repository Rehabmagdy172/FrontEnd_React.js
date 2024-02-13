import React from 'react'
import search from '../../images/Icons/search.svg'
import './categories.css'
// import '../basic/basic.css'
import Basic from '../basic/Basic';

export default function Categories() {

  const component ="Categories";

  return (
  <>
  <Basic component={component}/>
    
  <div className="add-categories px-3 d-flex align-items-center justify-content-between">
    <h2>{component}</h2>
    <button className="btn">ADD</button>
  </div>
    
  <div className="categories-menu py-2 ">
    <div className="categories-menu-search px-2 py-3 d-flex justify-content-between">
      <div className="categories-menu-search-search d-flex justify-content-between">
        <img className=" w-25" src={search} alt=""/>
        <input name="search" type="search" placeholder="Search"/>
      </div>
      <div>
        <button className="btn">export</button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <div className="categories-menu-items overflow-x-auto">
          <div className=' d-flex align-items-center w-100 categories-grid-container p-2'>
            <div className="col-2 nav-menu">Name</div>
            <div className="col-2 nav-menu px-4">Status</div>
            <div className="col-3 nav-menu">Created on</div>
            <div className="col-3 nav-menu">last  updated on</div>
            <div className="col-2 nav-menu d-flex justify-content-end categories-status">
              <p className="px-4 py-1" >Actions</p>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">current</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">crime</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">combat stories</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">business</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">body</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">arts</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">affairs</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
    
          <div className=' d-flex align-items-center w-100 categories-grid-container categories-grid-container-data p-2'>
            <div className="col-2">adventure</div>
            <div className="col-2 categories-status"><p>Available</p></div>
            <div className="col-3">9/25/2022 10:32:49 pm</div>
            <div className="col-3"></div>
            <div className="col-2 d-flex justify-content-end">
            <button className="btn">Actions</button>
            </div>
          </div>
      </div>
    </div>
  </div>
  </>
  )
}
