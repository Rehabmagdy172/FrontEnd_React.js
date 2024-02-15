import React, { useState } from 'react'
import search from '../../images/Icons/search.svg'
import './categories.css'
// import '../basic/basic.css'
import Basic from '../basic/Basic';

export default function Categories() {

  const [toggle, setToggle] = useState(false);
  const component ="Categories";

  return (
  <>
  <Basic component={component}/>
    
  <div className="add-categories px-3 d-flex align-items-center justify-content-between">
    <h2>{component}</h2>
    <button onClick={() => setToggle(prev => !prev)} className="btn">ADD</button>
  </div>
  <div style={{top: toggle && "0"}} className="add-categories-card">
    <div className="card-top d-flex justify-content-between p-3">
      <p>Add Categorie</p>
      <i onClick={() => setToggle(prev => !prev)} className="bi bi-x-lg"></i>
    </div>
    <div className="div-form px-3">
      <form className=' bg-white' >
        <div className="form-input d-flex flex-column justify-content-around py-2">
          <div className="input-border"></div>
          <input type="text" name="" id="" placeholder='Categorie' />
          <div className="input-border"></div>
        </div>
        <div className="form-button d-flex justify-content-end">
          <button onClick={() => setToggle(prev => !prev)} className="btn button-close ">close</button>
          <button className="btn button-save">save</button>
        </div>
      </form>
    </div>
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
