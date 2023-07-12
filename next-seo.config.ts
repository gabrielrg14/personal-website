import { DefaultSeoProps } from 'next-seo'

const siteUrl = process.env.SITE_URL || "https://personal-website-gabrielrg.vercel.app/"

const config: DefaultSeoProps = {
    titleTemplate: "<%s />",
    defaultTitle: "Gabriel - Frontend Developer",
    canonical: siteUrl,
    themeColor: "#18a330",
    additionalLinkTags: [{
        rel: "icon",
        href: "/favicon.ico"
    }, {
        rel: "shortcut icon",
        href: "images/logo/logo-512.png",
        sizes: "512x512"
    }, {
        rel: "apple-touch-icon",
        href: "images/logo/logo-512.png",
        sizes: "512x512"
    }, {
        rel: "manifest",
        href: "/manifest.json"
    }],
    additionalMetaTags: [{
        name: "google-site-verification",
        content: "11r8K6MLmUAgq8eTWLXk49GhEiZuybZx1h8kIyO6PX8"
    }, {
        name: "google",
        content: "notranslate"
    }],
    openGraph: {
        type: "website",
        locale: "en",
        url: siteUrl,
        siteName: "Gabriel Rapucci Gonzalez - Personal Website"
    }
}

export default config