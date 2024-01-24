import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Container = styled.div`
    max-width: 60vw;
    margin: auto;

    ${media.lessThan("desktop")`
        max-width: 80vw;
    `}

    ${media.lessThan("mobile")`
        max-width: 100vw;
    `}
`
