import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({  
    cityName: '',
})

function AuthContextProvider({children}: {children: any}) {

    const [cityName, setCityName] = useState();

    function storeCityName(city: any){
        setCityName(city)

        return cityName;
    }

    const value = {
        cityName: storeCityName
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;


//const authCtx = useContext(AuthContext);