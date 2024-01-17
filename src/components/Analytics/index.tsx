import Script from "next/script"
import { GA_TRACKING_ID } from "common"

export const Analytics = () => (
    <>
        <Script
            data-testid="gtag-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
            id="google-analytics"
            data-testid="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                    });
                `
            }}
        />
    </>
)
