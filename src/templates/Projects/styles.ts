import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { Blackboard as BlackboardComponent } from "components"

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--default-size);

    ${media.lessThan("tablet")`
        grid-template-columns: 1fr;
    `}
`

export const Repository = styled("li")`
    display: flex;
    flex-direction: column;
`

export const Blackboard = styled(BlackboardComponent)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--default-size);
    padding: var(--default-size);
    text-align: center;
`
