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
  .option("sslport", {
    default: 5443,
    type: "number",
  })
  .option("ssl", {
    default: false,
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

const proxy = require("redbird")({
  port: argv.port,
  ssl: {
    port: argv.sslport,
    key: "certs/dev-key.pem",
    cert: "certs/dev-cert.pem",
  },
});

argv.map.forEach((element) => {
  const source = element.split(",")[0].trim();
  const target = element.split(",")[1].trim();
  proxy.register(source, target, {
    ssl: argv.ssl,
  });
});

if (argv.verbose) {
  console.debug(argv);
}
