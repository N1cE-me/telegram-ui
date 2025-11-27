import type { MaybeRefOrGetter } from "vue";
import { createContext } from "./createContext";

export interface AppRootContextInterface {
	platform?: MaybeRefOrGetter<"base" | "ios">;
	appearance?: MaybeRefOrGetter<"light" | "dark">;
}

export const [useAppRootContext, setAppRootContext] = createContext<AppRootContextInterface>("AppRoot");
