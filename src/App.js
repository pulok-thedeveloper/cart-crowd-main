import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import { routes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  console.log(process.env.REACT_APP_imgbb)
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
      <Toaster className="text-3xl" position="top-right"/>
    </div>
  );
}

export default App;
