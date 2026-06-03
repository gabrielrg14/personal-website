import styled from "styled-components"
import Image from "next/image"

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: var(--default-size);
    animation: appear-on-screen 1s;
`

export const Avatar = styled(Image)`
    height: 100%;
    width: 100%;
    background-color: var(--dark-color);
    border-top: 4px outset var(--light-color);
    border-left: 4px outset var(--light-color);
    border-radius: 100%;
    padding: 0.4rem;
`
