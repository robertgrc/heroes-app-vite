import { Navigate, Routes, Route} from "react-router-dom";
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, HeroScreen, SearchScreen} from "../";


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            
            {/*search, hero by id*/}
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero/:id" element={<HeroScreen />} />

            <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
    </>
  )
}
