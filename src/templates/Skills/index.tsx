import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { Blackboard } from "components"
import { ListSection } from "./sub-components"
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
                    <ListSection
                        title="Main technologies I master"
                        list={knownTechs}
                    />
                    <ListSection
                        title="Other technologies I've tried"
                        list={knowledgeTechs}
                    />
                    <ListSection
                        title="I'm studying right now"
                        list={studyingTechs}
                    />
                    <ListSection
                        title="I plan to study next"
                        list={potentialTechs}
                    />
                </S.Wrapper>
            </Blackboard>
        </>
    )
}
