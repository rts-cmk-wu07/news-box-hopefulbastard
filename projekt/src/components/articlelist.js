import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPalette,
  faHeart,
  faDumbbell,
  faSuitcase,
  faPlane,
} from "@fortawesome/fontawesome-free-solid";
import Article from "./article";
import { useState } from "react";

const Articlelist = (props) => {
  const section = props.section;
  const icon = props.icon;

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
    <div className="index">
      <div
        className={
          "is" + `${section}` + "Active"
            ? "newscategory_active"
            : "newscategory"
        }
      >
        <div
          className={
            "is" + `${section}` + "SectionActive"
              ? "opennewscategory"
              : "closednewscategory"
          }
        >
          <div
            className={
              "is" + `${section}` + "SectionActive"
                ? "newscategory_title"
                : "closednewscategory_title"
            }
            onClick={`${section}` + section}
          >
            <FontAwesomeIcon
              icon={{ icon }}
              className="fontawesome_titleicon"
            />
            <h2 className="articlelist_h2">{section}</h2>
            <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
          </div>
          <Article section={section} />
        </div>
      </div>
    </div>
  );
};

export default Articlelist;
