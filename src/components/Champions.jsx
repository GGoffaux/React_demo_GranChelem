import { GS_SUMMARYDATA } from "../data.js";
import { GS_2024_data } from "../data.js";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

import { useState } from "react";

function Champions() {
  
  const [tournament, setTournament] = useState("Select");

  function handleTournament(selectedTournament) {
    setTournament(selectedTournament);
  }

  let tabContent = (
    <div id="tab-content">
      <p>Please select a tournament</p>
    </div>
  );

  if (tournament != "Select") {
    tabContent = (
      <div id="tab-content">
        <p> {GS_2024_data[tournament].title} </p>
        <ul>
          <li>Date : {GS_2024_data[tournament].dates} </li>
          <li>Men's singles : {GS_2024_data[tournament].menSingles}</li>
          <li>Women's singles : {GS_2024_data[tournament].womenSingles}</li>
        </ul>
      </div>
    );
  }

  return (
    <Section id="examples">
      <Tabs
        buttons={
          <>
            {GS_SUMMARYDATA.map((item) => (
            <TabButton
              isSelected={item.code === tournament}
              onClick={() => handleTournament(item.code)}
              key={item.title}
            >
              {item.title}
            </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Champions;
