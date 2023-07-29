import { useEffect, useState } from "react";
import { getData } from "../API/getData";
import { ClipType } from "../types/ClipType";
import { Searchtype } from "../types/SearchType";
import { SubmitHandler } from "react-hook-form";

export const useSearch = () => {
    const [clips, setClips] = useState<ClipType[]>([] as ClipType[]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const defaultSearch: Searchtype = {
        game: "VALORANT",
        limit: 10,
        tags: [],
        filter: "ALL_TIME",
        languages: ["EN"],
    };


    const onSubmit: SubmitHandler<Searchtype> = async (values) => {
        setLoading(true);
        const { data } = await getData(values);
        setLoading(false);
        setClips(await data);
    };


    useEffect(() => {
        onSubmit(defaultSearch);
        // eslint-disable-next-line
    }, []);




    return { isLoading, clips, setLoading, setClips, onSubmit }
}


