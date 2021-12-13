import React from "react";
import {StoreType} from "./State";

export const StoreContext = React.createContext({} as StoreType)


export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}
