import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { Blackboard } from "components"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Projects = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--default-size);

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
    gap: var(--default-size);
    padding: var(--default-size);
    text-align: center;
`

export const Repository = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--default-size);
`

export const Title = styled.h2`
    font-size: var(--lg-size);
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--default-size);
`

export const IconLink = styled("li")`
    ${StyledIconBase} {
        width: 2.8rem;
        transition: color 0.5s ease-out;

        :hover {
            color: var(--highlight-color);
        }
    }
`

export const Description = styled.p`
    line-height: var(--lg-size);
`
