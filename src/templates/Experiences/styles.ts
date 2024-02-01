import styled from "styled-components"
import { mediaQueries as media } from "utils"

import "react-vertical-timeline-component/style.min.css"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

export const TimelineElement = styled(VerticalTimelineElement)`
    .vertical-timeline-element-content {
        box-shadow: none;
    }

    .vertical-timeline-element-content p {
        margin: 0;
        font-size: var(--default-size) !important;
        line-height: var(--lg-size);
    }

    .vertical-timeline-element-icon {
        box-shadow:
            0 0 0 4px var(--light-color),
            inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
    }

    .vertical-timeline-element-date {
        font-size: var(--default-size) !important;
        opacity: 1;
        padding: var(--default-size);

        ${media.lessThan("desktop")`
            padding: var(--default-size) 0;
        `}
    }
`

export const Title = styled.h1`
    font-size: var(--lg-size) !important;
    color: var(--highlight-color);
`

export const Company = styled.h2`
    font-size: var(--md-size) !important;
    color: var(--light-color) !important;
    margin: var(--xs-size) 0;
`

export const Description = styled.p`
    margin: var(--default-size) 0 var(--xs-size) 0 !important;
`
