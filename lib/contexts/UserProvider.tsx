'use client'
import React, { useContext, useState } from "react";
interface UserProviderType {
    user: string | undefined,
    setUser: React.Dispatch<React.SetStateAction<string>> | undefined
}
const UserContext = React.createContext<UserProviderType>({ user: undefined, setUser: undefined })
export const useUserContext = () => {
    return useContext(UserContext)
}
export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState('')
    const values = { user, setUser }
    return (
        <>
            <UserContext.Provider value={values}>
                {children}
            </UserContext.Provider>
        </>
    )
}
