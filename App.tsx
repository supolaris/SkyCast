import MyNativeStack from "./src/components/navigations/nativeStack/nativeStack";
import AuthContextProvider from "./src/components/utilities/useContext/useContext";


function App() {
  return (
    <AuthContextProvider>
      <MyNativeStack />
    </AuthContextProvider>
  );
};

export default App;
