import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useSidebarStore = create(
  subscribeWithSelector(() => ({ isShowed: false }))
);
