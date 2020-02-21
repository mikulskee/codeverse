import React, { createContext, useState } from "react";
export const BurgerContext = createContext();

const PlayersContextProvider = props => {
  const [isOpen, setIsOpen] = useState("closed");

  return (
    <BurgerContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default PlayersContextProvider;
