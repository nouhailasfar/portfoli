import React from 'react'
import './Contact.css'

import { BsInstagram } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { AiFillDribbbleCircle } from 'react-icons/ai';
import { BsTelephonePlusFill } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
      <div class="form-container">
        <form>
          <div class="form-group">
            <label for="name" className='label'>Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div class="form-group">
            <label for="email" className='label'>Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div class="form-group">
            <label for="message" className='label'>Message:</label>
            <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div id='box2'> <div className='icone'>
          <BsTelephonePlusFill className='btn1' />
          <CgMail className='btn3' />
          <BsInstagram className='btn2' />
          <AiFillDribbbleCircle className='btn1' />
        </div><div className='pp'>
          <h3>Number<br /><h5>0663825251 </h5></h3>
          <h3>Gmail<br /><h5>nouhailaifis@Gmail.com </h5></h3>
          <h3>Instagram<br /><h5>nouhaila sfar </h5></h3>
          <h3>full name<br /><h5>nouhaila sfar </h5></h3>
        </div>
        </div>

    </>
  )
}

