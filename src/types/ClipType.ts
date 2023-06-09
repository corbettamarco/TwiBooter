export type ClipType = {
    titolo: string,
    streamer: StreamerType,
    slug: string,
    url: string, 
    durata: number,
    anteprima_clip: string,
    data_creazione: string,
    immagine_categoria: string,
    visualizzazioni:string
}

type StreamerType = {
    id : number,
    login: string,
    displayName: string,
    profileImageURL: string
}