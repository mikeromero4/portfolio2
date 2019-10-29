import React from "react"

let projectData = [
    {
        name:"project1",
        description:"test description"
    },
        {
        name:"project2",
        description:"another test description"
    },
        {
        name:"project3",
        description:"another test description"
    }
]

let Project = ({name,description})=>
<div class="media">
    <img class="media__image" width = {200} src="//placehold.it/60&text=item" alt="" />
    <div class="media__body">
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
</div>


export default()=><div>
    <div  className = "note">
       <h4>A Note to potential employers:</h4>

<p>The projects displayed here are personal projects that I built for my own business purposes. 
Although I haven't produced many other websites to show on my portfolio, I have created various other applications that I am unable to display. (Can give more info upon request)  
</p>
</div>
    {projectData.map((e)=><Project {...e}/>)}
</div>