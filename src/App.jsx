import { Route, Routes } from "react-router-dom";
import Enterprise from "./pages/Enterprise";
import Employees from "./pages/Employees";
import CRM from "./pages/CRM";
import ProjectReport from "./pages/ProjectReport";
import Messenger from "./pages/Messenger";
import InfoPortal from "./pages/InfoPortal";
import CommonLayout from "./components/CommonLayout";
import Dashboard from "./pages/Dashboard";



import Benefit from './pages/AllProjectReport/Benefits'
import ProjectOverview from './pages/AllProjectReport/ProjectOverview'
import BriefProjectDescription from './pages/AllProjectReport/BriefProjectDescription'
import FutureOutlook from './pages/AllProjectReport/FutureOutlook'
import GrowthMarket from './pages/AllProjectReport/GrowthMarket'
import NeedOfTheProject from './pages/AllProjectReport/NeedOfTheProject'
import Objective from './pages/AllProjectReport/Objective'
import Opportunities from './pages/AllProjectReport/Opportunities'
import ProjectProponent from './pages/AllProjectReport/ProjectProponent'
import Strengths from './pages/AllProjectReport/Strengths'
import TechnicalFeasibilty from './pages/AllProjectReport/TechnicalFeasibilty'
import Threats from './pages/AllProjectReport/Threats'
import Weaknesses from './pages/AllProjectReport/Weaknesses'




// crm
import Assumptions from "./pages/AllCRMPAGES/Assumptions";
import CostOfProject from "./pages/AllCRMPAGES/CostOfProject";
import MeansOfFinance from "./pages/AllCRMPAGES/MeansOfFinance";









// all crm pages


const App = () => {
  return (
    <>
      

      <Routes>

        <Route element={<CommonLayout />}>
        <Route path="/" element={<h1>Login</h1>} />

        
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/project-report" element={<ProjectReport />} />

          {/* all dropdown here */}
          <Route path="/project-overview" element={<ProjectOverview />} />
          <Route path="/benefits" element={<Benefit />} />
          <Route path="/brief-project-description" element={<BriefProjectDescription />} />
          <Route path="/future-outlook" element={<FutureOutlook />} />
          <Route path="/growth-and-market" element={<GrowthMarket />} />

          <Route path="/need-of-the-project" element={<NeedOfTheProject />} />

          <Route path="/objective" element={<Objective />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/project-proponent" element={<ProjectProponent />} />
          <Route path="/strengths" element={<Strengths />} />
          <Route path="/technical-feasibilty" element={<TechnicalFeasibilty />} />
          <Route path="/threats" element={<Threats />} />
          <Route path="/weaknesses" element={<Weaknesses />} />

          {/* </Route> */}

          {/* crm 17*/}
          <Route path="/assumptions" element={<Assumptions />} />
          <Route path="/costofproject" element={<CostOfProject />} />
          <Route path="/meansoffinance" element={<MeansOfFinance />} />
       {/*     // <Route path="/crm" element={<ProfitAndLoss />} />
          // <Route path="/crm" element={<BalanceSheet/>} />
          // <Route path="/crm" element={<IndirectExpenses />} />
          // <Route path="/crm" element={<DER />} />
          // <Route path="/crm" element={<CF/>} />
          // <Route path="/crm" element={<DSCR/>} />
          // <Route path="/crm" element={<FinancialIndicator />} />
          // <Route path="/crm" element={<CurrentRatio />} />
          // <Route path="/crm" element={<SensetivityAnalytics />} />
          // <Route path="/crm" element={<BreakEvenPoint />} />
          // <Route path="/crm" element={<ROIIRR />} />
          // <Route path="/crm" element={<EmiSechedule />} />
          // <Route path="/crm" element={<Preview />} />
          // <Route path="/crm" element={<Download />} />
          
 */}

















          <Route path="/crm" element={<CRM />} />

          <Route path="/employees" element={<Employees />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/infoportal" element={<InfoPortal />} />



        </Route>

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>

      {/* </div>
        </>
      </section> */}
    </>
  );
};

export default App;
