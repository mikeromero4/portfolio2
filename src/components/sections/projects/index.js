import React from "react"
import Content from "../../UI/content"
import Project from "./project"
import "./style.scss"
import Bg from "../../UI/background/striped"
import Layer from "../../UI/layers/index"

export default () => (
  <div>
    <Layer layers = {[
      <Bg variation='black-white'/>,
      <div className="note">
      <div className='note__content'>
      <h4>A Note to potential employers:</h4>
      <p>
        The projects displayed here are personal projects that I built for my
        own business purposes. Although I haven't produced many other websites
        to show on my portfolio, I have created various other applications that
        I am unable to display. (Can give more info upon request)
      </p>
    </div>
    </div>
    ]}/>
          


    <div className='projects-list'>
      Projectss
    <Content modifier='light' titleSize = "lg" title = "" footer = {<div>test</div>}>
    {projectData.map(e => (<Project {...e} />))}
    </Content>
    </div>
  </div>
)

let projectData = [
  {
    name: "your tech class (v.3)",
    description:"A single page app built with react and Gatsby. It is hosted with Netlify and uses different AWS services for its backend. ( still under construction )",
    purpose:"It is a LMS (learning management system) for small groups and classes that helps track, assess and guide learning activities. It also assists students and instructors organize groups based on members availability and mutual skills.",
    url: "https://yourtechclass.netlify.com/",
    technologies: {
      items: [
        "React",
        "Redux",
        "Gatsby",
        "Netlify",
        "SASS",
        "cognito", "Api Gateway", "Lambda", "DynamoDB"
      ],
    },
    features: {

    },
  },
  {
    name: "your tech class (v.2)",
    description:
      "This is the current live version of your tech class. It's purpose was to provide a central hub for students in a variety of tech classes.",
    url: "https://yourtechclass.com/",
    technologies: { items: ["asdf"] },
    features: [],
  },
  {
    name: "your tech class (v.1)",
    description: "another test description",
    url: "http://classroom.yourtechclass.com/class/old.php",
    technologies: { items: ["asdf"] },
    features: [],
  },
  {
    name: "physics arcade",
    description: "another test description",
    url: "http://physicsarcade.com/",
    technologies: { items: ["asdf"] },
    features: [],
  },
]


