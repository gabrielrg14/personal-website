import { NextSeo } from "next-seo"

import * as S from "./styles"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { Blackboard, TechList, TechCard } from "components"
import { experiences, techListing as techs } from "utils"
import { Work } from "@styled-icons/material/Work"

export const ExperiencesTemplate = () => {
    return (
        <>
            <NextSeo
                title="Experiences"
                description="The work experiences Gabriel had during his career as a developer."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Experience, Experiences, Gabriel's experiences, Work, Work Experiences, Job, Jobs, Technology Jobs"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/experiences`}
            />

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
                            icon={<Work />}
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
                            <TechList>
                                {techs.map(
                                    ({ icon, label, identifier }) =>
                                        experience.skills.includes(
                                            identifier
                                        ) && (
                                            <TechCard
                                                key={identifier}
                                                label={label}
                                                icon={icon}
                                                iconSize={32}
                                            />
                                        )
                                )}
                            </TechList>
                        </S.TimelineElement>
                    ))}
                </VerticalTimeline>
            </Blackboard>
        </>
    )
}
