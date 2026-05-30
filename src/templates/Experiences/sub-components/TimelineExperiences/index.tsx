import { VerticalTimeline } from "react-vertical-timeline-component"
import { VerticalTimelineElement } from "./VerticalTimelineElement"
import { experiences } from "utils"

export const TimelineExperiences = () => {
    return (
        <VerticalTimeline lineColor="var(--light-color)">
            {experiences.map((experience, index) => (
                <VerticalTimelineElement key={index} experience={experience} />
            ))}
        </VerticalTimeline>
    )
}
