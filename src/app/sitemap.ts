import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.emkaydev.me",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        }
    ]
}