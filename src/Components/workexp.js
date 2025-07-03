import '../App.css'


const Workexp = () => {
 return (
      <div className="container py-5">
        <h3 className="h4 mb-4">Work Experience</h3>
        <div className="row">
                <section className="mb-4">
                    <div className="exp-card">
                        <h5>Frontend Developer</h5>
                        <h6>Investcloud, Inc. Nov 2022 - June 2025</h6>
                        <ul>
                            <li>
                               Collaborated with cross-functional teams to deliver interactive webapplications, achieving a 92% average ticket pass rate through effective design and implementation. 
                            </li>
                            <li>
                               Created detailed design documents outlining the required data, page structure, and REST API calls, ensuring clear specifications for development. 
                            </li>
                            <li>
                               Facilitated the onboarding of new developers by leading office hours, workshops, and reviews, accelerating their productivity and reducing ticket fail rates. 
                            </li>
                            <li>
                                Successfully performed SSO/Production releases with no downtime, maintaining uninterrupted user access.
                            </li>
                        </ul>
                    </div>
                    <div className="exp-card">
                        <h5>Software Engineering Immersive Student</h5>
                        <h6>General Assembly, Mar 2022 - Jun 2022</h6>
                        <ul>
                            <li>
                                A 13 week Full-Stack course covering all the fundamentals of both Back-end and Front-end development. This was done through daily standups, traditional lectures and 4 main projects. 
                            </li>
                        </ul>
                    </div>
                    <div className="exp-card">
                        <h5>Junior Marketing Officer</h5>
                        <h6>The Invicta Group,  October 2019- March 2022</h6>
                        <ul>
                            <li>
                                Achieved no.1 position on Google’s search engine by overseeing keyword research and rewriting meta-titles and image alt-text.
                            </li>
                            <li>
                                Performed QA by bugtesting all new sites/site features and relaying feedback to developers.
                            </li>
                            <li>
                                Consulted in the design and features of new websites and website pages from a UX perspective.
                            </li>
                        </ul>
                    </div>
                    
                </section>
        </div>
      </div>
    );
}



export default Workexp