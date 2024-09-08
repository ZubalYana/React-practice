import React from 'react'
import './Header.css'
export default function Header({children}){
    return(
        <div className='Header'>
            {children}
            <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}