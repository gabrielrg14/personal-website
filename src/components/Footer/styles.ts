import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { StyledIconBase } from "@styled-icons/styled-icon"

export const Footer = styled.footer``

export const Wrapper = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 0;
    font-size: 1.6rem;

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`

export const SocialMedias = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
`

export const SocialMedia = styled("li")``

export const Icon = styled.div`
    ${StyledIconBase} {
        width: 2rem;
        transition: color 0.5s ease-out;

        :hover {
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
