export interface BaseCity {
    id?:number,
    description?:string,
}
export interface City extends BaseCity {
    name:string, 
}
export interface TrendingDestination extends BaseCity {
    thumbnailUrl: string;
    cityName: string;
    countryName: string;
}


