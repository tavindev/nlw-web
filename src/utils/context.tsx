import React from 'react';

export interface AppContextInterface {
  isOn: boolean,
  setIsOn: any // TODO: Change this to setState type, that I don't know btw xD
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;
