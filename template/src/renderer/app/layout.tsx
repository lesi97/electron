import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import "./index.css";
import * as Page from "./pages";

function App() {
  return (
    <HashRouter>
      <main className="p-4 flex-1 bg-base-200 h-screen" id="main">
        <div className="bg-base-100 rounded h-full max-h-full overflow-hidden w-full p-8 flex flex-col gap-4 text-primary-content items-center justify-center">
          <Routes>
            <Route path="/" element={<Page.Home />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
