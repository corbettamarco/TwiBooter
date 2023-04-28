from data import data_obj,filters
from functions import get_clips


clips = get_clips("valorant",3,[],filters.LAST_DAY.name)


print(clips)

