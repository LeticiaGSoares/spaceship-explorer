const NASA_IMG_API_URL = "https://images-api.nasa.gov/search?media_type=image&"
const SOLAR_SYSTEM_API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
const SPACEFLIGHT_NEWS_API_URL = "https://api.spaceflightnewsapi.net/v4/articles"

export async function get(api, route) {
    switch (api) {
        case (`nasa-gallery`):
            return fetch(NASA_IMG_API_URL + route)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`Network Erro! Code: `, res.status)
                    }
                    return res.json()
                });
        case (`solar-system`):
            return fetch(SOLAR_SYSTEM_API_URL + route).then((res) => {
                if (!res.ok) {
                    throw new Error(`Network Erro! Code: `, res.status)
                }
                return res.json()
            });
        case (`space-news`):
            return fetch(SPACEFLIGHT_NEWS_API_URL + route).then((res) => {
                if (!res.ok) {
                    throw new Error(`Network Erro! Code: `, res.status)
                }
                return res.json()
            });
    }
}




