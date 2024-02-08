import React from 'react'
import search from '../../images/Icons/search.svg'
import './authors.css'
import '../basic/basic.css'
import Navbar from '../basic/Navbar';
import Basic from '../basic/Basic';

export default function Authors() {

    const component ="Authors";

  return (
<section className='container-xll container-fluid'>
            <div className="row basic-row">
              <Navbar/>
    
              <div className="datails">
                <div className="d-flex flex-column">
                  <Basic component={component}/>
    
                  <div className="add-categor px-3 d-flex align-items-center justify-content-between">
                    <h2>{component}</h2>
                    <button className="btn">ADD</button>
                  </div>
    
                  <div className="categor-menu py-2 ">
                    <div className="menu-search px-2 py-3 d-flex justify-content-between">
                      <div className="menu-search-search d-flex justify-content-between">
                        <img className=" w-25" src={search} alt=""/>
                        <input name="search" type="search" placeholder="Search"/>
                      </div>
                      <div>
                        <button className="btn">export</button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="menu-items overflow-x-auto">
                            <div className=' d-flex align-items-center w-100 grid-container p-2'>
                              <div className="col-2 nav-menu">Name</div>
                              <div className="col-2 nav-menu px-3">Status</div>
                              <div className="col-3 nav-menu">Created on</div>
                              <div className="col-3 nav-menu">last  updated on</div>
                              <div className="col-2 nav-menu d-flex justify-content-end">
                                <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">A. S. Byett</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">Alan sugar</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">Aleksander orlov</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">Alice sebold</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">andrea levy</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">andrew marr</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">arthur golden</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
                              </div>
                            </div>
    
                            <div className=' d-flex align-items-center w-100 grid-container grid-container-data p-2'>
                              <div className="col-2">audrey</div>
                              <div className="col-2">
                                <button className="btn">Available</button>
                              </div>
                              <div className="col-3">9/25/2022 10:32:49 pm</div>
                              <div className="col-3"></div>
                              <div className="col-2 d-flex justify-content-end">
                              <button className="btn">Action</button>
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


// 011211
/*
<div className="w-100 table-div ">
                        <div className="table-top-header d-flex justify-content-between">
                          <input type="search" name="" placeholder='Search' />
                          <button className="btn">export</button>
                        </div>
                        <thead>
                            <tr className='table-group-divider'>
                              <th colspan="1" scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th colspan="2" scope="col">Created on</th>
                              <th colspan="2" scope="col">last updated on</th>
                              <th scope="col">
                                <button className="btn">Action</button>
                              </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-group-divider'>
                              <td colspan="1">A. S. Byett</td>
                              <td>
                                <button className="btn">Available</button>
                              </td>
                              <td colspan="2">9/25/2022 10:32:49 pm</td>
                              <td colspan="2"></td>
                              <td>
                                <button className="btn">Action</button>
                              </td>
                            </tr>
                            </tbody>
                            </div>
.author-menu .table-div {
    width: 100%;
    padding: 20px;
    background-color: var(--main-color);
    border: 5px solid black;
    border-collapse:var(--main-color);
    border-radius: 12px;
}




.table-div th,td {
    width: 25%;
    text-align: start;
}

.table-div tr {
    border-bottom: 10px;
}
*/ 