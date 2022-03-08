import { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userEdit, setUserEdit] = useState({
    item: {},
    edit: false,
  })

  //eventually make add / delete a provider

  const updateUser = (item) => {
    setUserEdit({
      item,
      edit: true,
    })
  }

  return (
    <UserContext.Provider
      value={{
        updateUser, //function
        userEdit, // state
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
