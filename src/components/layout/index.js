import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const Layout = ({ children }) => {
  return (
    <>


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
