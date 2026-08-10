export interface Project {
    title:       string;
    description: string;
    highlight?:  string;
    url:         string;
    image:       string;
    language:    string[];
    framework:   string[];
    database:    string[];
    github:      string;
    clone: boolean;
}


export type ItemDescription = string | string[];
export interface Item {
    item_title: string;
    item_description: ItemDescription;
}

export interface AboutItem {
    title: string;
    content: string;
}

export interface WhatsNewItem {
    version: string;
    description: string;
    current: boolean;
}

export interface InfoRow {
    key: string;
    value: string;
}

export const SUPPORTED_LOCALES = ['ko', 'ja', 'en'] as const
export type Locale = 'ko' | 'ja' | 'en'