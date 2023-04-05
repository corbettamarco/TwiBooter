export type Searchtype = {
    game: string,
    limit: number,
    tags?: string[],
    filter: "LAST_DAY" | "LAST_WEEK" | "ALL_TIME",
    languages: string []
}