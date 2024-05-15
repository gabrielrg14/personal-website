import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { StyledIconBase } from "@styled-icons/styled-icon"

export const Footer = styled.footer``

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--default-size);
    padding: var(--lg-size) 0;
    font-size: var(--default-size);

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`

export const SocialMedias = styled.ul`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--default-size);
`

export const SocialMedia = styled("li")``

export const Icon = styled.div`
    ${StyledIconBase} {
        width: 2rem;
        transition: color 0.5s ease-out;

        :hover {
            color: var(--highlight-color);
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
    color: var(--highlight-color);
`
