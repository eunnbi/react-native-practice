import React, { createContext, useState } from "react";

interface PromptValue {
  visible: boolean;
  title: string;
  value: string;
}

export const promptStateContext = createContext({
  visible: false,
  title: "",
  value: "",
});

export const promptDispatchContext = createContext({
  showPrompt: () => {},
  closePrompt: () => {},
  setPromptValues: (title: string, desc: string, value: string) => {},
  onChangeText: (value: string) => {},
});

const reducer = (state: PromptValue, action: any) => {};

const PromptProvider = ({ children }: { children: React.ReactNode }) => {
  const [promptState, setPromptState] = useState({
    visible: false,
    title: "",
    value: "",
    desc: "",
  });

  const showPrompt = () => {
    setPromptState((state) => ({
      ...state,
      visible: true,
    }));
  };

  const closePrompt = () => {
    setPromptState((state) => ({
      ...state,
      visible: false,
    }));
  };

  const setPromptValues = (
    title: string,
    desc: string = "",
    value: string = ""
  ) => {
    setPromptState((state) => ({
      ...state,
      title,
      desc,
      value,
    }));
  };

  const onChangeText = (value: string) => {
    setPromptState((state) => ({
      ...state,
      value,
    }));
  };

  const value = { showPrompt, closePrompt, setPromptValues, onChangeText };

  return (
    <promptDispatchContext.Provider value={value}>
      <promptStateContext.Provider value={promptState}>
        {children}
      </promptStateContext.Provider>
    </promptDispatchContext.Provider>
  );
};

export default PromptProvider;
