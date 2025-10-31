import cartoon from '/home/alex/Desktop/Coding/React practice/card-portfolio/card-portfolio/src/assets/profilepic.jpg'

function Profile() {
  return (
    <div className="profile-card">
        <img className="profilepic" src={cartoon} alt="Profile picture"></img>
        <h1 className="heading">Alex Taylor Portfolio</h1>
        <p className="description">Welcome to my portfolio of created work for you to browse. Simply click on a project to understand the skills used in creating it. Each project links to a Github Repo including this site itself. The main webpage was created using React and the database managed using Php</p>
    </div>
  )
}

export default Profile