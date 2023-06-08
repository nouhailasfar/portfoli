import React from 'react'
import './About.css';
// import { SiUbisoft } from 'react-icons/si';

import { FaHome } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';



export default function About() {
  return (
    <div className='container'>
    <div className='abouT'>
      <div className='about'>

        <h1 id='titre'>About</h1>
        <p className='para'>Hi, my name is Nouhaila, I am a front-end web developer. I love decorating and programming very much. I hope for a good course in this specialty<br />I chose this profession because it is considered one of the most fashionable professions in recent years, with an increase in the number of startups and companies that want to participate in the digital field, so there are a lot of opportunities waiting for me!
        </p>
        <div className='work'>

          <div className='containerF'>
            <div className='mee'><FaHome id='logo' />
              <h2 id='h2'>EDUCATION</h2>
              <p id='parag'> Bac in <span id='date'>2021</span><br />the universityin  <span id='date'>2022</span><br /> Professsional formation in <span id='date'>2022</span></p>
            </div>
            <div className='mee'><FaHome id='logo' />
              <h2 id='h2'>Work</h2>
              <p id='parag'> I haven't done<br/> any experiment yet </p>
            </div>
            <div className='mee'><SiApplemusic id='logo' />
              <h2 id='h2'>HOBBIES</h2>
              <p id='parag'> Music , horse riding <br />wadering around the world<br /> swimming  </p>
            </div>n
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
