import '../App.css'

const InterestsList = [
    { name: "Music", description: `I enjoy playing drums and listening to metal and punk music. Some of my favorite bands are Avatar, Dance Gavin Dance, and Don Broco. `},
    { name: "Video games", description: `I’m also into video games — I play Monster Hunter, OSRS, and lead raid groups in FFXIV.`},
    {name: "Bouldering", description: `I go to the gym and do bouldering now and then`}
]

const Interests = () => {
    return (
      <div className="container py-5">
        <h3 className="h4 mb-4">Hobbies & Interests</h3>
        <div className="row">
            {InterestsList.map((Interests, idx) => (
                <section className="mb-4" key={idx}>
                    <h5>{Interests.name}</h5>
                    <p>{Interests.description}</p>
                </section>
            ))}
        </div>
      </div>
    );
  }

  export default Interests