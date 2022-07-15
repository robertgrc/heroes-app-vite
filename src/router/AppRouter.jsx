import { Navigate,Routes, Route} from "react-router-dom";
import { LoginPage } from "../auth";
import { DcPage, MarvelPage } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <Navbar>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="login" element={<LoginPage />} />
          //* si queremos que el path redirija a una pagina en este caso a marvel usamos el navigate
          <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </Navbar>
  )
}
