const _0xa43f8e=_0x338b;(function(_0x2fb56b,_0x57dbb6){const _0x192973=_0x338b,_0x1a9350=_0x2fb56b();while(!![]){try{const _0x233fab=-parseInt(_0x192973(0xd2))/0x1*(parseInt(_0x192973(0xdc))/0x2)+-parseInt(_0x192973(0xb2))/0x3+-parseInt(_0x192973(0xec))/0x4*(-parseInt(_0x192973(0xe8))/0x5)+-parseInt(_0x192973(0xb1))/0x6*(parseInt(_0x192973(0xc8))/0x7)+parseInt(_0x192973(0xb9))/0x8*(-parseInt(_0x192973(0xae))/0x9)+-parseInt(_0x192973(0xc5))/0xa*(parseInt(_0x192973(0xd6))/0xb)+-parseInt(_0x192973(0xde))/0xc*(-parseInt(_0x192973(0xc4))/0xd);if(_0x233fab===_0x57dbb6)break;else _0x1a9350['push'](_0x1a9350['shift']());}catch(_0x5ccb3e){_0x1a9350['push'](_0x1a9350['shift']());}}}(_0xa1f0,0xbbf13));const fs=require('fs'),blessed=require(_0xa43f8e(0xe9)),contrib=require(_0xa43f8e(0xa9)),dashboardConfig=require(_0xa43f8e(0xac)),{bannerConfig}=require(_0xa43f8e(0xaa)),CapfizzMiner=require('./src/services/CapfizzMiner'),logger=require('./src/utils/logger'),{delay}=require(_0xa43f8e(0xdf)),screen=blessed[_0xa43f8e(0xcc)](dashboardConfig[_0xa43f8e(0xcc)]),grid=new contrib[(_0xa43f8e(0xeb))]({...dashboardConfig[_0xa43f8e(0xeb)],'screen':screen});bannerConfig[_0xa43f8e(0xb5)]=screen;const accountLog=grid[_0xa43f8e(0xf4)](...dashboardConfig[_0xa43f8e(0xd7)]['accountLog']['position'],contrib['log'],dashboardConfig[_0xa43f8e(0xd7)][_0xa43f8e(0xa8)][_0xa43f8e(0xab)]),miningStats=grid[_0xa43f8e(0xf4)](...dashboardConfig[_0xa43f8e(0xd7)]['miningStats'][_0xa43f8e(0xf5)],contrib['table'],dashboardConfig[_0xa43f8e(0xd7)][_0xa43f8e(0xb7)][_0xa43f8e(0xab)]),accountList=grid[_0xa43f8e(0xf4)](...dashboardConfig[_0xa43f8e(0xd7)][_0xa43f8e(0xc0)][_0xa43f8e(0xf5)],contrib[_0xa43f8e(0xf0)],dashboardConfig[_0xa43f8e(0xd7)][_0xa43f8e(0xc0)][_0xa43f8e(0xab)]);logger['setLogger'](accountLog);const miners=new Map();screen[_0xa43f8e(0xe1)]([_0xa43f8e(0xc9),'q',_0xa43f8e(0xbf)],function(_0x30f036,_0x3b78c1){const _0x29a22c=_0xa43f8e;return miners[_0x29a22c(0xf6)](_0x4756c4=>_0x4756c4['stopPing']()),process[_0x29a22c(0xa3)](0x0);});function updateDashboard(_0x46cd6c){const _0x5ba8bd=_0xa43f8e,_0x14afcf=_0x46cd6c[_0x5ba8bd(0xa5)](_0x3c18b6=>[_0x3c18b6[_0x5ba8bd(0xd5)]||'N/A',_0x3c18b6[_0x5ba8bd(0xc6)]||_0x5ba8bd(0xaf),_0x3c18b6['nodeId']||_0x5ba8bd(0xaf),_0x3c18b6[_0x5ba8bd(0xc7)][_0x5ba8bd(0xe4)][_0x5ba8bd(0xc3)](0x2)+'\x20pts']);accountList[_0x5ba8bd(0xdd)]({'headers':[_0x5ba8bd(0xa4),_0x5ba8bd(0xad),'Node\x20ID',_0x5ba8bd(0xc1)],'data':_0x14afcf});const _0x31d519=_0x46cd6c[_0x5ba8bd(0xc2)]((_0x5238e3,_0x1fb5c1)=>{const _0x262ef6=_0x5ba8bd;return _0x5238e3[_0x262ef6(0xe4)]+=_0x1fb5c1[_0x262ef6(0xc7)][_0x262ef6(0xe4)],_0x5238e3[_0x262ef6(0xcd)]+=_0x1fb5c1['stats'][_0x262ef6(0xcd)],_0x5238e3[_0x262ef6(0xcb)]+=_0x1fb5c1[_0x262ef6(0xc7)][_0x262ef6(0xcb)],_0x5238e3;},{'totalPoints':0x0,'successfulMines':0x0,'failedMines':0x0});miningStats['setData']({'headers':[_0x5ba8bd(0xef),_0x5ba8bd(0xa6)],'data':[[_0x5ba8bd(0xc1),_0x31d519[_0x5ba8bd(0xe4)]['toFixed'](0x2)],['Successful\x20Mines',_0x31d519['successfulMines'][_0x5ba8bd(0xea)]()],[_0x5ba8bd(0xb8),_0x31d519[_0x5ba8bd(0xcb)][_0x5ba8bd(0xea)]()]]}),screen[_0x5ba8bd(0xe5)]();}function _0xa1f0(){const _0x2077fe=['Value','{red-fg}Main\x20process\x20failed:\x20','accountLog','blessed-contrib','./src/utils/twist','config','./src/services/dashboard','Status','25443zEUzQs','N/A','checkAuth','9233634aUnzNa','4001070rruusZ','startPing','{red-fg}Error\x20mining\x20for\x20','parent','success','miningStats','Failed\x20Mines','488hNmKdD','{yellow-fg}Attempting\x20to\x20mine\x20for\x20','data','userInfo','userEmail','{red-fg}Mining\x20failed\x20for\x20','C-c','accountList','Total\x20Points','reduce','toFixed','39819cDLDZT','852860jaNMqS','status','stats','7GsfcXv','escape','{/green-fg}','failedMines','screen','successfulMines','push','{green-fg}Points\x20earned\x20for\x20','log','utf8','501629txgWKQ','\x20unique\x20accounts\x20to\x20process{/green-fg}','message','email','33ULXBeg','components','all','split','data.txt','readFileSync','4GhdZIG','setData','16668hBHQMl','./src/utils/helpers','{green-fg}Authentication\x20successful{/green-fg}','key','getUserInfo','nodeInfo','totalPoints','render','{red-fg}Error\x20initializing\x20account:\x20','length','40yqwlcO','blessed','toString','grid','409748bZOGoi','trim','{red-fg}Authentication\x20failed\x20for\x20','Metric','table','mine','{/red-fg}','nodeId','set','position','forEach','...{/yellow-fg}','exit','Email','map'];_0xa1f0=function(){return _0x2077fe;};return _0xa1f0();}function _0x338b(_0x1f1c24,_0x5596d1){const _0xa1f010=_0xa1f0();return _0x338b=function(_0x338bd9,_0x275772){_0x338bd9=_0x338bd9-0xa3;let _0x3cc62c=_0xa1f010[_0x338bd9];return _0x3cc62c;},_0x338b(_0x1f1c24,_0x5596d1);}async function startMining(_0x34f405,_0x3a8edf){const _0x272cd2=_0xa43f8e;while(!![]){try{const _0xfeb041=await _0x34f405[_0x272cd2(0xb0)]();if(!_0xfeb041){logger[_0x272cd2(0xd0)](_0x272cd2(0xee)+_0x34f405['userEmail']+_0x272cd2(0xf2)),await delay(0x7530);continue;}logger['log'](_0x272cd2(0xba)+_0x34f405['userEmail']+_0x272cd2(0xf7));const _0x109e05=await _0x34f405[_0x272cd2(0xf1)]();_0x109e05&&(_0x109e05[_0x272cd2(0xb6)]?(logger[_0x272cd2(0xd0)]('{green-fg}Mining\x20successful\x20for\x20'+_0x34f405['userEmail']+':\x20'+_0x109e05[_0x272cd2(0xd4)]+_0x272cd2(0xca)),logger['log'](_0x272cd2(0xcf)+_0x34f405[_0x272cd2(0xbd)]+':\x20'+_0x109e05['points']+_0x272cd2(0xca))):logger[_0x272cd2(0xd0)](_0x272cd2(0xbe)+_0x34f405[_0x272cd2(0xbd)]+':\x20'+_0x109e05[_0x272cd2(0xd4)]+_0x272cd2(0xf2)),updateDashboard(_0x3a8edf));}catch(_0x203a08){logger[_0x272cd2(0xd0)](_0x272cd2(0xb4)+_0x34f405['userEmail']+':\x20'+_0x203a08[_0x272cd2(0xd4)]+_0x272cd2(0xf2)),await delay(0x2710);}}}async function main(){const _0x34479d=_0xa43f8e;try{const _0x6a7359=fs[_0x34479d(0xdb)](_0x34479d(0xda),_0x34479d(0xd1))[_0x34479d(0xd9)]('\x0a')['filter'](_0x265188=>_0x265188[_0x34479d(0xed)]()),_0x1dc123=[...new Set(_0x6a7359[_0x34479d(0xa5)](_0x6c8e8e=>_0x6c8e8e[_0x34479d(0xed)]()))];logger[_0x34479d(0xd0)]('{green-fg}Found\x20'+_0x1dc123[_0x34479d(0xe7)]+_0x34479d(0xd3));const _0x47f19a=[],_0x7e3c7=[];for(const _0x105ccc of _0x1dc123){try{const _0x91252=new CapfizzMiner(_0x105ccc);miners['set'](_0x105ccc,_0x91252);const _0x16b607=await _0x91252['checkAuth']();if(!_0x16b607){logger['log']('{red-fg}Authentication\x20failed,\x20skipping\x20account{/red-fg}');continue;}logger[_0x34479d(0xd0)](_0x34479d(0xe0));const _0x39e82c=await _0x91252[_0x34479d(0xe2)]();if(_0x39e82c){const _0x4cf0ee={'email':_0x39e82c['data'][_0x34479d(0xbc)]['email'],'status':_0x39e82c['data'][_0x34479d(0xc6)],'nodeId':_0x39e82c[_0x34479d(0xbb)][_0x34479d(0xe3)][_0x34479d(0xf3)],'stats':_0x91252['stats'],'cookie':_0x105ccc};_0x47f19a[_0x34479d(0xce)](_0x4cf0ee),_0x91252['setUserEmail'](_0x39e82c[_0x34479d(0xbb)][_0x34479d(0xbc)][_0x34479d(0xd5)]),_0x91252[_0x34479d(0xb3)](),_0x7e3c7[_0x34479d(0xce)](startMining(_0x91252,_0x47f19a));}}catch(_0x31a9bf){logger[_0x34479d(0xd0)](_0x34479d(0xe6)+_0x31a9bf[_0x34479d(0xd4)]+'{/red-fg}');}}updateDashboard(_0x47f19a),await Promise[_0x34479d(0xd8)](_0x7e3c7);}catch(_0x14af60){logger[_0x34479d(0xd0)](_0x34479d(0xa7)+_0x14af60[_0x34479d(0xd4)]+_0x34479d(0xf2));}}screen[_0xa43f8e(0xe5)](),main();
