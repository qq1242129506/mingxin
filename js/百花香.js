sleep(100);var window = floaty.window('<frame><vertical><button id="btn" text="暂停"/><horizontal><button id="speedLow" text="减速" w="80"/><button id="speedHigh" text="加速"w="80"/></horizontal><horizontal><button id="speed" text="x1" w="80"/><button id="stop" text="停止"w="80"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.stopAll()})
var s=1;var speedControl=1;var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));//快速适配分辨率
} else {
    setScreenMetrics(1080, 2340); //默认分辨率，以下按键位置基于此分辨率
    var x = [410, 680, 950, 1220, 1490, 1760, 2030];
    var y = [980, 870, 760];
    var xy = [];for(var i = 0; i < 21; i++) {xy.push(x[i % 7], y[parseInt(i / 7)])}
}
function ran(){return Math.random()*20-10}
function pre(id,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(xy[id*2-2]+ran(),xy[id*2-1]+ran(),c)}
function c4(t) {pre(1,t)};function d4(t) {pre(2,t)};function e4(t) {pre(3,t)};
function f4(t) {pre(4,t)};function g4(t) {pre(5,t)};function a4(t) {pre(6,t)};
function b4(t) {pre(7,t)};function c5(t) {pre(8,t)};function d5(t) {pre(9,t)};
function e5(t) {pre(10,t)};function f5(t) {pre(11,t)};function g5(t) {pre(12,t)};
function a5(t) {pre(13,t)};function b5(t) {pre(14,t)};function c6(t) {pre(15,t)};
function d6(t) {pre(16,t)};function e6(t) {pre(17,t)};function f6(t) {pre(18,t)};
function g6(t) {pre(19,t)};function a6(t) {pre(20,t)};function b6(t) {pre(21,t)};
function sl(t) {while (s != 1) {sleep(100)};sleep(t/speedControl)};
e6();sl(446);d6();sl(462);c6();sl(459);b5();sl(460);f4();sl(39);a5();sl(422);c4();sl(462);f4();sl(33);a5();sl(435);c6();sl(459);g4();sl(54);b5();sl(409);d4();sl(463);g4();sl(50);b5();sl(416);g5();sl(460);a4();sl(52);e5();sl(410);e4();sl(461);c5();sl(459);e4();sl(459);a4();sl(50);e6();sl(423);d6();sl(459);c6();sl(459);b5();sl(473);f4();sl(54);a5();sl(412);c4();sl(458);f4();sl(57);a5();sl(405);c6();sl(460);g4();sl(51);b5();sl(418);d4();sl(465);g4();sl(52);b5();sl(429);g5();sl(462);a4();sl(50);a5();sl(416);e4();sl(459);a4();sl(464);b4();sl(463);c5();sl(50);e6();sl(418);d6();sl(460);c6();sl(459);b5();sl(461);f4();sl(49);a5();sl(419);c4();sl(461);f4();sl(55);a5();sl(407);c6();sl(458);g4();sl(51);b5();sl(416);d4();sl(460);g4();sl(54);b5();sl(412);g5();sl(459);a4();sl(50);e5();sl(430);e4();sl(463);c5();sl(465);e4();sl(465);a4();sl(64);e5();sl(405);d5();sl(460);c5();sl(461);b4();sl(466);f4();sl(61);c4();sl(56);a4();sl(817);a4();sl(466);c5();sl(466);g4();sl(65);d4();sl(59);b4();sl(804);a4();sl(462);g4();sl(480);a4();sl(464);e4();sl(62);a4();sl(407);c5();sl(467);e4();sl(460);a4();sl(1831);a4();sl(73);a5();sl(393);e4();sl(59);a5();sl(179);a5();sl(237);a4();sl(76);a5();sl(393);e4();sl(61);c6();sl(405);c5();sl(65);e6();sl(860);a4();sl(919);g4();sl(62);d6();sl(411);d4();sl(67);d6();sl(174);d6();sl(243);g4();sl(75);d6();sl(395);d4();sl(85);c6();sl(380);c5();sl(71);e6();sl(854);g4();sl(917);d4();sl(76);d6();sl(390);a4();sl(466);d4();sl(53);d6();sl(412);a4();sl(234);d6();sl(236);d4();sl(67);d6();sl(402);a4();sl(83);c6();sl(382);f4();sl(71);d6();sl(626);b5();sl(238);e4();sl(62);b5();sl(407);b4();sl(233);d6();sl(238);e4();sl(72);b5();sl(399);g4();sl(241);g5();sl(238);a4();sl(61);a5();sl(406);e4();sl(462);a4();sl(919);a4();sl(66);a5();sl(398);e4();sl(64);a5();sl(177);a5();sl(235);a4();sl(67);a5();sl(403);e4();sl(59);c6();sl(410);c5();sl(58);e6();sl(871);a4();sl(920);g4();sl(65);d6();sl(401);d4();sl(56);d6();sl(176);d6();sl(234);g4();sl(55);d6();sl(407);d4();sl(51);c6();sl(413);c5();sl(50);e6();sl(870);g4();sl(916);d4();sl(53);d6();sl(416);a4();sl(460);d4();sl(51);d6();sl(417);a4();sl(232);d6();sl(235);d4();sl(52);d6();sl(421);a4();sl(53);c6();sl(410);f4();sl(53);d6();sl(883);e4();sl(51);g6();sl(412);b4();sl(52);e6();sl(183);e6();sl(238);e4();sl(50);g6();sl(415);b4();sl(64);g6();sl(175);a6();sl(234);a4();sl(50);a6();sl(413);e4();sl(462);a4();sl(61);c5();sl(858);f4();sl(53);a5();sl(413);c4();sl(61);a5();sl(173);a5();sl(231);f4();sl(53);a4();sl(49);a6();sl(369);c4();sl(50);a6();sl(413);g4();sl(70);g6();sl(394);d4();sl(51);a6();sl(185);g6();sl(236);g4();sl(51);b4();sl(49);d6();sl(823);e4();sl(52);e6();sl(410);b4();sl(53);e6();sl(181);d6();sl(233);e4();sl(50);c6();sl(416);g4();sl(60);d6();sl(404);a4();sl(55);e6();sl(407);e4();sl(460);c5();sl(459);c6();sl(230);b5();sl(232);f4();sl(51);a5();sl(420);c4();sl(459);f4();sl(459);e6();sl(459);g4();sl(50);d6();sl(420);d4();sl(460);g4();sl(52);d6();sl(409);g6();sl(459);c4();sl(52);e6();sl(414);g4();sl(460);c5();sl(464);d5();sl(466);e5();sl(468);a5();sl(463);c6();sl(463);a5();sl(464);f4();sl(54);a5();sl(418);c4();sl(75);a5();sl(163);a5();sl(233);f4();sl(64);a4();sl(62);a6();sl(345);c4();sl(66);a6();sl(398);g4();sl(65);g6();sl(407);d4();sl(70);a6();sl(170);g6();sl(234);g4();sl(66);b4();sl(68);d6();sl(793);e4();sl(78);e6();sl(389);b4();sl(68);e6();sl(170);d6();sl(236);e4();sl(63);c6();sl(404);g4();sl(60);g6();sl(410);a4();sl(71);e6();sl(397);e4();sl(462);a4();sl(466);c6();sl(232);b5();sl(239);f4();sl(70);a5();sl(397);c4();sl(466);f4();sl(465);e6();sl(463);g4();sl(63);d6();sl(409);d4();sl(465);g4();sl(64);d6();sl(402);g5();sl(464);a4();sl(69);a5();sl(397);e4();sl(462);a4();sl(463);b4();sl(468);c5();sl(86);a5();sl(1748);f4();sl(64);a5();sl(404);c4();sl(88);a5();sl(150);a5();sl(236);f4();sl(78);a4();sl(64);a6();sl(331);c4();sl(64);a6();sl(405);g4();sl(71);g6();sl(395);d4();sl(66);a6();sl(172);g6();sl(237);g4();sl(64);b4();sl(63);d6();sl(804);e4();sl(62);e6();sl(404);b4();sl(60);e6();sl(181);d6();sl(235);e4();sl(94);c6();sl(375);g4();sl(64);d6();sl(404);a4();sl(75);e6();sl(393);e4();sl(465);c5();sl(463);c6();sl(234);b5();sl(240);f4();sl(58);a5();sl(408);c4();sl(462);f4();sl(468);e6();sl(468);g4();sl(90);d6();sl(378);d4();sl(462);g4();sl(73);d6();sl(398);g6();sl(467);c4();sl(60);e6();sl(410);g4();sl(463);c5();sl(462);d5();sl(461);e5();sl(462);a5();sl(463);g4();sl(94);c6();sl(374);a5();sl(463);f4();sl(65);a5();sl(403);c4();sl(76);a5();sl(165);a5();sl(239);f4();sl(68);a4();sl(60);a6();sl(344);c4();sl(55);a6();sl(421);g4();sl(73);g6();sl(396);d4();sl(69);a6();sl(169);g6();sl(233);g4();sl(57);b4();sl(58);d6();sl(809);e4();sl(76);e6();sl(390);b4();sl(61);e6();sl(173);d6();sl(243);e4();sl(54);c6();sl(408);g4();sl(53);g6();sl(409);a4();sl(53);e6();sl(408);e4();sl(463);a4();sl(466);c6();sl(231);b5();sl(232);f4();sl(52);a5();sl(412);c4();sl(460);f4();sl(459);e6();sl(463);g4();sl(53);d6();sl(414);d4();sl(461);g4();sl(51);d6();sl(415);g5();sl(462);a4();sl(50);a5();sl(415);e4();sl(458);a4();sl(917);a4();sl(82);a5();sl(381);e4();sl(461);c5();sl(462);e4();sl(465);a4();sl(51);e6();sl(410);d6();sl(461);c6();sl(459);b5();sl(459);f4();sl(57);a5();sl(407);c4();sl(461);f4();sl(50);a5();sl(416);c6();sl(459);g4();sl(55);b5();sl(407);d4();sl(459);g4();sl(52);b5();sl(407);g5();sl(461);a4();sl(52);e5();sl(410);e4();sl(458);c5();sl(460);e4();sl(459);a4();sl(54);e6();sl(408);d6();sl(458);c6();sl(463);b5();sl(459);f4();sl(50);a5();sl(414);c4();sl(459);f4();sl(51);a5();sl(415);c6();sl(460);g4();sl(57);b5();sl(406);d4();sl(459);g4();sl(50);b5();sl(416);g5();sl(463);a4();sl(56);a5();sl(407);e4();sl(464);a4();sl(463);e4();sl(464);a4();sl(63);a5();