import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Pill = styled.div`
    background-color: var(--light-color);
    color: var(--dark-color);
    border-radius: 48px;
    padding: var(--sm-size);
    width: 50%;
    animation: appear-on-screen 1.5s;

    ${media.lessThan("desktop")`
        width: 70%;
    `}

    ${media.lessThan("mobile")`
        width: 100%;
    `}
`

export const DarkPill = styled(Pill)`
    background-color: var(--dark-color);
    color: var(--light-color);
    border-top: 4px outset var(--light-color);

    :last-child {
        border-top: none;
        border-bottom: 4px inset var(--light-color);
    }
`
