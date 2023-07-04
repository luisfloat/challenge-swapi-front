import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./style.css";
import Home from "./views/Home";
import SingleMovie from "./views/SingleMovie";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<SingleMovie />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
