import styled from "styled-components"
import { mediaQueries as media } from "utils"

import "react-vertical-timeline-component/style.min.css"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

export const Wrapper = styled.div`
    background-color: #161817;
    border-radius: 1rem;
    border: 1px solid #18a330;
`

export const TimelineElement = styled(VerticalTimelineElement)`
    .vertical-timeline-element-content {
        box-shadow: none;
    }

    .vertical-timeline-element-content p {
        margin: 0;
        line-height: 1.25rem;
    }

    .vertical-timeline-element-icon {
        box-shadow:
            0 0 0 4px #f7fcfe,
            inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
    }

    .vertical-timeline-element-date {
        font-size: 1.1rem !important;
        opacity: 1;
        padding: 1rem;

        ${media.lessThan("desktop")`
            padding: 1rem 0;
        `}
    }
`

export const Title = styled.h1`
    font-size: 1.5rem !important;
    color: #18a330;
`

export const Company = styled.h2`
    font-size: 1.1rem !important;
    color: #f7fcfe !important;
    margin: 0.5rem 0;
`

export const Description = styled.p`
    font-size: 1rem;
    color: #f7fcfe;
    margin: 1rem 0 0.5rem 0 !important;
`
