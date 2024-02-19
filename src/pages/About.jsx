export const About = () => {
  return (
    <div className="">
      <p>
        <b>Huetopia</b> is built with React as a project during our Web Development Bootcamp at Ironhack.
        <br />
        With an AI API integrated, the webapp generates a color palette according to the text input provided by the user. The team behind this project:
      </p>

      {/* team members  */}
      {/* links to your GitHub and LinkedIn profiles. */}
      <div className="">
        <div>
          <h2>Stefan Kummerlöw</h2>
        </div>
        <div className="">
          <h2>Laia Navalón</h2>
          <a href="https://es.linkedin.com/in/laia-navalon-arxe-763b2353">
            LinkedIn
          </a>{" "}
          | <a href="https://github.com/feelikeadoll">Github</a>
          <p>
          Former fashion designer changing career paths but forever a colour theory enthusiast
          </p>
        </div>
        <div className="team-member">
          <h2>Erik Busch</h2>
          <p>
            <a href="https://www.linkedin.com/in/erik-busch-fullstack-development/">
              LinkedIn
            </a>{" "}
            | <a href="https://github.com/EazyErik">Github</a>
          </p>
          <p>
            Aspiring software developer with a passion for yoga and riding single speed bikes
          </p>
        </div>
      </div>
    </div>
  );
};
