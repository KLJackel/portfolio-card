import weatherapp from "/home/alex/Desktop/Coding/React practice/card-portfolio/card-portfolio/src/assets/weatherapp.jpg"
import { useState } from "react"

function WeatherApp() {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="profile-card">
      <img className="weatherapp" src={weatherapp} alt="screen shot of Weather App"></img>
      <h1 className="heading">Weather App</h1>
      {showDescription ? <p className="description">Skills used:<ul> 
        <li>API Integration</li>
        <li>DOM manipulation</li>
        <li>Error Handling</li>
        <li><a className="repoLink" target="_blank" href="https://github.com/KLJackel/Weather-app.git">GitHub link</a></li></ul></p> : null}
      <button onClick={() => setShowDescription(!showDescription)} className="weatherapp-button">Toggle details</button>
    </div>
  )
}

export default WeatherApp