import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PublishArticle from "./Pages/Publish";
import Journal from "./Pages/Journal";
import Archive from "./pages/Archive";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publish" element={<PublishArticle />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/archive" element={<Archive />} />
        <Route
          path="/professional-nursing-journal"
          element={<ProfessionalJournal />}
        />
        <Route path="/ijmri" element={<InnovationJournal />} />
        <Route path="/ijanr" element={<NursingJournal />} />
        <Route path="/irjmpch" element={<Multidisciplinary />} />
        <Route path="/wji" element={<WellspringJournal />} />
        <Route path="/irjpch" element={<CommunityJournal />} />
        <Route path="/inf" element={<InternationalNursingFoundation />} />
        <Route path="/nml" element={<League />} />
        <Route path="/research" element={<Research />} />

        <Route path="/health" element={<HealthInstitute />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
