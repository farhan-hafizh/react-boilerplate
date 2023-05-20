import { Route, Routes } from "react-router-dom";

import ClientLayout from "../layouts/Authenticated"

import LandingPage from "../pages/LandingPage/";


const AllRoutes  = () => (
    <Routes>
        <Route path="/" element={<ClientLayout children={<LandingPage />}/>}/>
        <Route path="/network" element={<ClientLayout children={<LandingPage />}/>}/>
    </Routes>
)

export default AllRoutes;