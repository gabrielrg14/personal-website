import { ITimeline } from "interfaces"
import { techMocks } from "./tech"

const experiences: ITimeline[] = [
    {
        title: "Junior Developer",
        company: "Startup Ltd",
        period: "2020 - 2022",
        description: "Junior development role",
        skills: techMocks.studying
    },
    {
        title: "Mid-level Developer",
        company: "Dev Inc",
        period: "2022 - 2024",
        description: "Mid-level development role",
        skills: techMocks.knowledge
    },
    {
        title: "Senior Developer",
        company: "Tech Corp",
        period: "2024 - Present",
        description: "Senior development role",
        skills: techMocks.known
    }
]

export const timelineMocks = {
    experiences
}
