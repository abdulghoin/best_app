// import Packages
import React from 'react'
import {Link, IndexLink} from 'react-router'

const NavHeader =(props)=>{
  let links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Features',
      url: '/features',
    },
    {
      name: 'Testimonials',
      url: '/testimonials',
    },
    {
      name: 'Screenshots',
      url: '/screenshots',
    },
    {
      name: 'Pricing',
      url: '/pricing',
    },
    {
      name: 'Sign Up',
      url: '/sign-up',
    },
  ];
  links = links.map((link, i)=>{
    let {name, url} = link;
    if (url=='/') {
      return(
        <li key={i}>
          <IndexLink to='/'>
            {name}
          </IndexLink>
        </li>
      )
    } else {
      return(
        <li key={i}>
          <Link to={url}>
            {name}
          </Link>
        </li>
      )
    }
  });

  return(
    <nav id='NavHeader'>
      <div class='header-container'>
        <IndexLink to='/' class='brand'>
          <img src='/img/logo/logo.png' />
        </IndexLink>

        <ul class='nav'>
          {links}
        </ul>
      </div>
    </nav>
  )
}

export default NavHeader
