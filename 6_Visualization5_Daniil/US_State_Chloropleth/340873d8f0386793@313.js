import define1 from "./7a9e12f9fb3d8e06@498.js";
import define2 from "./2695158caff5fb0c@595.js";

function _1(md){return(
md`# U.S. State Choropleth - Toxicity Across States`
)}

function _key(Legend,chart){return(
Legend(chart.scales.color, {title: "average toxicity"})
)}

function _chart(UsStateChoropleth,toxicity,namemap,d3){return(
UsStateChoropleth(toxicity, {
  id: d => namemap.get(d.name),
  value: d => d.rate,
  scale: d3.scaleQuantize,
  domain: [0, 24],
  range: d3.schemeBlues[6],
  title: (f, d) => `${f.properties.name}\n${d?.rate}%`
})
)}

function _toxicity(FileAttachment){return(
FileAttachment("us_states_toxicity.csv").csv({typed: true})
)}

function _namemap(states){return(
new Map(states.features.map(d => [d.properties.name, d.id]))
)}

function _6(md){return(
md`The UsStateChoropleth component wraps the generic [D3 Choropleth](/@d3/choropleth) component to provide default arguments suitable for rendering a choropleth of U.S. states.`
)}

function _UsStateChoropleth(states,statemesh,Choropleth){return(
function UsStateChoropleth(data, {
  features = states,
  borders = statemesh,
  width = 975,
  height = 610,
  ...options
} = {}) {
  return Choropleth(data, {features, borders, width, height, ...options});
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["us_states_toxicity.csv", {url: new URL("./files/283a5eaec73363ceabed4c04e0428082661cbd3b3fda69e0a638f5fd88f7e65f61f8a192c8670a16429eb87183cbf86b4efe7aa57e3761503438ba1a6ea97b4e.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("key")).define("key", ["Legend","chart"], _key);
  main.variable(observer("chart")).define("chart", ["UsStateChoropleth","toxicity","namemap","d3"], _chart);
  main.variable(observer("toxicity")).define("toxicity", ["FileAttachment"], _toxicity);
  main.variable(observer("namemap")).define("namemap", ["states"], _namemap);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("UsStateChoropleth")).define("UsStateChoropleth", ["states","statemesh","Choropleth"], _UsStateChoropleth);
  const child1 = runtime.module(define1);
  main.import("howto", child1);
  const child2 = runtime.module(define2);
  main.import("us", child2);
  main.import("states", child2);
  main.import("statemesh", child2);
  main.import("Choropleth", child2);
  main.import("Legend", child2);
  return main;
}
