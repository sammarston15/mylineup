import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-choice'>
        <i class="fas fa-th-list fa-2x"></i>
        <div>Lists</div>
      </div>
      <div className='nav-choice'>
      <i class="fas fa-user-circle fa-2x"></i>
        <div>Account</div>
      </div>
    </div>
  )
}

export default Nav
