import * as S from "./styles"
import { ITimeline } from "interfaces"
import { TechList } from "components"
import { Title } from "./Title"
import { Company } from "./Company"
import { Description } from "./Description"
import { Briefcase } from "@styled-icons/octicons/Briefcase"

type VerticalTimelineElementProps = {
    experience: ITimeline
}

export const VerticalTimelineElement = ({
    experience
}: VerticalTimelineElementProps) => {
    return (
        <S.Wrapper
            visible={true}
            contentStyle={{
                background: "var(--dark-color)",
                color: "var(--light-color)",
                border: "2px solid var(--light-color)",
                borderRadius: "16px"
            }}
            contentArrowStyle={{
                borderRight: "none"
            }}
            date={experience.period}
            icon={<Briefcase />}
            iconStyle={{
                background: "var(--dark-color)",
                color: "var(--highlight-color)"
            }}
        >
            <Title title={experience.title} />
            <Company company={experience.company} />
            <Description description={experience.description} />
            <TechList list={experience.skills} iconSize={32} />
        </S.Wrapper>
    )
}
