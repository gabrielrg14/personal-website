import styled from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Wrapper = styled("li")`
    ${StyledIconBase} {
        width: 2.8rem;
        transition: color 0.5s ease-out;

        :hover {
            color: var(--highlight-color);
        }
    }
`
