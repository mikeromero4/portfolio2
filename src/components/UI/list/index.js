import React from "react"
import "./style.scss"
let List =  ({ list,nested }) => (
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
export default List