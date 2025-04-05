import ReactDOM from "react-dom/client"
import UIKitRoot from "../lib/core/root.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CarouselTestPage from "./pages/carousel/Carousel.tsx";
import "./main.css"
import LayoutTestPage from "./pages/layout/Layout.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<UIKitRoot>
    <BrowserRouter>
      <Routes>
        <Route path={"carousel"} element={<CarouselTestPage/>}/>
        <Route path={"layout"} element={<LayoutTestPage/>}/>
      </Routes>
    </BrowserRouter>
</UIKitRoot>)