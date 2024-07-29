import { MetadataRoute } from 'next'

const paths = ["/", "/hvem-er-vi", "/kurs", "paamelding-kontakt"]

export default function sitemap(): MetadataRoute.Sitemap {
    return paths.map(path => {
        return {
            url: process.env.APP_URL + path,
            changeFrequency: 'monthly',
        }
    })  
}