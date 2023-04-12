export type ClipType = {
    titolo: string,
    streamer: StreamerType,
    url: string, 
    durata: number,
    anteprima_clip: string,
    data_creazione: string,
    immagine_categoria: string
}

type StreamerType = {
    id : number,
    login: string,
    displayName: string,
    profileImageUrl: string
}