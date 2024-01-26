import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Image from "next/image"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto 0;
`

export const Avatar = styled.div`
    display: flex;
`

export const AvatarImage = styled(Image)`
    height: 100%;
    width: 100%;
    background-color: #161817;
    border-top: 0.25rem outset #f7fcfe;
    border-left: 0.25rem outset #f7fcfe;
    border-radius: 100%;
    padding: 0.25rem;
    margin-bottom: 1rem;
    animation: appear-on-screen 1s;
`

export const PillText = styled.div`
    background-color: #f7fcfe;
    color: #161817;
    border-radius: 3rem;
    padding: 0.75rem;
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
    border-top: 0.25rem outset #f7fcfe;

    :last-child {
        border-top: none;
        border-bottom: 0.25rem inset #f7fcfe;
    }
`

export const InfoRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    margin: 0.5rem;
`

export const Info = styled.h3`
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
`
