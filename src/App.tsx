import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import ProductView from "./pages/admin/ProductView";
import ProductEdit from "./pages/admin/ProductEdit";
import ProductDocument from "./pages/admin/ProductDocument";
import Schemes from "./pages/admin/Schemes";
import SchemeView from "./pages/admin/SchemeView";
import SchemeEdit from "./pages/admin/SchemeEdit";
import SchemeDocument from "./pages/admin/SchemeDocument";
import Testimonials from "./pages/admin/Testimonials";
import TestimonialView from "./pages/admin/TestimonialView";
import TestimonialEdit from "./pages/admin/TestimonialEdit";
import TestimonialDocument from "./pages/admin/TestimonialDocument";
import NewLaunches from "./pages/admin/NewLaunches";
import NewLaunchView from "./pages/admin/NewLaunchView";
import NewLaunchEdit from "./pages/admin/NewLaunchEdit";
import NewLaunchDocument from "./pages/admin/NewLaunchDocument";
import Services from "./pages/admin/Services";
import ServiceView from "./pages/admin/ServiceView";
import ServiceEdit from "./pages/admin/ServiceEdit";
import ServiceDocument from "./pages/admin/ServiceDocument";
import Enquiries from "./pages/admin/Enquiries";
import EnquiryView from "./pages/admin/EnquiryView";
import EnquiryEdit from "./pages/admin/EnquiryEdit";
import EnquiryDocument from "./pages/admin/EnquiryDocument";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductView />} />
            <Route path="products/:id/edit" element={<ProductEdit />} />
            <Route path="products/:id/document" element={<ProductDocument />} />
            <Route path="schemes" element={<Schemes />} />
            <Route path="schemes/:id" element={<SchemeView />} />
            <Route path="schemes/:id/edit" element={<SchemeEdit />} />
            <Route path="schemes/:id/document" element={<SchemeDocument />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="testimonials/:id" element={<TestimonialView />} />
            <Route path="testimonials/:id/edit" element={<TestimonialEdit />} />
            <Route path="testimonials/:id/document" element={<TestimonialDocument />} />
            <Route path="launches" element={<NewLaunches />} />
            <Route path="launches/:id" element={<NewLaunchView />} />
            <Route path="launches/:id/edit" element={<NewLaunchEdit />} />
            <Route path="launches/:id/document" element={<NewLaunchDocument />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceView />} />
            <Route path="services/:id/edit" element={<ServiceEdit />} />
            <Route path="services/:id/document" element={<ServiceDocument />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<EnquiryView />} />
            <Route path="enquiries/:id/edit" element={<EnquiryEdit />} />
            <Route path="enquiries/:id/document" element={<EnquiryDocument />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
