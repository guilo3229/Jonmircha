

const NAME = "css-tricks",
 DOMAIN = `https://${NAME}.com`,
 SITE = `${DOMAIN}/wp-json`,
 API_WP = `${SITE}/wp/v2`,
 PER_PAGE =11,
 POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
 POST = `${API_WP}/posts`,
 CATEGORIES = `${API_WP}/categories`,
 SEARCH =`${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

// la varaible page cuando cambiamos de vista es decir de la seccion de busqueda a home o a contacto debera volvaer a 1
 let page = 1;
//  lo exportaremos en un objeto
export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    page,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH
}