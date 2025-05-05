import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PublishArticle from "./Pages/Publish";
import Journal from "./Pages/Journal";
import Institute from "./Pages/Institute";
import Archive from "./Pages/Archive";
import ProfessionalJournal from "./Pages/journals/Professional";
import InnovationJournal from "./Pages/journals/Innovation";
import NursingJournal from "./Pages/journals/Nursing";
import WellspringJournal from "./Pages/journals/Wellspring";
import CommunityJournal from "./Pages/journals/Community";
import League from "./Pages/institute/League";
import InternationalNursingFoundation from "./Pages/institute/Foundation";
import HealthInstitute from "./Pages/institute/Health";
import Research from "./Pages/institute/Research";
import Multidisciplinary from "./Pages/journals/Multidisciplinary";
import About from "./components/About";
import Articles from "./Pages/Articles";
import SpecialtyCommunityJournal from "./Pages/journals/SpecialtyJournalCommunity";
import SpecialtyNursingJournal from "./Pages/journals/SpecialtyJournalNursing";
import Agriculture from "./Pages/institute/Agriculture";
import JANI from "./Pages/institute/Jani";
import IntegratedHealth from "./Pages/institute/IntegratedHealth";
import CommonwealthPage from "./Pages/institute/Commonwealth";
import ISJCHNR from "./Pages/journals/Isjchnr"
import NursingAcademy from "./Pages/institute/NursingAcademy";
import Maurice from "./Pages/institute/Maurice";
import CONE from "./Pages/institute/Cone";
import MentalHealthJournal from "./Pages/journals/MentalHealth";
import ClinicalNursingJournal from "./Pages/journals/ClinicalNursingJournal";
import MedicalSurgicalNursingJournal from "./Pages/journals/MedicalSurgical";
import MaternalChildJournal from "./Pages/journals/MaternalJournal";
import NSUNProfilePage from "./Pages/journals/Nsu";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<PublishArticle />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/archive" element={<Archive />} />
        <Route
          path="/professional-nursing-journal"
          element={<ProfessionalJournal />}
        />
        <Route
          path="/Isjmpnr"
          element={<MentalHealthJournal />}
        />
        <Route
          path="/nsu"
          element={<NSUNProfilePage />}
        />
        <Route
          path="/ijacn"
          element={<ClinicalNursingJournal />}
        />
         <Route
          path="/msnr"
          element={<MedicalSurgicalNursingJournal />}
        />
        <Route
          path="/mchnr"
          element={<MaternalChildJournal  />}
        />
        <Route path="/jani" element={<JANI />} />
        <Route path="/commonwealth" element={<CommonwealthPage />} />
        <Route path="/cne" element={<CONE />} />
        <Route path="/nan" element={<NursingAcademy />} />
        <Route path="/ihcns" element={<IntegratedHealth />} />
        <Route path="/ijmri" element={<InnovationJournal />} />
        <Route path="/ijanr" element={<NursingJournal />} />
        <Route path="/irjmpch" element={<Multidisciplinary />} />
        <Route path="/wjwihpr" element={<WellspringJournal />} />
        <Route path="/irjpch" element={<CommunityJournal />} />
        <Route path="/isjchnr" element={<ISJCHNR />} />
        <Route path="/inf" element={<InternationalNursingFoundation />} />
        <Route path="/nml" element={<League />} />
        <Route path="/nmc" element={<Maurice />} />
        <Route path="/research" element={<Research />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route
          path="/isjpchnr"
          element={<SpecialtyCommunityJournal />}
        />
        <Route
          path="/isjner"
          element={<SpecialtyNursingJournal />}
        />
        <Route path="/health" element={<HealthInstitute />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
