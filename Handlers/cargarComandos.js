async function loadCommands(client) {
  const ascii = require("ascii-table");
  const fs = require("fs");
  var colors = require('colors');
  const table = new ascii().setHeading("Comandos", "Estado");
  let commandsArray = [];
  let guildCommandsArray = []; // New array to store unique guild commands
  const commandsFolder = fs.readdirSync("./Comandos");

  for (const folder of commandsFolder) {
    const commandFiles = fs
      .readdirSync(`./Comandos/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const commandFile = require(`../Comandos/${folder}/${file}`);
      const properties = { folder, ...commandFile };
      client.commands.set(commandFile.data.name, commandFile);

      commandsArray.push(commandFile.data.toJSON());
      console.log(`[   SHUI-CMDS     ]`.underline.cyan + " --- Cargando  ".cyan + `  ${commandFile.data.name}`.cyan);
      await new Promise(resolve => setTimeout(resolve, 10)); // wait for 2 seconds
      table.addRow(file, "cargado");
      continue;
      continue;
    }
  }
  client.application.commands.set(commandsArray);
}
module.exports = { loadCommands };