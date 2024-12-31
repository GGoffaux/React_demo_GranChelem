import GS_Summary from "./GS_Summary.jsx";
import { GS_SUMMARYDATA } from "../data.js";

export default function GS_4Summary(){
    return (
        <section id="core-concepts">
        <h2>These are the 4 Tournaments.</h2>
        <ul>
          {GS_SUMMARYDATA.map((item) => (
            <GS_Summary key={item.title} GS_Concept={item} />
          ))}
        </ul>
      </section>

    )
} 