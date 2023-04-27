import define1 from "./7a9e12f9fb3d8e06@498.js";
import define2 from "./a33468b95d0b15b0@808.js";

function _1(md){return(
md`# Circle Packing, Bubble Chart

Bubble charts are non-hierarchical [packed circles](/@d3/pack?collection=@d3/charts). The area of each circle is proportional its value (here, file size). The organic appearance of these diagrams can be intriguing, but also consider a [treemap](/@d3/treemap?collection=@d3/charts) or a humble [bar chart](/@d3/horizontal-bar-chart?collection=@d3/charts).`
)}

function _key(Swatches,chart){return(
Swatches(chart.scales.color)
)}

function _chart(BubbleChart,files){return(
BubbleChart(files, {
  label: d => [...d.interest.split("_"), d.count.toLocaleString("en")].join("\n"),
  value: d => d.count,
  group: d => d.interest, // return the interest instead of the age group
  title: d => `${d.interest}\n${d.count.toLocaleString("en")}`,
  link: d => `https://raw.githubusercontent.com/taniadawood/ds-projects/master/bubble_chart_ss.csv`,
  width: 1152
})
)}

function _bubble_chart_ss(__query,FileAttachment,invalidation){return(
__query(FileAttachment("bubble_chart_ss.csv"),{from:{table:"bubble_chart_ss"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _output_ss(FileAttachment){return(
FileAttachment('bubble_chart_ss.csv').csv()
)}

function _files(output_ss){return(
output_ss.filter(d => d.value !== null)
)}

function _7(howto){return(
howto("BubbleChart")
)}

function _BubbleChart(d3,location){return(
function BubbleChart(data, {
  name = ([x]) => x, // alias for label
  label = name, // given d in data, returns text to display on the bubble
  value = ([, y]) => y, // given d in data, returns a quantitative size
  group, // given d in data, returns a categorical value for color
  title, // given d in data, returns text to show on hover
  link, // given a node d, its link (if any)
  linkTarget = "_blank", // the target attribute for links, if any
  width = 640, // outer width, in pixels
  height = width, // outer height, in pixels
  padding = 3, // padding between circles
  margin = 1, // default margins
  marginTop = margin, // top margin, in pixels
  marginRight = margin, // right margin, in pixels
  marginBottom = margin, // bottom margin, in pixels
  marginLeft = margin, // left margin, in pixels
  groups, // array of group names (the domain of the color scale)
  colors = d3.schemeTableau10, // an array of colors (for groups)
  fill = "#ccc", // a static fill color, if no group channel is specified
  fillOpacity = 0.7, // the fill opacity of the bubbles
  stroke, // a static stroke around the bubbles
  strokeWidth, // the stroke width around the bubbles, if any
  strokeOpacity, // the stroke opacity around the bubbles, if any
} = {}) {
  // Compute the values.
  const D = d3.map(data, d => d);
  const V = d3.map(data, value);
  const G = group == null ? null : d3.map(data, group);
  const I = d3.range(V.length).filter(i => V[i] > 0);

  // Unique the groups.
  if (G && groups === undefined) groups = I.map(i => G[i]);
  groups = G && new d3.InternSet(groups);

  // Construct scales.
  const color = G && d3.scaleOrdinal(groups, colors);

  // Compute labels and titles.
  const L = label == null ? null : d3.map(data, label);
  const T = title === undefined ? L : title == null ? null : d3.map(data, title);

  // Compute layout: create a 1-deep hierarchy, and pack it.
  const root = d3.pack()
      .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
      .padding(padding)
    (d3.hierarchy({children: I})
      .sum(i => V[i]));

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-marginLeft, -marginTop, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("fill", "currentColor")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle");

  const leaf = svg.selectAll("a")
    .data(root.leaves())
    .join("a")
      .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
      .attr("target", link == null ? null : linkTarget)
      .attr("transform", d => `translate(${d.x},${d.y})`);

  leaf.append("circle")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .attr("fill", G ? d => color(G[d.data]) : fill == null ? "none" : fill)
      .attr("fill-opacity", fillOpacity)
      .attr("r", d => d.r);

  if (T) leaf.append("title")
      .text(d => T[d.data]);

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    leaf.append("clipPath")
        .attr("id", d => `${uid}-clip-${d.data}`)
      .append("circle")
        .attr("r", d => d.r);

    leaf.append("text")
        .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
      .selectAll("tspan")
      .data(d => `${L[d.data]}`.split(/\n/g))
      .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
        .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
        .text(d => d);
  }

  return Object.assign(svg.node(), {scales: {color}});
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["bubble_chart_ss.csv", {url: new URL("./files/37d582f8f76a73401c2a4e48dc101f8f0e1d5793afd4009e9b1d03dd134f4e2c312fa76d2135ede79d3c2f18e0db44992f37881c2da7e9e7b50730369b719527.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("key")).define("key", ["Swatches","chart"], _key);
  main.variable(observer("chart")).define("chart", ["BubbleChart","files"], _chart);
  main.variable(observer("bubble_chart_ss")).define("bubble_chart_ss", ["__query","FileAttachment","invalidation"], _bubble_chart_ss);
  main.variable(observer("output_ss")).define("output_ss", ["FileAttachment"], _output_ss);
  main.variable(observer("files")).define("files", ["output_ss"], _files);
  main.variable(observer()).define(["howto"], _7);
  main.variable(observer("BubbleChart")).define("BubbleChart", ["d3","location"], _BubbleChart);
  const child1 = runtime.module(define1);
  main.import("howto", child1);
  const child2 = runtime.module(define2);
  main.import("Swatches", child2);
  return main;
}
