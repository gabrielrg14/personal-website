import type { IConfig } from "next-sitemap"

const config: IConfig = {
    siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    generateRobotsTxt: true,
    generateIndexSitemap: false
}

export default config
