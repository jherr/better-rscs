import { atom, useAtom } from "jotai";

const colorAtom = atom("green");

const cartAtom = atom<{ name: string; thumbnail: string }[]>([]);

export const useColor = () => useAtom(colorAtom);

export const useCart = () => useAtom(cartAtom);
