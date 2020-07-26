const { argv } = require("./command-line.js");
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
