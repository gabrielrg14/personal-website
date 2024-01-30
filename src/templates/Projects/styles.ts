import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { Blackboard } from "components"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Projects = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;

    ${media.lessThan("tablet")`
        grid-template-columns: 1fr;
    `}
`

export const Project = styled("li")`
    display: flex;
    flex-direction: column;
`

export const StyledBlackboard = styled(Blackboard)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem;
    text-align: center;
`

export const Title = styled.h2`
    font-size: 2.4rem;
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
`

export const IconLink = styled("li")`
    ${StyledIconBase} {
        width: 2.8rem;
        transition: color 0.5s ease-out;

        :hover {
            color: #18a330;
        }
    }
`

export const Description = styled.span`
    font-size: 1.7rem;
    line-height: 2rem;
`
