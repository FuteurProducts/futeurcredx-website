import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Business from "./pages/Business";
import Enterprise from "./pages/Enterprise";
import Fintech from "./pages/Fintech";
import ApiDocs from "./pages/ApiDocs";
import LumiqBuild from "./pages/LumiqBuild";
import LumiqAI from "./pages/LumiqAI";
import CreditJourney from "./pages/CreditJourney";
import MobileApp from "./pages/MobileApp";
import FuteurCredXApp from "./pages/FuteurCredXApp";
import AuditBusinessCredit from "./pages/AuditBusinessCredit";
import App from "./pages/App";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import FuteurHeader from "./pages/Header";
import Footer from "./pages/Footer";
import ConsumerSolution from "./pages/solutions/ConsumerSolution";
import FintechSolution from "./pages/solutions/FintechSolution";
import InstitutionSolution from "./pages/solutions/InstitutionSolution";
import PartnerEcosystem from "./pages/partners/PartnerEcosystem";
import TechnologyPartners from "./pages/partners/TechnologyPartners";
import LumiqTutorial from "./pages/partners/LumiqTutorial";
import FintechCaseStudy from "./pages/partners/FintechCaseStudy";
import AboutUs from "./pages/company/AboutUs";
import ContactUs from "./pages/ContactUs";
import ContactSales from "./pages/ContactSales";
import RequestDemo from "./pages/RequestDemo";
import Legal from "./pages/legal/Legal";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import DataProcessing from "./pages/legal/DataProcessing";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GLBACompliance from "./pages/legal/GLBACompliance";
import AcceptableUse from "./pages/legal/AcceptableUse";
import SupportHub from "./pages/SupportHub";
import SystemStatus from "./pages/SystemStatus";
import WebSDKIntegration from "./pages/support/WebSDKIntegration";
import APIAuthentication from "./pages/support/APIAuthentication";
import WebhooksSetup from "./pages/support/WebhooksSetup";
import ErrorHandling from "./pages/support/ErrorHandling";
import FSRScoreOverview from "./pages/support/FSRScoreOverview";
import IntelliscorePlus from "./pages/support/IntelliscorePlus";
import TradelineAnalysis from "./pages/support/TradelineAnalysis";
import PaymentInsights from "./pages/support/PaymentInsights";
import LaunchChecklist from "./pages/support/LaunchChecklist";
import DashboardGuide from "./pages/support/DashboardGuide";
import DataFreshness from "./pages/support/DataFreshness";
const queryClient = new QueryClient();

const AppRouter = () => {
  // Check the hostname to determine if we need to redirect
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Get URL parameters for local development testing
  const urlParams = new URLSearchParams(window.location.search);
  const testMode = urlParams.get('mode');
  
  // Detect subdomain routing
  const isDomainInstitutions = hostname === 'institutions.futeurcredx.com' || hostname === 'institutions.credbyfuteur.com' || (isLocalhost && testMode === 'institutions');
  const isDomainPlatform = hostname === 'platform.futeurcredx.com' || hostname === 'platform.credbyfuteur.com' || (isLocalhost && testMode === 'platform');

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FuteurHeader />
        <div className="pt-[56px] md:pt-[96px]"> {/* Account for unified black header - smaller on mobile */}
          <Routes>
          {/* Domain-specific routing */}
          {isDomainInstitutions ? (
            // For institutions.credbyfuteur.com, show Enterprise content for all routes
            <>
              <Route path="/*" element={<Enterprise />} />
            </>
          ) : isDomainPlatform ? (
            // For platform.credbyfuteur.com, show Fintech content for all routes
            <>
              <Route path="/*" element={<Fintech />} />
            </>
          ) : (
            // Regular routing for main domain
            <>
              <Route path="/" element={<Index />} />
              <Route path="/mobile-app" element={<MobileApp />} />
              <Route path="/futeurcredx-app" element={<FuteurCredXApp />} />
              <Route path="/audit/business-credit" element={<AuditBusinessCredit />} />
              <Route path="/business" element={<Business />} />
              <Route path="/fintech" element={<Fintech />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/lumiq-build" element={<LumiqBuild />} />
              <Route path="/lumiq-ai" element={<LumiqAI />} />
              <Route path="/solutions/consumers" element={<ConsumerSolution />} />
              <Route path="/solutions/fintechs" element={<FintechSolution />} />
              <Route path="/solutions/institutions" element={<InstitutionSolution />} />
              <Route path="/credit-journey" element={<CreditJourney />} />
              <Route path="/partners/ecosystem" element={<PartnerEcosystem />} />
              <Route path="/partners/technology" element={<TechnologyPartners />} />
              <Route path="/partners/lumiq-tutorial" element={<LumiqTutorial />} />
              <Route path="/partners/fintech-case-study" element={<FintechCaseStudy />} />
              <Route path="/company/about" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/contact-sales" element={<ContactSales />} />
              <Route path="/request-demo" element={<RequestDemo />} />
              <Route path="/app" element={<App />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-of-service" element={<TermsOfService />} />
              <Route path="/legal/data-processing" element={<DataProcessing />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/glba-compliance" element={<GLBACompliance />} />
              <Route path="/legal/acceptable-use" element={<AcceptableUse />} />
              <Route path="/support" element={<SupportHub />} />
              <Route path="/support/web-sdk" element={<WebSDKIntegration />} />
              <Route path="/support/api-authentication" element={<APIAuthentication />} />
              <Route path="/support/webhooks-setup" element={<WebhooksSetup />} />
              <Route path="/support/error-handling" element={<ErrorHandling />} />
              <Route path="/support/fsr-score" element={<FSRScoreOverview />} />
              <Route path="/support/intelliscore-plus" element={<IntelliscorePlus />} />
              <Route path="/support/tradeline-analysis" element={<TradelineAnalysis />} />
              <Route path="/support/payment-insights" element={<PaymentInsights />} />
              <Route path="/support/launch-checklist" element={<LaunchChecklist />} />
              <Route path="/support/dashboard-guide" element={<DashboardGuide />} />
              <Route path="/support/data-freshness" element={<DataFreshness />} />
              <Route path="/status" element={<SystemStatus />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default AppRouter;
