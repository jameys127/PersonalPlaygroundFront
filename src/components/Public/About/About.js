import React from 'react'
import PublicHeader from '../PublicHeader'
import PublicFooter from '../PublicFooter'
import './About.css';
import AnimatedRoutes from '../../../features/animated/AnimatedRoutes';

const About = () => {
  return (
    <>
        <PublicHeader />
        <div className='about-me-container'>
            <AnimatedRoutes>
            <div className='about-body'>
                <h1>About me</h1>
                <div className='about-me-paragraphs'>
                    <p>
                        Hello, my name is Jeremiah 'Jamey' Sheehy, a junior software developer from California and a lifelong nerd. I recently graduated with a Bachelor's in Computer Science and I'm currently expanding my portfolio while continually working to grow my technical skills and experience. My curiosity for how things work, whether that's in code, entire systems, or videogames, drives me to keep learning and create new projects for the fun of it. I first got into programming because I wanted to make video games, but somewhere along the way I fell in love with the entire ecosystem of computers and have never looked back.<br/><br/>

                        Right now most of my projects revolve around backend development, where I get to focus on the logic, structure, and implementation of RESTful APIs and databases. My current work centers around Node.js, Express, and PostgreSQL, which is what this website was built with, alongside some React.js for a user interface. I also have a strong background in Java and I'm eager to explore Spring Boot to build on that foundation. Static typing, I've learned, is something I took for granted so I forsee Java/Typescript in my future.<br/><br/>

                        Outside of professional development, I enjoy working on complex systems like my custom compiler project or my hobby of game development. GameDev is where I can merge my love of art (even though I'm not that talented) with my love of programming. I get to transfer all my fascination for fantasy, worldbuilding, and lore into a place where I get to tinker with game mechanics and logic. It's been challenging but very rewarding!<br/><br/>

                        All of the code for the projects featured on this website, including the website itself, is available on my <a href="https://github.com/jameys127" target="_blank" rel="noopener noreferrer">GitHub</a> page.
                    </p>
                </div>
            </div>
            </AnimatedRoutes>
        </div>
        <PublicFooter />
    </>
  )
}

export default About
