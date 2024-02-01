import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Image from "next/image"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Avatar = styled.div`
    display: flex;
`

export const AvatarImage = styled(Image)`
    height: 100%;
    width: 100%;
    background-color: var(--dark-color);
    border-top: 4px outset var(--light-color);
    border-left: 4px outset var(--light-color);
    border-radius: 100%;
    padding: 0.4rem;
    margin-bottom: var(--default-size);
    animation: appear-on-screen 1s;
`

export const PillText = styled.div`
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

export const BlackPillText = styled(PillText)`
    background-color: var(--dark-color);
    color: var(--light-color);
    border-top: 4px outset var(--light-color);

    :last-child {
        border-top: none;
        border-bottom: 4px inset var(--light-color);
    }
`

export const Name = styled.h1`
    font-size: var(--xl-size);
`

export const Bio = styled.h2`
    font-size: var(--lg-size);
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: var(--xs-size);
    margin: var(--xs-size);
`

export const Info = styled.h3`
    font-size: var(--md-size);
    line-height: var(--lg-size);
    text-overflow: ellipsis;
    overflow: hidden;
`
