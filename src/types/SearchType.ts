export type Searchtype = {
    game: string,
    limit: 10 | 20 | 30,
    tags?: string[],
    filter: "LAST_DAY" | "LAST_WEEK" | "ALL_TIME",
    languages: string []
}