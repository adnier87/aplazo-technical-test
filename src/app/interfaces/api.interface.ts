export interface Info {
    count: number;
    pages: number;
    next: number;
    prev?: any;
}

export interface Location {
    id: string;
    name: string;
}

export interface Episode {
    id: string;
    episode: string;
}

export interface Result {
    id: string;
    name: string;
    image: string;
    location: Location;
    episode: Episode[];
}

export interface Characters {
    info: Info;
    results: Result[];
}

export interface CharactersResponse {
    data: Characters;
}