import React from 'react'

export const successMessageContext = React.createContext({
    successmessage: " ",
    setSuccessMessage: (message:string) => {}
  });