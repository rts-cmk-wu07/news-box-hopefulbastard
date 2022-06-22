import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Articlelist from "./components/articlelist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPalette,
  faHeart,
  faDumbbell,
  faSuitcase,
  faPlane,
} from "@fortawesome/fontawesome-free-solid";
import Search from "./components/search";

const Frontpage = () => {
  const artstitleicon = faPalette;
  const sportstitleicon = faDumbbell;
  const businesstitleicon = faSuitcase;
  const healthtitleicon = faHeart;
  const traveltitleicon = faPlane;

  const [isartsActive, setartsActive] = useState(() => {
    const ArtsData = localStorage.getItem("isartsActive");
    return ArtsData ? JSON.parse(ArtsData) : [];
  });

  const [isartsSectionActive, setartsSectionActive] = useState(false);

  function artssection() {
    setartsSectionActive(!isartsSectionActive);
  }

  const [ishealthActive, sethealthActive] = useState(() => {
    const HealthData = localStorage.getItem("ishealthActive");
    return HealthData ? JSON.parse(HealthData) : [];
  });

  const [ishealthSectionActive, sethealthSectionActive] = useState(false);

  function healthsection() {
    sethealthSectionActive(!ishealthSectionActive);
  }

  const [issportsActive, setsportsActive] = useState(() => {
    const SportsData = localStorage.getItem("issportsActive");
    return SportsData ? JSON.parse(SportsData) : [];
  });

  const [issportsSectionActive, setsportsSectionActive] = useState(false);

  function sportssection() {
    setsportsSectionActive(!issportsSectionActive);
  }

  const [isbusinessActive, setbusinessActive] = useState(() => {
    const BusinessData = localStorage.getItem("isbusinessActive");
    return BusinessData ? JSON.parse(BusinessData) : [];
  });

  const [isbusinessSectionActive, setbusinessSectionActive] = useState(false);

  function businesssection() {
    setbusinessSectionActive(!isbusinessSectionActive);
  }

  const [istravelActive, settravelActive] = useState(() => {
    const TravelData = localStorage.getItem("istravelActive");
    return TravelData ? JSON.parse(TravelData) : [];
  });

  const [istravelSectionActive, settravelSectionActive] = useState(false);

  function travelsection() {
    settravelSectionActive(!istravelSectionActive);
  }

  return (
    <div>
      <Navbar />
      <Search />
      <Articlelist section={`arts`} /*icon={faPalette}*/ />
      <Articlelist section={`health`} /*icon={faHeart}*/ />
      <Articlelist section={`sports`} /*icon={faDumbbell}*/ />
      <Articlelist section={`business`} /*icon={faSuitcase}*/ />
      <Articlelist section={`travel`} /*icon={faPlane}*/ />
    </div>
  );
};

export default Frontpage;
