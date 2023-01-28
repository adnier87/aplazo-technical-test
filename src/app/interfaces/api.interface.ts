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

export interface IResultData {
    characters : ICharactersData
}

export interface ICharactersResponse {
    data: IResultData;
}

export interface ICharacterData {
    character: ICharacter
}

export interface ICharacterResponse {
    data: ICharacterData
}
