import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { StyledIconBase } from "@styled-icons/styled-icon"

export const Footer = styled.footer`
    background-color: #161817;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 2rem 20%;
    margin: auto;
    font-size: 1rem;

    ${media.lessThan("largeDesktop")`
        padding: 2rem 15%;
    `}

    ${media.lessThan("desktop")`
        padding: 2rem 10%;
    `}

    ${media.lessThan("tablet")`
        flex-direction: column;
        justify-content: center;
        padding: 2rem 5%;
    `}
`

export const SocialMedias = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Icon = styled.div`
    ${StyledIconBase} {
        color: #f7fcfe;
        width: 1.25rem;

        :hover {
            transition: 0.5s ease-out;
            color: #18a330;
        }
    }
`

export const Text = styled.span`
    flex: 1;

    :last-child {
        text-align: right;
    }
`

export const Copyright = styled.span`
    color: #18a330;
`
