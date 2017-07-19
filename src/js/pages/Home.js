// import Packages
import React from 'react'
import {Link} from 'react-router'
// import Helmet from 'react-helmet'

const Home = ()=>{
  return(
    <section id='home' class='two-part-page'>
      {/* <Helmet title='Home' /> */}
      <div class='top'>
        <div class='left'>
          <div>
            <h1>
              Meet BestApp<br/>
              The new world for chat
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div class='right'>
          <div class='box'>
            <img src='/img/background/bg-header-slider.png' />
            <div class='box-inner'>
              <img src='/img/slide/slide_2.jpg' />
            </div>
          </div>
        </div>
      </div>
      <div class='bottom'>

        <div class='btn-container'>
          <Link
            to=''
            class='bottom-btn'
          >
            Learn More
          </Link>
          <a
            href=''
            class='bottom-btn'
          >
            <i class="fa fa-cloud-download" aria-hidden="true"></i> Download App
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
