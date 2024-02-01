import styled from "styled-components"

import { Blackboard } from "components"

export const Wrapper = styled(Blackboard)`
    padding: var(--lg-size);
    text-align: center;
    width: fit-content;
    margin: auto;
`

export const Error = styled.h1`
    font-size: 4.8rem;
    color: var(--highlight-color);
`

export const Info = styled.h2`
    font-size: var(--xl-size);
    margin: var(--xs-size) 0;
`

export const NoContent = styled.h3`
    font-size: var(--lg-size);
    margin: var(--default-size) 0;
`
