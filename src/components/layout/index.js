import React from "react"
import "./style.scss"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children,Intro }) => {
  let element =  React.useRef()
  let sectionHeight = element.current ? element.current.offsetHeight : 0

  return (
    <>
    <main id = "main-content">
    <div id = "intro" ref={element} className = "full-screen">
     <Header height={sectionHeight}/>
      <Intro height={sectionHeight}/>
    </div>
      {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout
