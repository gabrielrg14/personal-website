interface MetaTag {
    name: string
    content: string
}

export interface IPageSeo {
    title: string
    description?: string
    additionalMetaTags?: MetaTag[]
    canonical?: string
}
