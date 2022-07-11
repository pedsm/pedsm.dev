type Project = {
  id: string,
  name: string,
  github: string,
  env?: string,
  description: string,
  img?: string,
  tags: string[],
}

const projects: Project[] = [
  {
    "id": "planning-poker",
    "name": "planning-poker",
    "github": "https://github.com/pedsm/planning-poker",
    "env": "https://pl-poker.herokuapp.com/",
    "description": "Socket based planning poker",
    "tags": ["oss", "web"]
  },
  {
    "id": "iemanja",
    "name": "iemanja",
    "github": "https://github.com/pedsm/iemanja",
    "description": "A desktop mermaid editor",
    "img": "https://raw.githubusercontent.com/pedsm/iemanja/master/.github/iemanja1.png",
    "tags": ["oss", "desktop"]
  },
  {
    "id": "safePostcode",
    "name": "Safe postcode",
    "github": "https://github.com/pedsm/safePostcode",
    "description": "Is my postcode safe?",
    "env": "https://safepostcode.pedsm.now.sh/",
    "img": "https://github.com/pedsm/safePostcode/raw/master/.github/safepostcode.png",
    "tags": ["oss", "web"]
  },
  {
    "id": "jester",
    "name": "jester",
    "github": "https://github.com/pedsm/jester",
    "description": "A VS Code extension",
    "tags": ["oss"]
  },
  {
    "id": "sprint",
    "name": "sprint",
    "github": "https://github.com/pedsm/sprint",
    "description": "Async file running",
    "tags": ["oss"]
  },
  {
    "id": "i6zViewer",
    "name": "i6zViewer",
    "github": "https://github.com/pedsm/i6zViewer",
    "description": "A web-based Iuclid viewer",
    "tags": ["oss", "web"]
  }
]

export default projects