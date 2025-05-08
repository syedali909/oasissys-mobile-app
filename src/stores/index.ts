import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import userStore from "./user-store";

export const useAppStore = create<any>()(
    immer((...a) => ({
        ...userStore(...a)
    }))
);