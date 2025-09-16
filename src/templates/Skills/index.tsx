import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

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
            <NextSeo {...pageSeo} />

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
                        <S.TitleList>Other technologies I've tried</S.TitleList>
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
                        <S.TitleList>I'm studying right now</S.TitleList>
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
