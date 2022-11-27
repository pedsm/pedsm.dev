import { ProjectTag } from "./components/tag"

export type Project = {
  id: string,
  name: string,
  github: string,
  env?: string,
  description: string,
  img?: string,
  tags: ProjectTag[],
}

const { OSS, DESKTOP, WEB } = ProjectTag

const projects: Project[] = [
  {
    "id": "liveCup",
    "name": "live-cup",
    "github": "https://github.com/pedsm/liveCup",
    "env": "https://live-cup.pedsm.dev",
    "description": "Your world cup 2022 dashboard",
    "tags": [OSS, WEB]
  },
  {
    "id": "pl-poker",
    "name": "planning-poker",
    "github": "https://github.com/pedsm/planning-poker",
    "env": "https://pl-poker.herokuapp.com/",
    "description": "socket based planning poker",
    "tags": [OSS, WEB]
  },
  {
    "id": "iemanja",
    "name": "iemanja",
    "github": "https://github.com/pedsm/iemanja",
    "description": "A desktop mermaid editor",
    "img": "https://raw.githubusercontent.com/pedsm/iemanja/master/.github/iemanja1.png",
    "tags": [OSS, DESKTOP]
  },
  {
    "id": "safePostcode",
    "name": "Safe postcode",
    "github": "https://github.com/pedsm/safePostcode",
    "description": "Is my postcode safe?",
    "env": "https://safepostcode.pedsm.now.sh/",
    "img": "https://github.com/pedsm/safePostcode/raw/master/.github/safepostcode.png",
    "tags": [OSS, WEB]
  },
  {
    "id": "jester",
    "name": "jester",
    "github": "https://github.com/pedsm/jester",
    "description": "A VS Code extension",
    "tags": [OSS]
  },
  {
    "id": "sprint",
    "name": "sprint",
    "github": "https://github.com/pedsm/sprint",
    "description": "Async file running",
    "tags": [OSS]
  },
  {
    "id": "i6zViewer",
    "name": "i6zViewer",
    "github": "https://github.com/pedsm/i6zViewer",
    "env": "https://i6z-viewer.vercel.app",
    "description": "A web-based Iuclid viewer",
    "tags": [OSS, WEB]
  }
]

export default projects