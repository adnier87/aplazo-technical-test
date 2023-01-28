export interface IInfo {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
}

export interface ILocation {
    id: string;
    name: string;
}

export interface IEpisode {
    id: string;
    episode: string;
    name: string;
}

export interface ICharacter {
    id: string;
    name: string;
    image: string;
    location: ILocation;
    status: string;
    species: string;
    type: string;
    gender: string;
    episode: IEpisode[];
    origin: ILocation;
}

export interface ICharactersData {
    info: IInfo;
    results: ICharacter[];
}

export interface ICharactersResponse {
    characters : ICharactersData
}

export interface ICharacterResponse {
    character: ICharacter
}

export interface IAPIResponse {
    data : ICharactersResponse | ICharacterResponse
}
