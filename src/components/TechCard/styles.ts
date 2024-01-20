import styled from "styled-components"

import { StyledIconBase } from "@styled-icons/styled-icon"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 6.25rem;
`

export const Icon = styled.div`
    ${StyledIconBase} {
        color: #18a330;
        width: 2.5rem;
    }
`
