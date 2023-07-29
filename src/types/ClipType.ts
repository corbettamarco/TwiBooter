export type ClipType = {
    title: string,
    broadcaster: BroadcasterType,
    slug: string,
    url: string, 
    duration_seconds: number,
    thumbnail_url: string,
    data_creazione: string,
    box_art_url: string,
    viewCount:string
}

type BroadcasterType = {
    id : number,
    login: string,
    displayName: string,
    profileImageURL: string
}