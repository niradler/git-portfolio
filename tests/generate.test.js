const { generate } = require("../src");
const fs = require("file-system");

test("generate", () => {
  fs.rmdirSync("./output");
  generate({
    exportPath: "./output",
    username: "niradler",
    useTestData: true
  });
  expect(fs.readFileSync("./output/index.html", "utf-8")).toBeDefined();
});
