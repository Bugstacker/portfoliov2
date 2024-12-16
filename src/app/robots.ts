import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: '/',
            disallow: '/admin/',
            userAgent: ['*'],
        },
        sitemap: `https://kennethmatovu.vercel.app/sitemap.xml`,
    }
}