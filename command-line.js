const yargs = require("yargs");

const argv = yargs
  .usage("Usage: $0 -p [port] --map 'source, target'")
  .array("map")
  .default("map", [], "empty list")
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })
  .option("port", {
    default: 5000,
    alias: "p",
    type: "number",
  })
  .option("sslport", {
    default: 5443,
    type: "number",
  })
  .option("ssl", {
    default: false,
    type: "boolean",
  })
  .option("file", {
    alias: "f",
    type: "string",
  })
  .help()
  .alias("help", "h").argv;

module.exports = { argv };
