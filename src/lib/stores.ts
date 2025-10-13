import { create } from "zustand";
import { Project } from "./interface";

export interface Item {
      id: string,
      href: string,
      imgSrc: string,
}

interface State {
    isModalOpen: boolean,
    rotation: number,
    item: Project|undefined,
}

interface Action {
    setRotation: (value: number) => void;
    setItem: (value: Project) => void;
    setIsModalOpen: (value: boolean) => void;
}

export const useStore = create<State & Action>((set) => ({
    isModalOpen: false,
    rotation: 0,
    item: undefined,
    setRotation: (value) => set(() => ({ rotation: value })),
    setItem: (value) => set(() => ({ item: value })),
    setIsModalOpen: (isOpen) => set(()=> ({isModalOpen: isOpen}))


}))