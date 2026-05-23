import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { Blackboard, TechList } from "components"
import { experiences } from "utils"
import { Briefcase } from "@styled-icons/octicons/Briefcase"

export const ExperiencesTemplate = () => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <Blackboard>
                <VerticalTimeline lineColor="var(--light-color)">
                    {experiences.map((experience, index) => (
                        <S.TimelineElement
                            key={index}
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
                            <S.Title>{experience.title}</S.Title>
                            <S.Company>{experience.company}</S.Company>
                            <S.Description>
                                {experience.description}
                            </S.Description>
                            <TechList list={experience.skills} iconSize={32} />
                        </S.TimelineElement>
                    ))}
                </VerticalTimeline>
            </Blackboard>
        </>
    )
}
