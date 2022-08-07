 import React, { useState, useEffect} from 'react';
 import { motion } from 'framer-motion';
 import { urlFor, client } from '../../client'
 import { AppWrap, MotionWrap } from '../../wrapper';

 import './About.scss';


 const About = () => {
  const [abouts, setAbouts] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

   return (
     <>
      <h2 className='head-text'><span>Clean Code</span> <br />means <span>Less Stress</span></h2>
      <br/>
      <h2>About Me</h2>
      <br/>
      <h4>Recent Full Stack Developer graduate from SMU with fundamental knowledge of software design, development, and testing.
        <br />Looking to leverage gained experience from the past year to a Junior developer role.
      </h4>
      <br/>
      <h1>Fullstack Developer</h1>

      <div className='app__profiles' id='about'>
            {abouts.map(( about, index) => (
              <motion.div
              whileInView={{ opacity: 1}}
              whileHover={{ scale: 1.1}}
              transition={{ duration: 0.5, type: 'tween'}}
              className='app__profile-item'
              key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title}/>
                <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
                <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
              </motion.div>
            ))}
      </div>
     </>
   );
 };
 
 export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
 );