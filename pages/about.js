const platforms = [
  {
    icon: "fa-github",
    link: "https://github.com/pedsm"
  },
  {
    icon: "fa-medium",
    link: "https://medium.com/@pedsm"
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/pedsm"
  },
  {
    icon: "fa-gitlab",
    link: "https://gitlab.com/pedsm"
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/pedmendonca/"
  },
]

export default function About() {
  return (
    <section>
      <div className="section">
        <h2>About</h2>
        <p>You can find more of my work in the following platforms</p>
        <br></br>
        <br></br>
        <div className="level">
          {platforms.map((plat, i) => (
            <a key={i} href={plat.link}><i className={`fab fa-2x ${plat.icon}`}></i></a>
          ))}
        </div>
      </div>
    </section>
  )
}