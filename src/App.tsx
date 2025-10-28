import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechnicalBlogsSection from "./components/TechnicalBlogsSection";
import BlogPage from "./pages/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ Main website route */}
          <Route path="/" element={<Index />} />

          {/* ✅ Blog routes */}
          <Route path="/blogs" element={<TechnicalBlogsSection />} />
          <Route path="/blog/:slug" element={<BlogPage />} /> {/* ✅ fixed here */}

          {/* ✅ Catch-all route (must be last) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
