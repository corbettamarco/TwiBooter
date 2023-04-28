from data import filters,data_obj,TwitchClips
import requests

data=data_obj
headers = {"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}

def get_clips(game_name,limit,tags,filter=filters.LAST_DAY.name,languages=["EN","IT"]):
    clips=[]
    data[0]["variables"]["gameName"]=game_name.upper()
    data[0]["variables"]["limit"]=limit
    data[0]["variables"]["criteria"]["languages"]=languages
    data[0]["variables"]["criteria"]["filter"]=filter
    result = requests.post("https://gql.twitch.tv/gql",json=data,headers=headers)
    response_obj=result.json()[0]['data']['game']['clips']['edges']
    for obj in response_obj:
        clips.append(TwitchClips(obj['node']['title'],obj['node']['broadcaster'],obj['node']['url'],obj['node']['durationSeconds'],str(obj['node']['thumbnailURL']),obj['node']['createdAt'],obj['node']['game']['boxArtURL']))
    
    if len(tags) > 0 : 
        arr=filter_by_tags(clips,tags)
        return arr
    else:
        return clips


def filter_by_tags(arrary_clips,tags):
    arr=[]
    for clip in arrary_clips:
        for tag in tags:
            if(tag in clip.titolo):
                arr.append(clip)
    return arr




     