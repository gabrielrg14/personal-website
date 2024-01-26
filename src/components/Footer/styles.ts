import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { StyledIconBase } from "@styled-icons/styled-icon"

export const Footer = styled.footer`
    background-color: #161817;
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    font-size: 1rem;

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`

export const SocialMedias = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Icon = styled.div`
    ${StyledIconBase} {
        color: #f7fcfe;
        width: 1.25rem;
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
