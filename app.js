const { argv } = require("./command-line.js");
const proxy = require("redbird")({
  port: argv.port,
  ssl: {
    port: argv.sslport,
    key: "certs/dev-key.pem",
    cert: "certs/dev-cert.pem",
  },
});

if (argv.file) {
  processInputFile();
}

argv.map.forEach((element) => {
  registerHostMapping(element);
});

if (argv.verbose) {
  console.debug(argv);
}

function registerHostMapping(hostEntry) {
  if (hostEntry) {
    const source = hostEntry.split(",")[0].trim();
    const target = hostEntry.split(",")[1].trim();
    proxy.register(source, target, {
      ssl: argv.ssl,
    });
  }
}

function processInputFile() {
  const fs = require("fs");
  try {
    const data = fs.readFileSync(argv.file, "utf8");
    data.split(/[\r\n]+/).forEach((element) => registerHostMapping(element));
  } catch (e) {
    console.error("Error reading file:", e.stack);
  }
}
