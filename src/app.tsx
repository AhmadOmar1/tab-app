import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/protected-route.component"
import routes from "./routes"

function App() {
  return (
    <>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} element={route.requireAuth ? (<ProtectedRoute onlyAdmins={route.requireAdmin} component={route.element} />) : route.element} path={route.path} />
          ))
        }
      </Routes>
    </>
  )
}

export default App
