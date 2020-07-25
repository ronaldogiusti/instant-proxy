const yargs = require("yargs");

const argv = yargs
  .usage("Usage: $0 -p [port] -map 'source, target'")
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
  .help()
  .alias("help", "h").argv;

const proxy = require("redbird")({ port: argv.port });

argv.map.forEach((element) => {
  const source = element.split(",")[0].trim();
  const target = element.split(",")[1].trim();
  proxy.register(source, target);
});

if (argv.verbose) {
  console.debug(argv);
}
