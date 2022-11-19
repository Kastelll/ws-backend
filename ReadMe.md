# Kastels Webserver Base Plate

This is Kastels Webserver Base Plate. It is a simple webserver that can be used as a base for other projects. It is written in Node.js and uses Hyper-express for the webserver.

## Installation

To install the webserver, you need to have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/en/).

After you have installed Node.js, you can install the webserver by running the following command in the folder where you have downloaded the webserver:

```bash
foo@bar:~$ npm install

# Or if you use yarn

foo@bar:~$ yarn install
```

## Usage

To start the webserver, you can run the following command:

```bash
foo@bar:~$ npm start

# Or if you use yarn

foo@bar:~$ yarn start
```

## Configuration

The webserver can be configured by editing the `config.json` file. The following options are available:

```json
{
  "port": 8080,
  "host": "0.0.0.0"
}
```

## Adding Routes

To add new routes for the web server go to src/routes folder and create a new file.

It should look like this:

```js
const Route = require("../utils/Route");

new Route('/test', 'get', async (req, res, app) => {
    res.send('Test');
})

// Or if you need middleware

new Route('/test', 'get', [middlewareFunctions], async (req, res, app) => {
    res.send('Test');
})

```

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more information.