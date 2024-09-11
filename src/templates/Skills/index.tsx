import { NextSeo } from "next-seo"

import * as S from "./styles"
import { Blackboard, TechList, TechCard } from "components"
import {
    techListing as techs,
    knownTechs as known,
    knowledgeTechs as knowledge,
    studyingTechs as studying,
    potentialTechs as potential
} from "utils"

export const SkillsTemplate = () => {
    return (
        <>
            <NextSeo
                title="Skills"
                description="The skills that Gabriel has, the technologies he uses daily, which he has knowledge, which he is currently studying and which he intends to study in the future."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Skill, Skills, Gabriel's skills, Technology, Technology Skills, Technologies, Used Technologies, Technologies with Knowledge, Technologies Studied, Technologies to be Studied"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/skills`}
            />

            <Blackboard>
                <S.Wrapper>
                    <S.ListBox>
                        <S.TitleList>Main technologies I master</S.TitleList>
                        <TechList>
                            {techs.map(
                                ({ icon, label, identifier }) =>
                                    known.includes(identifier) && (
                                        <TechCard
                                            key={identifier}
                                            label={label}
                                            icon={icon}
                                        />
                                    )
                            )}
                        </TechList>
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>
                            Technologies I know, but have not yet mastered
                        </S.TitleList>
                        <TechList>
                            {techs.map(
                                ({ icon, label, identifier }) =>
                                    knowledge.includes(identifier) && (
                                        <TechCard
                                            key={identifier}
                                            label={label}
                                            icon={icon}
                                        />
                                    )
                            )}
                        </TechList>
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>I&#39;m studying right now</S.TitleList>
                        <TechList>
                            {techs.map(
                                ({ icon, label, identifier }) =>
                                    studying.includes(identifier) && (
                                        <TechCard
                                            key={identifier}
                                            label={label}
                                            icon={icon}
                                        />
                                    )
                            )}
                        </TechList>
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>I plan to study next</S.TitleList>
                        <TechList>
                            {techs.map(
                                ({ icon, label, identifier }) =>
                                    potential.includes(identifier) && (
                                        <TechCard
                                            key={identifier}
                                            label={label}
                                            icon={icon}
                                        />
                                    )
                            )}
                        </TechList>
                    </S.ListBox>
                </S.Wrapper>
            </Blackboard>
        </>
    )
}
