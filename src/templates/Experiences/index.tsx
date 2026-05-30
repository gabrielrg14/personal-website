import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import { Blackboard } from "components"
import { TimelineExperiences } from "./sub-components"

export const ExperiencesTemplate = () => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <Blackboard>
                <TimelineExperiences />
            </Blackboard>
        </>
    )
}
