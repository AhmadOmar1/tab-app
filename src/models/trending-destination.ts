export interface City {
    id?:number,
    name:string, 
    description:string,
}
export interface TrendingDestination extends City {
    thumbnailUrl: string;
}
