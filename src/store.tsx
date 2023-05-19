import React, { createContext, useState } from "react";

interface globalState {
  lng: string;
  setLng: React.Dispatch<React.SetStateAction<string>>;
}
const StoreContext = createContext<globalState | null>(null);

const StoreProvider = (props: any) => {
  const [lng, setLng] = useState<string>("en");

  return (
    <StoreContext.Provider value={{ lng, setLng }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
