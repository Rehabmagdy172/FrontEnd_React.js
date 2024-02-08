import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/BOOKIFy Logo Without 200 - 200.png'
import dashboard from '../../images/Icons/dashboard.svg'
import category from '../../images/Icons/category.svg'
import author from '../../images/Icons/author.svg'
import books from '../../images/Icons/Books.svg'
import subscribe from '../../images/Icons/Subscribe.svg'
import user from '../../images/Icons/user.svg'
import search from '../../images/Icons/search.svg'

import './navbar.css';

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg align-items-start nav-header">
            <div className="container-fluid flex-column position-relative">
                <Link className="navbar-brand w-100" to="/dashboard">
                    <div className="">
                        <img className="w-100 p-0" src={Logo}/>
                    </div>
                </Link>
                {/* <button onClick={() => setToggle(prev => !prev)} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    /* <span className="navbar-toggler-icon"></span>
                    { toggle ? <i className="bi bi-x-lg text-danger fs-3"></i>: <i className="bi bi-list fs-3 "></i>}
                </button> */}
                <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
                { toggle ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}
                </div>
                <div style={{left: toggle && "0"}} className="collapse navbar-collapse show" id="navbarNav">
                    <ul className="navbar-nav  flex-column">
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="/dashboard">
                                <img className=" px-2 w-25" src={dashboard} />Dashboard</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="/categories">
                                <img className=" px-2 w-25" src={category} />Categories</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="/authors">
                                <img className=" px-2 w-25" src={author} />Authors</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="#">
                                <img className=" px-2 w-25" src={books} />Books</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="#">
                                <img className=" px-2 w-25" src={subscribe} />Subscribers</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="#">
                                <img className=" px-2 w-25" src={user} />Users</Link>
                        </li>
                        <li className="nav-item py-0">
                            <Link onClick={() => setToggle(false)} className="nav-link fs-5 fw-medium text-dark" to="#">
                                <img className=" px-2 w-25" src={search} />Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    <div className="basic-row-disnon"></div>
    </>
  )
}
