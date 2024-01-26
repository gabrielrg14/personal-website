import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Projects = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    ${media.lessThan("tablet")`
        grid-template-columns: 1fr;
    `}
`

export const Project = styled("li")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1rem;
    background-color: #161817;
    border-radius: 1rem;
    border: 1px solid #18a330;
    padding: 1rem;
`

export const Title = styled.h2`
    font-size: 1.5rem;
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
`

export const IconLink = styled(Link)`
    ${StyledIconBase} {
        color: #f7fcfe;
        width: 1.75rem;
        transition: color 0.5s ease-out;

        :hover {
            color: #18a330;
        }
    }
`

export const Description = styled.span`
    font-size: 1.1rem;
    line-height: 1.25rem;
`
