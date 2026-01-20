import React from 'react'
import AboutHero from '../components/AboutHero'
import DetailImage from '../components/DetailImage'

const About = () => {
  const courses = [{
    img: './src/assets/Abouts/webDesgin.png',
    heading: 'Web Designing',
    para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at provident officiis quam, amet veritatis ratione reiciendis! Atque ipsa.',
    design:false,
  }, {
    img: '/src/assets/Abouts/appDevelopment.png',
    heading: 'App Development',
    para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at provident officiis quam, amet veritatis ratione reiciendis! Atque ipsa.',
    design: true,
    }, {
    img: '/src/assets/Abouts/ui&uxDesign.png',
    heading: 'UI & UX Design',
    para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at provident officiis quam, amet veritatis ratione reiciendis! Atque ipsa.',
    design: true,
    }, {
    img: '/src/assets/Abouts/editingPhoto.png',
    heading: 'Editing Photo',
    para: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at provident officiis quam, amet veritatis ratione reiciendis! Atque ipsa.',
    design: false,
  }]
  return (
    <div>
      <AboutHero props={courses} />
      
    </div>
  )
}

export default About
