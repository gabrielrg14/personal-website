import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { Blackboard, TechList } from "components"
import {
    knownTechs,
    knowledgeTechs,
    studyingTechs,
    potentialTechs
} from "utils"

export const SkillsTemplate = () => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <Blackboard>
                <S.Wrapper>
                    <S.ListBox>
                        <S.TitleList>Main technologies I master</S.TitleList>
                        <TechList list={knownTechs} />
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>Other technologies I've tried</S.TitleList>
                        <TechList list={knowledgeTechs} />
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>I'm studying right now</S.TitleList>
                        <TechList list={studyingTechs} />
                    </S.ListBox>

                    <S.ListBox>
                        <S.TitleList>I plan to study next</S.TitleList>
                        <TechList list={potentialTechs} />
                    </S.ListBox>
                </S.Wrapper>
            </Blackboard>
        </>
    )
}
