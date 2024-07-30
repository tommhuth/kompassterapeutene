import { MetadataRoute } from 'next'

const paths = ["/", "/hvem-er-vi", "/kurs", "/paamelding-kontakt"]
export const APP_URL = "https://www.kompassterapeutene.com"

export default function sitemap(): MetadataRoute.Sitemap {
    return paths.map(path => {
        return {
            url: APP_URL + path, 
        }
    })  
}