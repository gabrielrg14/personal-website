import styled from "styled-components"

import { StyledIconBase, StyledIconProps } from "@styled-icons/styled-icon"

type IconProps = StyledIconProps & {
    size?: number
}

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--default-size);
    padding: var(--default-size);
    width: 10rem;
    font-size: var(--md-size);
`

export const Icon = styled.div<IconProps>`
    ${StyledIconBase} {
        color: var(--highlight-color);
        width: ${({ size }) => (size ? `${size / 10}rem` : "4rem")};
    }
`
