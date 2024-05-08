import { ReactNode, createContext, useContext, useState } from "react";

export const AuthContext = createContext({  
    cityName: '',
    storeCityName: (city:string) => {}
})

function AuthContextProvider({children}: {children: ReactNode}) {

    const [cityNameState, setCityNameState] = useState<string>();

    function storeCityName(city: string){
        setCityNameState(city)
    
    }

    const value = {
        cityName: cityNameState,
        storeCityName: storeCityName
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;


//const authCtx = useContext(AuthContext);