/* !
 *   ██╗  ██╗ █████╗ ███████╗████████╗███████╗██╗
 *   ██║ ██╔╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██║
 *  █████╔╝ ███████║███████╗   ██║   █████╗  ██║
 *  ██╔═██╗ ██╔══██║╚════██║   ██║   ██╔══╝  ██║
 * ██║  ██╗██║  ██║███████║   ██║   ███████╗███████╗
 * ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝
 * Copyright(c) 2022-2023 DarkerInk
 * GPL 3.0 Licensed
 */

const { Server } = require('hyper-express');
const Route = require('./utils/Route');
const { join } = require('node:path');
const Routes = Route.loadRoutes(join(__dirname, 'routes'));
const config = require('../config.json')
const app = new Server();

Route.setRoutes(app)

app.listen(config.port, config.host)
.then((socket) => {
    console.log(`Server is running on ${config.port}`);

    console.log(`Loaded ${Routes.length} routes`);
})
.catch((error) => console.error(error));