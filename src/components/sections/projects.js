import React from "react"
import img1 from "../../images/2.png"

export default () => (
  <div>

    <div className="note">
      <h4>A Note to potential employers:</h4>
      <p>
        The projects displayed here are personal projects that I built for my
        own business purposes. Although I haven't produced many other websites
        to show on my portfolio, I have created various other applications that
        I am unable to display. (Can give more info upon request)
      </p>
    </div>
    <Content titleSize = "lg" title = "projects" footer = {<div>test</div>}>
    {projectData.map(e => (<Project {...e} />))}
    </Content>
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
        {
          name: "AWS",
          items: ["cognito", "Api Gateway", "Lambda", "DynamoDB"],
        },
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

let Project = ({ name, description, url, technologies,purpose }) => (
  <div className = "project">
  <Content titleSize = "md" title = {name} footer = {<div>view github repo</div>}>
      <Media image = {{
        link:url,
        width:200,
        source:img1,
        description:""
      }}>
       <Content title = "description">
         <p>{description}</p>
        </Content>
       <Content title = "title">
         <p>{purpose}</p>
        </Content>
       <Content title = "technologies">
         <List list={technologies} />
        </Content>
      </Media>
  </Content>
  </div>
)

let Media = ({image,children})=><div className="o-media">
<a target="_blank" href={image.link}>
  <img
    class="o-media__image"
    width={image.width}
    src={image.source}
    alt={image.description}
  />
</a>
<div class="o-media__body">
  {children}
</div>
</div>


let Content = ({title,children,titleSize = "sm",footer})=>
  <div className = "l-content">
  <h4  className = {`l-content__title--${titleSize}`}>{title}</h4>
  <div className = "l-content__body">
    {children}
    </div>
    <div className = "l-content__footer">
      {footer || ""}
    </div>
    </div>

let List = ({ list,nested }) => (
  <ul className={'c-list'+(nested?'--nested':'')}> 
    {list.items.map(item =>                               // map the given list
        typeof item === "string" ? (
          <li className = "c-list__item">{item}</li>      // if an item is a string, map it to a list item
        ) : (
          <li className = "c-list__item--container">{item.name || ""}      
          <List list={item} nested = {true}/></li>         // or else map it to a list created from the item (recursively)
        ) 
    )}
  </ul>
)
