import React from 'react'

const Header = ({ title }) => {
//  const headerStyle = {
//     backgroundColor: 'mediumblue',
//     color: '#fff'
  // }; //example for applying inline styles
  return (
    <header >
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header