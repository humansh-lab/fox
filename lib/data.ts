export type Project = {
  title: string
  type: "instagram" | "youtube"
  video: string
}

export const projects: Project[] = [
  {
    title: "Edit 1",
    type: "instagram",
    video: "/videos/edit1.mp4",
  },
  {
    title: "Edit 2",
    type: "instagram",
    video: "/videos/edit2.mp4",
  },
]

// ✅ ADD THIS TYPE
export type TeamMember = {
  name: string
  role: string
  image: string
}

// ✅ APPLY TYPE HERE
export const team: TeamMember[] = [
  {
    name: "Humansh",
    role: "Founder+vfx",
    image: "/team/you.jpeg",
  },
  {
    name: "shiv",
    role: "Manager+video editor",
    image: "/team/member1.png",
  },
  {
    name: "sachin",
    role: "audio mixer",
    image: "/team/member2.png",
  },
  {
    name: "mohit",
    role: "Designer",
    image: "/team/member4.png",
  },
]