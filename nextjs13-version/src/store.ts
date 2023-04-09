import { atom, useAtom, useAtomValue } from "jotai";

const colorAtom = atom("green");

const cartAtom = atom<{ name: string; thumbnail: string }[]>([]);

const combinationsAtom = atom<
  Promise<
    {
      name: string;
      thumbnail: string;
    }[]
  >
>(async (get) => {
  const color = get(colorAtom);
  const req = await fetch(`/combinations/${color}`);
  return await req.json();
});

export const useColor = () => useAtom(colorAtom);

export const useCart = () => useAtom(cartAtom);

export const useCombinations = () => useAtomValue(combinationsAtom);
