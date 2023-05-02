import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
