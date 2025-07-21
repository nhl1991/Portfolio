import { create } from "zustand";
import { Project } from "./interface";

export interface Item {
      id: string,
      href: string,
      imgSrc: string,
}

interface State {
    rotation: number,
    item: Project|undefined,
}

interface Action {
    setRotation: (value: number) => void;
    setItem: (value: Project) => void;
}

export const useStore = create<State & Action>((set) => ({
    rotation: 0,
    item: undefined,
    setRotation: (value) => set(() => ({ rotation: value })),
    setItem: (value) => set(() => ({ item: value })),


}))