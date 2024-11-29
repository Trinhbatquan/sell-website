import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PageState } from "./page.slice";

export const pagePersistConfig: PersistConfig<PageState> = {
  key: "page",
  storage,
};
