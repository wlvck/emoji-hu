interface Favourites {
    name: string;
    category: string;
    group: string;
    htmlCode: string[];
    unicode: string[];
}

export type ServiceStore = {
    favourites: Favourites[]
}