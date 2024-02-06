import React from 'react'
import search from '../../images/Icons/search.svg'
import angle_down from '../../images/Icons/angle-down.svg'
import admin from '../../images/Admin1.jpg'
import './basic.css'

export default function Basic({component}) {
  return (
    <div className="basic-header d-flex align-items-center justify-content-between">
      <div><h2>{component}</h2></div>
        <div className="basic-header-profile d-flex">
          <div className="basic-header-profile-search d-flex justify-content-between">
            <img className=" w-25" src={search} alt=""/>
            <input name="search" type="search" placeholder="Search"/>
          </div>
          <div className="basic-header-profile-prof d-flex align-items-center">
            <img src={admin} alt=""/>
            <p>Admin</p>
            <img className="w-25 px-md-2 fa-i-cursor" src={angle_down} alt=""/>
          </div>
        </div>
    </div>
  )
}
