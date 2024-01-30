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
    background-color: #161817;
    border-top: 4px outset #f7fcfe;
    border-left: 4px outset #f7fcfe;
    border-radius: 100%;
    padding: 0.4rem;
    margin-bottom: 1.6rem;
    animation: appear-on-screen 1s;
`

export const PillText = styled.div`
    background-color: #f7fcfe;
    color: #161817;
    border-radius: 48px;
    padding: 1.2rem;
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
    background-color: #161817;
    color: #f7fcfe;
    border-top: 4px outset #f7fcfe;

    :last-child {
        border-top: none;
        border-bottom: 4px inset #f7fcfe;
    }
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.8rem;
    margin: 0.8rem;
`

export const Info = styled.h3`
    font-size: 1.7rem;
    line-height: 2.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
`
