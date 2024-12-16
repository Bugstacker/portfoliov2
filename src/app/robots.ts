import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: '/',
            disallow: '/admin/',
            userAgent: ['*'],
        },
        sitemap: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/sitemap.xml`,
    }
}