export interface IHeaderLink {
    label: string
    href: string
}

export interface ISocialMedia {
    name: string
    link: string
    icon: React.ReactNode
}

export interface ITech {
    icon: React.ReactNode
    label: string
    identifier: string
}

export type TTechList = string[]

export interface ITimeline {
    title: string
    company: string
    period: string
    description: string
    skills: string[]
}
