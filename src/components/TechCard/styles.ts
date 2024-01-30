import styled from "styled-components"

import { StyledIconBase, StyledIconProps } from "@styled-icons/styled-icon"

type IconProps = StyledIconProps & {
    size?: number
}

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem;
    width: 10rem;
    font-size: 1.9rem;
`

export const Icon = styled.div<IconProps>`
    ${StyledIconBase} {
        color: #18a330;
        width: ${({ size }) => (size ? `${size / 10}rem` : "4rem")};
    }
`
