from enum import Enum



class TwitchClips:
    def __init__(self, titolo, nome_streamer, url, durata, anteprima_clip, data_creazione,immagine_categoria):
        self.titolo = titolo
        self.streamer = nome_streamer
        self.url = url
        self.durata = durata
        self.anteprima_clip = anteprima_clip
        self.data_creazione = data_creazione
        self.immagine_categoria =immagine_categoria


data_obj = [   
    {
        "operationName": "ClipsCards__Game",
        "variables": {
            "gameName": "VALORANT",
            "limit": 10,
            "criteria": {
                "languages": [
                    "IT",
                    "EN"
                ],
                "filter": "LAST_DAY"
            }
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": "0d8d0eba9fc7ef77de54a7d933998e21ad7a1274c867ec565ac14ffdce77b1f9"
            }
        }
    }  
]


class filters(Enum):
    LAST_DAY = "LAST_DAY"
    LAST_WEEK = "LAST_WEEK"
    ALL_TIME = "ALL_TIME"