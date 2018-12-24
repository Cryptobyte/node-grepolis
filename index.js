const fetch = require('./helpers/fetch');

/**
 * Gets town data in JSON array from API
 * @name towns
 * @param server Server to get data from (ex. en6)
 */
function towns(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/towns.txt.gz`).then((response) => {
      try {
        var towns = [];
          
        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const town = {
            id: record[0],
            playerId: record[1],
            name: record[2],
            islandX: record[3],
            islandY: record[4],
            numberOnIsland: record[5],
            points: record[6]
          };
            
          towns.push(town);
        });
          
        resolve(towns);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets island data in JSON array from API
 * @name islands
 * @param server Server to get data from (ex. en6)
 */
function islands(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/islands.txt.gz`).then((response) => {
      try {
        var islands = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const island = {
            id: record[0],
            x: record[1],
            y: record[2],
            islandType: record[3],
            availableTowns: record[4],
            resourcePlus: record[5],
            resourceMinus: record[6]
          };

          islands.push(island);
        });

        resolve(islands);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets conquer data in JSON array from API
 * @name conquers
 * @param server Server to get data from (ex. en6)
 */
function conquers(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/conquers.txt.gz`).then((response) => {
      try {
        var conquers = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const conquer = {
            townId: record[0],
            time: record[1],
            newPlayerId: record[2],
            oldPlayerId: record[3],
            newAllyId: record[4],
            oldAllyId: record[5],
            points: record[6]
          };

          conquers.push(conquer);
        });

        resolve(conquers);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets player data in JSON array from API
 * @name players
 * @param server Server to get data from (ex. en6)
 */
function players(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/players.txt.gz`).then((response) => {
      try {
        var players = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const player = {
            id: record[0],
            name: record[1],
            allianceId: record[2],
            points: record[3],
            rank: record[4],
            towns: record[5]
          };

          players.push(player);
        });

        resolve(players);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets player kill data in JSON array from API
 * @name playersKills
 * @param server Server to get data from (ex. en6)
 */
function playersKills(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/player_kills_all.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
  * Gets player kill (attacking) data in JSON array from API
  * @name playersKillsAttack
  * @param server Server to get data from (ex. en6)
  */
function playersKillsAttack(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/player_kills_att.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets player kill (defending) data in JSON array from API
 * @name playersKillsDefend
 * @param server Server to get data from (ex. en6)
 */
function playersKillsDefend(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/player_kills_def.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets alliance data in JSON array from API
 * @name alliances
 * @param server Server to get data from (ex. en6)
 */
function alliances(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/alliances.txt.gz`).then((response) => {
      try {
        var alliances = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const alliance = {
            id: record[0],
            name: record[1],
            points: record[2],
            towns: record[3],
            members: record[4],
            rank: record[5]
          };

          alliances.push(alliance);
        });

        resolve(alliances);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets alliance kill data in JSON array from API
 * @name alliancesKills
 * @param server Server to get data from (ex. en6)
 */
function alliancesKills(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/alliance_kills_all.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets alliance kill (attacking) data in JSON array from API
 * @name alliancesKillsAttack
 * @param server Server to get data from (ex. en6)
 */
function alliancesKillsAttack(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/alliance_kills_att.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}
  
/**
 * Gets alliance kill (defending) data in JSON array from API
 * @name alliancesKillsDefend
 * @param server Server to get data from (ex. en6)
 */
function alliancesKillsDefend(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/alliance_kills_def.txt.gz`).then((response) => {
      try {
        var kills = [];

        response.split('\n').forEach((line) => {
          const record = line.split(",");
          const kill = {
            rank: record[0],
            id: record[1],
            points: record[2]
          };

          kills.push(kill);
        });

        resolve(kills);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * Gets unit information for selected server
 * @name units
 * @param server Server to get data from (ex. en6)
 */
function units(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/units.json`).then((response) => {
      try {
        const json = JSON.parse(response);
        resolve(json);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * Gets research information for selected server
 * @name researches
 * @param server Server to get data from (ex. en6)
 */
function researches(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/researches.json`).then((response) => {
      try {
        const json = JSON.parse(response);
        resolve(json);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * Gets building information for selected server
 * @name buildings
 * @param server Server to get data from (ex. en6)
 */
function buildings(server) {
  return new Promise((resolve, reject) => {
    fetch.getData(`https://${server}.grepolis.com/data/buildings.json`).then((response) => {
      try {
        const json = JSON.parse(response);
        resolve(json);
      
      } catch (err) { reject(err); }

    }).catch((err) => {
      reject(err);
    });
  });
}

module.exports = {
  towns, islands, conquers, 
  players, playersKills, playersKillsAttack, playersKillsDefend, 
  alliances, alliancesKills, alliancesKillsAttack, alliancesKillsDefend,
  units, researches, buildings
};