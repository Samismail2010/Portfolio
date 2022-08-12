import React, { useState} from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <ul className='app__navbar-links'> 
                <li className='app__flex p-text'>
                    <a href="#">Home</a>
                </li>
                <li className='app__flex p-text'>
                    <a href="#">About</a>
                </li>
                <li className='app__flex p-text'>
                    <a href="#work">Work</a>
                </li>
                <li className='app__flex p-text'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='app__flex p-text'>
                    <a href="#contact">Contact</a>
                </li>
            
        </ul>
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            
            {/* framer-motion library*/}
            {toggle && (
                <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut'}}
                >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                    <li onClick={() => setToggle(false)}>
                        <a href="/">Home</a>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <a href="#work">Work</a>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                
            </ul>
                </motion.div>    
            )}
        </div>
    </nav>
  )
}

export default Navbar