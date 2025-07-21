export interface Project {
    title:       string;
    description: string;
    URL:         string;
    Image:       string;
    language:    string[];
    framework:   string[];
    database:    string[];
    github:      string;
}


export type ItemDescription = string | string[];
export interface Item {
    item_title: string;
    item_description: ItemDescription;
}