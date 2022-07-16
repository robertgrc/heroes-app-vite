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
            <Route path="/" element={<Navigate to="/marvel" />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero" element={<HeroScreen />} />

        </Routes>
    </>
  )
}
