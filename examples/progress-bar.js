import * as mo from "movy";

const text = "loading...";
const duration = 4;

mo.setResolution(700, 60);

const g = mo.addGroup({});
mo.addRectOutline({
  width: 114,
  height: 8.6,
  z: 0.1,
  lineWidth: 0.9,
  parent: g,
});
mo.addRect({ sx: 114, sy: 8.6, color: "#44abda", parent: g }).wipeIn({
  dir: "right",
  duration,
});

mo.addText(text, { scale: 4 });
