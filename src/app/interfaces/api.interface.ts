export interface IInfo {
    count: number;
    pages: number;
    next: number;
    prev?: any;
}

export interface ILocation {
    id: string;
    name: string;
}

export interface IEpisode {
    id: string;
    episode: string;
}

export interface IResult {
    id: string;
    name: string;
    image: string;
    location: Location;
    episode: Episode[];
}

export interface ICharacters {
    info: Info;
    results: Result[];
}

export interface ICharactersResponse {
    data: Characters;
}