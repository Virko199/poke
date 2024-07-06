export type Pokemon = {
    types: Array<{
        type: {
            name: string;
        };
    }>;
    stats: Array<{
        base_stat: string;
        stat: {
            name: string;
        };
    }>;
    height: string;
    weight: string;
    name: string;
    id: string;
}