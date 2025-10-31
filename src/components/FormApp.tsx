import formImg from '../assets/Form.png'
import { useState } from "react"

function FormApp() {
    const [showDescription, setShowDescription] = useState(false)

  return (
    <div className="profile-card">
      <img className="formImg" src={formImg} alt="screen shot of Form"></img>
      <h1 className="heading">Registration Form</h1>
      {showDescription ? <p className="description">Skills used:<ul>
        <li>Created using HTML and CSS</li>
        <li>Utilising a variety of HTML labels to collect specific information from a customer</li>
        <li>Styling the form in CSS</li>
        <li><a className="repoLink" target="_blank" href="https://github.com/KLJackel/Registration-form.git">GitHub link</a></li>
        </ul></p>
        : null}
      <button onClick={() => setShowDescription(!showDescription)} className="weatherapp-button">Toggle details</button>
    </div>
  
      )
    }


export default FormApp