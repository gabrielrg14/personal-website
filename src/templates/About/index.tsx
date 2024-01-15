import { NextSeo } from "next-seo"

import * as S from "./styles"
import { IUser } from "interfaces"
import { TechList, TechCard } from "components"
import {
    knownTechs as known,
    knowledgeTechs as knowledge,
    studyingTechs as studying,
    potentialTechs as potential
} from "utils"

type AboutTemplateProps = {
    user: IUser
}

export const AboutTemplate = ({ user }: AboutTemplateProps) => {
    return (
        <>
            <NextSeo
                title="About me"
                description="A little more about who Gabriel is, the technologies he uses daily, which he has knowledge, which he is currently studying and which he intends to study in the future."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "About, About me, About Gabriel, Technologies, Used Technologies, Technologies with Knowledge, Technologies Studied"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/about`}
            />

            <S.Wrapper>
                <S.Bio>{user.bio}</S.Bio>

                <S.TechsLists>
                    <S.TitleList>Known and used technologies:</S.TitleList>
                    <TechList>
                        {known.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>

                    <S.TitleList>
                        Technologies with basic knowledge:
                    </S.TitleList>
                    <TechList>
                        {knowledge.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>

                    <S.TitleList>Technologies being studied:</S.TitleList>
                    <TechList>
                        {studying.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>

                    <S.TitleList>
                        Potential technologies to be studied:
                    </S.TitleList>
                    <TechList>
                        {potential.map(({ icon, label }) => (
                            <TechCard key={label} label={label} icon={icon} />
                        ))}
                    </TechList>
                </S.TechsLists>
            </S.Wrapper>
        </>
    )
}
