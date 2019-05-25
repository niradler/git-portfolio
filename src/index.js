const providers = require("./providers");
const PROVIDER = "github";
const provider = providers[PROVIDER];
const fs = require("fs");

const getRepos = async username => {
  try {
    const data = await provider.fetch(username);
    console.log({ data });
    fs.writeFileSync("../data/github.json", JSON.stringify(data));
  } catch (error) {
    console.log({ error });
  }
};

getRepos("niradler");
