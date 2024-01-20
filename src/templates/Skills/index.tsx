import { NextSeo } from "next-seo"

import * as S from "./styles"
import { TechList, TechCard } from "components"
import {
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
                            "Skill, Skills, Gabriel's skills, Technologies, Used Technologies, Technologies with Knowledge, Technologies Studied"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/skills`}
            />

            <S.Wrapper>
                <S.ListBox>
                    <S.TitleList>Techs and tools I usually use</S.TitleList>
                    <TechList>
                        {known.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>
                </S.ListBox>

                <S.ListBox>
                    <S.TitleList>Techs and tools I have used</S.TitleList>
                    <TechList>
                        {knowledge.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>
                </S.ListBox>

                <S.ListBox>
                    <S.TitleList>I&#39;m studying at the moment</S.TitleList>
                    <TechList>
                        {studying.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>
                </S.ListBox>

                <S.ListBox>
                    <S.TitleList>I intend to study in the future</S.TitleList>
                    <TechList>
                        {potential.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>
                </S.ListBox>
            </S.Wrapper>
        </>
    )
}
