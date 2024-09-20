import React, { createContext, useState, useContext } from "react";

const AgentModalContext = createContext();

export const useAgentModal = () => useContext(AgentModalContext);

export const AgentModalProvider = ({ children }) => {
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  return (
    <AgentModalContext.Provider
      value={{ isAgentModalOpen, setIsAgentModalOpen }}
    >
      {children}
    </AgentModalContext.Provider>
  );
};
