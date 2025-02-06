const fs = require('fs');
const blessed = require("blessed");
const contrib = require('blessed-contrib');
const dashboardConfig = require("./src/services/dashboard");
const { bannerConfig } = require("./src/utils/twist");
const CapfizzMiner = require('./src/services/CapfizzMiner');
const logger = require('./src/utils/logger');
const { delay } = require("./src/utils/helpers");

const screen = blessed.screen(dashboardConfig.screen);
const grid = new contrib.grid({
  ...dashboardConfig.grid,
  'screen': screen
});

bannerConfig.parent = screen;

const accountLog = grid.set(...dashboardConfig.components.accountLog.position, contrib.log, dashboardConfig.components.accountLog.config);
const miningStats = grid.set(...dashboardConfig.components.miningStats.position, contrib.table, dashboardConfig.components.miningStats.config);
const accountList = grid.set(...dashboardConfig.components.accountList.position, contrib.table, dashboardConfig.components.accountList.config);

logger.setLogger(accountLog);

const miners = new Map();

screen.key(['escape', 'q', 'C-c'], function (_0x407c75, _0x1135e5) {
  miners.forEach(_0x3a4793 => _0x3a4793.stopPing());
  return process.exit(0x0);
});

function updateDashboard(_0x190048) {
  const _0x3cf92f = _0x190048.map(_0x1dff03 => [_0x1dff03.email || "N/A", _0x1dff03.status || "N/A", _0x1dff03.nodeId || 'N/A', _0x1dff03.stats.totalPoints.toFixed(0x2) + " pts"]);
  accountList.setData({
    'headers': ['Email', "Status", "Node ID", "Total Points"],
    'data': _0x3cf92f
  });

  const _0x7cd90a = _0x190048.reduce((_0x4983a7, _0x2e5ab3) => {
    _0x4983a7.totalPoints += _0x2e5ab3.stats.totalPoints;
    _0x4983a7.successfulMines += _0x2e5ab3.stats.successfulMines;
    _0x4983a7.failedMines += _0x2e5ab3.stats.failedMines;
    return _0x4983a7;
  }, {
    'totalPoints': 0x0,
    'successfulMines': 0x0,
    'failedMines': 0x0
  });

  miningStats.setData({
    'headers': ["Metric", "Value"],
    'data': [["Total Points", _0x7cd90a.totalPoints.toFixed(0x2)], ["Successful Mines", _0x7cd90a.successfulMines.toString()], ["Failed Mines", _0x7cd90a.failedMines.toString()]]
  });

  screen.render();
}

async function startMining(_0xcdd4a2, _0x7278fa) {
  while (true) {
    try {
      const _0x28cd20 = await _0xcdd4a2.checkAuth();
      if (!_0x28cd20) {
        logger.log("{red-fg}Authentication failed for " + _0xcdd4a2.userEmail + '{/red-fg}');
        await delay(0x7530);
        continue;
      }
      logger.log("{yellow-fg}Attempting to mine for " + _0xcdd4a2.userEmail + "...{/yellow-fg}");
      const _0x289b47 = await _0xcdd4a2.mine();
      if (_0x289b47) {
        if (_0x289b47.success) {
          logger.log("{green-fg}Mining successful for " + _0xcdd4a2.userEmail + ": " + _0x289b47.message + "{/green-fg}");
          logger.log("{green-fg}Points earned for " + _0xcdd4a2.userEmail + ": " + _0x289b47.points + '{/green-fg}');
        } else {
          logger.log("{red-fg}Mining failed for " + _0xcdd4a2.userEmail + ": " + _0x289b47.message + "{/red-fg}");
        }
        updateDashboard(_0x7278fa);
      }
    } catch (_0x26813c) {
      logger.log("{red-fg}Error mining for " + _0xcdd4a2.userEmail + ": " + _0x26813c.message + "{/red-fg}");
      await delay(0x2710);
    }
  }
}

async function main() {
  try {
    const _0x1b0cfc = fs.readFileSync("data.txt", "utf8").split("\n").filter(_0x1e93cc => _0x1e93cc.trim());
    const _0x1d87ef = [...new Set(_0x1b0cfc.map(_0x4af49b => _0x4af49b.trim()))];
    logger.log("{green-fg}Found " + _0x1d87ef.length + " unique accounts to process{/green-fg}");
    const _0x280de7 = [];
    const _0x1f56e5 = [];
    for (const _0x5974c0 of _0x1d87ef) {
      try {
        const _0x251553 = new CapfizzMiner(_0x5974c0);
        miners.set(_0x5974c0, _0x251553);
        const _0xaec8ec = await _0x251553.checkAuth();
        if (!_0xaec8ec) {
          logger.log("{red-fg}Authentication failed, skipping account{/red-fg}");
          continue;
        }
        logger.log("{green-fg}Authentication successful{/green-fg}");
        const _0x583289 = await _0x251553.getUserInfo();
        if (_0x583289) {
          const _0x2276fb = {
            'email': _0x583289.data.userInfo.email,
            'status': _0x583289.data.status,
            'nodeId': _0x583289.data.nodeInfo.nodeId,
            'stats': _0x251553.stats,
            'cookie': _0x5974c0
          };
          _0x280de7.push(_0x2276fb);
          _0x251553.setUserEmail(_0x583289.data.userInfo.email);
          _0x251553.startPing();
          _0x1f56e5.push(startMining(_0x251553, _0x280de7));
        }
      } catch (_0x402cc4) {
        logger.log("{red-fg}Error initializing account: " + _0x402cc4.message + '{/red-fg}');
      }
    }
    updateDashboard(_0x280de7);
    await Promise.all(_0x1f56e5);
  } catch (_0x97bc94) {
    logger.log("{red-fg}Main process failed: " + _0x97bc94.message + "{/red-fg}");
  }
}

module.exports = {
  updateDashboard,
  startMining,
  main,
  screen.render,
  grid,
  miners
};
