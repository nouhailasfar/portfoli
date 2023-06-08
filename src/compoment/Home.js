import React from 'react'
import './Home.css'
import Titre from './Titre'

export default function Home() {
  return (

    <div class="container1">
      <div class="text-box">
        <Titre />
        <h1 id='t1'>
          Hi, Iam  <br />
          Nouhaila Sfar
        </h1>
        <p id="test">
          I'm Nouhaila sfar, I'm a front-end developer, I resorted to this job because I love this field and enjoy it very much<br />
          i hope to do More
        </p>
      </div>
      <div class="image-box">
        <img src={require("../images/nouhaila.jpeg")} alt='img' className='image' />

      </div>
    </div>
  )
}
