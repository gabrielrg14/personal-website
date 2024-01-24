import styled from "styled-components"

import { StyledIconBase, StyledIconProps } from "@styled-icons/styled-icon"

type IconProps = StyledIconProps & {
    size?: number
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 6.25rem;
`

export const Icon = styled.div<IconProps>`
    ${StyledIconBase} {
        color: #18a330;
        width: ${(props) => (props.size ? `${props.size}px` : "2.5rem")};
    }
`
