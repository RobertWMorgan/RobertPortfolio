import '../App.css'

const ProjectsList = [
    { title: "Bug CATastrophe", description: `Solo project to develop a different version of the classic Space Invaders
            game in 1 week, with the aim of learning DOM and interval timings.`, link: `https://github.com/RobertWMorgan/Projectone` },
    { title: "PokeDex", description: ` 2 day pair project that used an external API to display all existing
            Pokemon in an index format. Mainly focused on requests to API and
            sorting through the data.`, link: `https://github.com/RobertWMorgan/ProjectTwoPokedex` },
    { title: "Seeded", description: `10 day project in a 3 person team to create an index website of our
            favorite house plants. Back-end: Mainly focused on creating the user
            model, routing and reverse relationships. Front-end: Handled the
            favorites function, profile page and search/navbar using React and
            Bootstrap.`, link: `https://github.com/RobertWMorgan/Project-3-seeded` },
    { title: `Discord Reminder bot`, description: `Discord bot that reads server events then pings all sign ups a reminder when event is about to start. Uses the discord API`, 
      link: `https://github.com/RobertWMorgan/DiscordEventsBot`},
    { title: `Game Picker`, description: `Solo project that helps you find a new game to play based on your selected genres. Uses the RAWG API & ReactJS`, link: `https://github.com/RobertWMorgan/gamepicker`},
    { title: `Levecalc`, description: `Small half day project that helps calculate how much to split profit for FFXIV leve quests `, link: `https://github.com/RobertWMorgan/levecalc`}
  ];

const Projects = () => {
    return (
      <div className="container py-5" style={{ backgroundColor: "#ffffff", color: "#333" }}>
        <h3 className="h4 mb-4">Projects</h3>
        <div className="row">
          {ProjectsList.map((project, idx) => (
            <div className="col-md-4 mb-4 prj-card" key={idx} onClick={() => window.open(project.link)}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  export default Projects

