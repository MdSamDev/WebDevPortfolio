import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <section className='about-section'>
      <h1>Samsad Md Nadaf </h1>
      <h2>Front End Web Developer</h2>
      <label htmlFor='about-info'>
        About Me:
      </label>
      <p id='about-info'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quam fugiat, non cum ipsam asperiores porro tenetur doloremque laborum magnam iusto beatae veniam deleniti animi repudiandae, qui autem vitae tempore?
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore dicta modi fugiat nam commodi asperiores mollitia repellendus velit, accusantium veritatis explicabo rem perspiciatis eligendi provident, sint in similique sequi praesentium?
        </p>
      </section>
    </div>
  )
}

export default About