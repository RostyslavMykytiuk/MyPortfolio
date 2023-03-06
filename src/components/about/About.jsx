import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="me"  />
          </div>
        </div>

        <div className="about_content" >
          <div className="about_cards" >
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Hi My name is Rostyslav Mykytiuk and I`m a frontend developer. The main technologies stack which I use to make websites is MERN stack</p>
          <a href="#contact" className='btn btn-primary'>Let`s talk</a>
        </div>


      </div>
    </section>
  )
}
