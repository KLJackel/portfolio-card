import todoListImg from '/home/alex/Desktop/Coding/React practice/card-portfolio/card-portfolio/src/assets/to-do list.png'
import { useState } from "react"

function TodoList() {
const [showDescription, setShowDescription] = useState(false)


  return (
    <div className="profile-card">
        <img className="todoListImg" src={todoListImg} alt="Screen shot of to-do list"></img>
        <h1 className="heading">To-do List</h1>
        
        {showDescription ? <p className="description">Skills used: <ul>
          <li>Using HTML, CSS and Javascript</li>
          <li>Using eventListerners methods for user input</li>
          <li>Storing data on local system to make sure the list is not lost on refresh</li>
          <li>Manipulating arrays in functions to update To-do list tasks</li>
          <li><a className="repoLink" target="_blank" href="https://github.com/KLJackel/To-do-List.git">GitHub link</a></li>
          </ul></p>
        : null}
      <button onClick={() => setShowDescription(!showDescription)} className="weatherapp-button">Toggle details</button>
    </div>
  )
}

export default TodoList