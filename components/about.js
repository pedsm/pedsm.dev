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
  {
    icon: "fas fa-mug-hot",
    link: "https://www.buymeacoffee.com/pedsm"
  }
]

export default function about() {
  return (
    <div style={{width: '50%', margin: 'auto'}} className="level">
      {platforms.map((plat, i) => (
        <a key={i} href={plat.link}><i className={`fab fa-x ${plat.icon}`}></i></a>
      ))}
    </div>
  )
}