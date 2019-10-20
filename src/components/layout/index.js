import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"


const Layout = ({ children }) => {
  return (
    <>
    {/* <div id = "fixedBackground">    
    <div id = "fixedBackground2"></div>
    <div id = "fixedBackground3"></div>
</div> */}
   
    <main>
      <div id = "main-content">{children}</div>
    </main>
    <footer>
      © {new Date().getFullYear()}, Michael Romero
      contact form
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
