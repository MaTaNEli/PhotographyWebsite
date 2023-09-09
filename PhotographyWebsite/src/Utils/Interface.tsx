// d

interface prod_companies {
  "id": number,
  "logo_path": string,
  "name": string,
  "origin_country": string
}

interface prod_countries {
  "iso_3166_1": string,
  "name": string,
}

export interface genres_obj {
  "id": number,
  "name": string,
}
interface spoken_lng_obg {
  "spoken_languages": string,
  "iso_639_1": string,
  "name": string,
}

export interface movieInterFace {
  "adult": boolean,
  "backdrop_path": string,
  "belongs_to_collection"?:object,
  "budget": number,
  "genres": Array<genres_obj>,
  "homepage": string,
  "id": number,
  "imdb_id": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "production_companies"?: Array<prod_companies>,
  "production_countries": Array<prod_countries>,
  "release_date": string,
  "revenue": number,
  "runtime": number,
  "spoken_languages": Array<spoken_lng_obg>,
  "status":string,
  "tagline": string,
  "title":string,
  "video": false,
  "vote_average": number,
  "vote_count": number
}