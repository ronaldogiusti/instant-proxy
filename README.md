# instant-proxy
A mini proxy for development purposes

Instant Proxy is a very simple reverse proxy based on [Redbird](https://github.com/OptimalBits/redbird) that can be started and configured with command line options.
This can be useful when you have several 

## Usage
```
Usage: app.js -p [port] -map 'source, target'

Options:
  --version      Show version number                                   [boolean]
  --verbose, -v  Run with verbose logging                              [boolean]
  --port, -p                                            [number] [default: 5000]
  --help, -h     Show help                                             [boolean]
  --map                                            [array] [default: empty list]
```

## Examples
Basic
```
node app.js -p 5000 --map "localhost/api, http://localhost:3000/api" "localhost/frontend , http://localhost:4020/frontend"
```

config SSL port
```
node app.js -p 5000 --sslport 8443 --map "localhost/api, http://localhost:3000/api" "localhost/frontend , http://localhost:4020/frontend"
```

config SSL redirect
```
node app.js -p 5000 --sslport 8443 --ssl --map "localhost/api, http://localhost:3000/api" "localhost/frontend , http://localhost:4020/frontend"
```


## TO-DO
- SSL support :heavy_check_mark: [commit](https://github.com/ronaldogiusti/instant-proxy/commit/87b765140e0f78a97dbbd7fd43ec57ab43f34209)
- Accept config file as an input
- Registered routes built-in info page
- Error handling
- Docker
- Tests (i know :))
