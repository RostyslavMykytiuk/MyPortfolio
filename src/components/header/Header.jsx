import React from 'react'

import { CTA } from './CTA'
import HeaderSocials from './HeaderSocials'

import "./Header.css"
import Me from "./../../assets/me.png"



export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Rostyslav Mykytiuk</h1>
        <h5 className="text-light">
          Front End Developer
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt=""  />
        </div>

        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}
