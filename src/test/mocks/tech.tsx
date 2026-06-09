import { ITech, TTechList } from "interfaces"
import { Html5, Css3, Javascript } from "@styled-icons/simple-icons"

const techListing: ITech[] = [
    {
        icon: <Html5 />,
        label: "HTML",
        identifier: "html"
    },
    {
        icon: <Css3 />,
        label: "CSS",
        identifier: "css"
    },
    {
        icon: <Javascript />,
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
