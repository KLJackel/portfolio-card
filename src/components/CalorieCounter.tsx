import calorieCounterImg from '/home/alex/Desktop/Coding/React practice/card-portfolio/card-portfolio/src/assets/Calorie counter.png'
import { useState } from "react"

function CalorieCounter() {
const [showDescription, setShowDescription] = useState(false)


  return (
    <div className="profile-card">
        <img className="calorieCounterImg" src={calorieCounterImg} alt="Screen shot of calorie counter"></img>
        <h1 className="heading">Calorie Counter</h1>
        
        {showDescription ? <p className="description">Skills used: <ul>
          <li>Accepting user input to store into variables</li>
          <li>Validating user input and then performing calculations</li>
          <li>Using addEventListerner() methods</li>
          <li>Dynamically updating interface to show results</li>
          <li>Using a combination of HTML, CSS and Javescript</li>
          <li><a className="repoLink" target="_blank" href="https://github.com/KLJackel/calorie-counter.git">GitHub link</a></li>
          </ul></p>
        : null}
      <button onClick={() => setShowDescription(!showDescription)} className="weatherapp-button">Toggle details</button>
    </div>
  )
}

export default CalorieCounter