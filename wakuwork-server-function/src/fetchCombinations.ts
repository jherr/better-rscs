"use server";

export const fetchCombinations = (
  color: string
): Promise<
  {
    name: string;
    thumbnail: string;
  }[]
> => fetch(`http://localhost:3000/${color}.json`).then((res) => res.json());
