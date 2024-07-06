type ResultItem = {
    id: string;
    name: string;
    url: string;
}
export type Pokedex = {
    count: number;
    next: string;
    previous: string | null;
    results: Array<ResultItem>
}
