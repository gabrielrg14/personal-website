import { ITech, TTechList } from "interfaces"

const techListing: ITech[] = [
    {
        icon: <></>,
        label: "HTML",
        identifier: "html"
    },
    {
        icon: <></>,
        label: "CSS",
        identifier: "css"
    },
    {
        icon: <></>,
        label: "JavaScript",
        identifier: "javascript"
    }
]

const known: TTechList = ["html", "css", "javascript"]
const knowledge: TTechList = ["vuejs", "nodejs", "nestjs"]
const potential: TTechList = ["storybook"]
const studying: TTechList = ["cursor"]

export const techMocks = {
    techListing,
    known,
    knowledge,
    potential,
    studying
}
