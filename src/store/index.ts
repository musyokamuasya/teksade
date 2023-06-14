//This file  is for global state management 
// All Context API  and State management solutions go here

import { atom } from "jotai";

export const activeThemeAtom = atom<"teksadeDark" | "teksadeLight">("teksadeDark")