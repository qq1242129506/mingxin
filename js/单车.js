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
d4();sl(227);e4();sl(233);g4();sl(239);a4();sl(230);c4();sl(44);g4();sl(874);c4();sl(39);e4();sl(27);g4();sl(49);c5();sl(819);b4();sl(234);c5();sl(238);b4();sl(231);g4();sl(231);b4();sl(458);e4();sl(478);e4();sl(41);a4();sl(879);a4();sl(54);e4();sl(865);d4();sl(231);e4();sl(230);g4();sl(231);e4();sl(232);g4();sl(237);d4();sl(232);e4();sl(233);d4();sl(231);c4();sl(914);f4();sl(915);c4();sl(231);g4();sl(233);a4();sl(231);c4();sl(234);e4();sl(34);d4();sl(199);c4();sl(239);d4();sl(231);e4();sl(232);d4();sl(916);d4();sl(38);f4();sl(240);a4();sl(187);g4();sl(1374);g4();sl(41);d4();sl(31);d5();sl(33);g5();sl(34);d6();sl(789);c4();sl(35);e4();sl(32);g4();sl(74);c5();sl(329);d5();sl(233);c5();sl(231);e4();sl(40);g4();sl(27);d5();sl(168);c5();sl(232);d5();sl(231);c5();sl(231);b4();sl(48);b4();sl(41);d5();sl(374);e5();sl(230);d5();sl(239);g4();sl(231);e4();sl(459);d4();sl(231);a4();sl(44);e4();sl(38);a4();sl(386);d5();sl(230);c5();sl(231);e4();sl(32);a4();sl(37);d5();sl(171);c5();sl(233);d5();sl(230);e5();sl(231);g4();sl(42);g4();sl(61);b4();sl(366);b4();sl(230);c5();sl(233);e4();sl(32);g4();sl(433);g4();sl(460);f4();sl(51);f4();sl(39);a4();sl(839);c4();sl(53);f4();sl(41);a4();sl(607);a4();sl(233);e4();sl(69);g4();sl(399);g5();sl(239);g5();sl(238);c4();sl(38);e4();sl(43);g5();sl(392);c5();sl(463);d4();sl(86);f4();sl(52);a4();sl(792);a4();sl(53);f4();sl(42);a4();sl(603);g4();sl(232);g4();sl(241);g4();sl(81);e5();sl(154);d5();sl(239);c5();sl(236);g4();sl(45);d4();sl(45);f4();sl(28);b4();sl(126);a4();sl(234);g4();sl(462);c4();sl(56);e4();sl(32);g4();sl(25);c5();sl(366);d5();sl(237);c5();sl(236);e4();sl(52);g4();sl(32);d5();sl(159);c5();sl(233);d5();sl(237);c5();sl(237);b4();sl(55);b4();sl(53);d5();sl(368);e5();sl(238);d5();sl(233);g4();sl(235);e4();sl(462);d4();sl(232);e4();sl(54);a4();sl(189);a4();sl(65);e4();sl(176);d5();sl(234);c5();sl(233);d5();sl(235);e4();sl(53);a4();sl(40);c5();sl(149);d5();sl(233);e5();sl(237);g4();sl(62);b4();sl(179);g4();sl(233);b4();sl(236);c5();sl(241);e4();sl(44);g4();sl(52);c5();sl(383);d5();sl(471);f4();sl(49);f4();sl(51);c5();sl(827);c4();sl(51);f4();sl(45);c5();sl(373);d5();sl(244);e5();sl(237);e4();sl(53);f5();sl(413);e5();sl(237);d5();sl(233);c4();sl(47);e4();sl(422);c5();sl(460);d4();sl(66);f4();sl(51);c5();sl(814);a4();sl(695);g4();sl(233);g4();sl(54);a5();sl(190);g4();sl(100);g5();sl(135);g5();sl(233);g4();sl(60);a5();sl(180);g4();sl(53);d4();sl(37);f4();sl(49);e5();sl(340);c5();sl(467);c4();sl(50);e4();sl(43);g4();sl(51);c5();sl(331);c5();sl(236);c5();sl(232);c4();sl(50);e4();sl(43);g4();sl(34);c5();sl(348);g5();sl(691);b4();sl(59);g5();sl(407);c5();sl(231);b4();sl(53);d4();sl(45);g4();sl(30);e5();sl(349);d5();sl(692);e4();sl(42);a4();sl(43);c5();sl(385);c5();sl(233);c4();sl(76);e4();sl(53);a4();sl(50);c5();sl(63);c5();sl(459);c6();sl(690);e5();sl(54);b5();sl(410);b4();sl(42);e4();sl(22);g4();sl(31);g5();sl(834);a5();sl(460);a5();sl(461);a4();sl(38);c4();sl(31);f4();sl(36);a5();sl(367);a5();sl(459);b5();sl(460);c6();sl(457);g4();sl(32);c4();sl(29);e4();sl(32);e5();sl(381);c5();sl(461);d4();sl(41);c5();sl(888);a4();sl(51);d4();sl(43);f4();sl(43);f5();sl(789);g4();sl(47);d5();sl(187);g4();sl(459);g4();sl(231);g4();sl(41);d4();sl(34);f4();sl(30);g5();sl(383);g4();sl(42);d4();sl(37);f4();sl(402);c4();sl(53);e4();sl(27);g4();sl(44);c5();sl(349);c5();sl(229);c5();sl(240);c4();sl(41);e4();sl(56);g4();sl(48);c5();sl(324);g5();sl(688);b4();sl(65);g5();sl(401);c5();sl(232);b4();sl(39);d4();sl(35);g4();sl(31);e5();sl(142);d5();sl(692);a4();sl(49);f5();sl(419);f5();sl(233);f5();sl(232);a4();sl(40);c4();sl(33);f4();sl(399);c6();sl(689);f5();sl(47);c6();sl(417);g5();sl(230);g4();sl(38);c4();sl(29);f4();sl(25);g5();sl(158);f5();sl(693);c4();sl(56);e5();sl(259);f5();sl(309);g5();sl(305);g4();sl(35);c4();sl(33);e4();sl(32);g5();sl(218);g5();sl(310);e5();sl(309);d4();sl(41);d5();sl(191);d5();sl(489);c5();sl(237);a4();sl(43);d4();sl(35);f4();sl(31);e5();sl(135);d5();sl(693);f4();sl(38);c5();sl(881);a4();sl(43);c4();sl(36);f4();sl(27);f5();sl(818);g4();sl(56);d5();sl(864);g4();sl(55);d4();sl(41);f4();sl(35);g5();sl(795);c4();sl(62);e5();sl(404);c5();sl(457);d4();sl(32);c5();sl(205);e4();sl(232);g4();sl(918);g4();sl(234);a4();sl(233);c5();sl(465);d5();sl(232);c5();sl(231);f4();sl(38);e5();sl(422);a4();sl(465);f4();sl(81);a4();sl(388);f4();sl(921);g4();sl(465);g4();sl(59);a4();sl(182);g4();sl(237);e4();sl(238);d4();sl(235);c4();sl(55);c4();sl(415);d4();sl(463);c4();sl(50);g4();sl(1331);g4();sl(234);a4();sl(231);c4();sl(49);c5();sl(418);d5();sl(239);c5();sl(236);f4();sl(47);e5();sl(426);a4();sl(463);f4();sl(87);a4();sl(379);g4();sl(919);g4();sl(467);g4();sl(63);a4();sl(177);g4();sl(237);e4();sl(240);d4();sl(236);c4();sl(54);c4();sl(417);d5();sl(234);c5();sl(234);c4();sl(51);e4();sl(42);d5();sl(149);c5();sl(233);d5();sl(233);c5();sl(241);b4();sl(55);d5();sl(415);e5();sl(240);d5();sl(236);b4();sl(466);c4();sl(470);d4();sl(76);e4();sl(39);a4();sl(355);a4();sl(63);d5();sl(179);c5();sl(233);d5();sl(235);c5();sl(232);e4();sl(55);a4();sl(37);d5();sl(153);e5();sl(237);g4();sl(58);b4();sl(411);g4();sl(63);b4();sl(172);c5();sl(233);e4();sl(66);g4();sl(49);c5();sl(393);g4();sl(465);f4();sl(58);f4();sl(38);a4();sl(832);c4();sl(56);f4();sl(50);a4();sl(362);g4();sl(238);g4();sl(236);e4();sl(233);g5();sl(466);g5();sl(232);c4();sl(41);e4();sl(37);g5();sl(392);c5();sl(463);d4();sl(59);f4();sl(54);a4();sl(812);a4();sl(58);d4();sl(54);f4();sl(53);a4();sl(763);g4();sl(70);g4();sl(396);d5();sl(234);c5();sl(233);g4();sl(51);d4();sl(38);f4();sl(28);b4();sl(358);a4();sl(235);g4();sl(238);c4();sl(238);e4();sl(59);g4();sl(64);c5();sl(349);d5();sl(242);c4();sl(58);e4();sl(53);c5();sl(128);d5();sl(232);c5();sl(235);d5();sl(232);c5();sl(234);b4();sl(69);d5();sl(401);e5();sl(234);b4();sl(236);c4();sl(462);d4();sl(239);e4();sl(48);a4();sl(201);a4();sl(236);d5();sl(235);c5();sl(240);d5();sl(234);e4();sl(51);a4();sl(44);c5();sl(146);d5();sl(231);e5();sl(43);g4();sl(36);b4();sl(391);b4();sl(36);g4();sl(198);c5();sl(463);e4();sl(45);g4();sl(47);c5();sl(379);d5();sl(468);f4();sl(37);f4();sl(33);c5();sl(863);c4();sl(55);f4();sl(34);c5();sl(376);d5();sl(230);e5();sl(232);e4();sl(40);f5();sl(433);e5();sl(232);d5();sl(234);c4();sl(32);e4();sl(53);d5();sl(395);c5();sl(458);d4();sl(42);f4();sl(42);c5();sl(843);a4();sl(45);d4();sl(40);f4();sl(43);c5();sl(570);g4();sl(231);g4();sl(41);a4();sl(34);a5();sl(167);g4();sl(40);g4();sl(35);g5();sl(165);g4();sl(50);g5();sl(191);g4();sl(50);a4();sl(46);a5();sl(141);g4();sl(48);d4();sl(46);f4();sl(47);e5();sl(109);g4();sl(49);d4();sl(48);f4();sl(160);c5();sl(230);g4();sl(51);d4();sl(46);f4();sl(146);c4();sl(48);c4();sl(46);e4();sl(47);g4();sl(48);c5();sl(289);c5();sl(233);c5();sl(235);c4();sl(52);e4();sl(52);g4();sl(49);c5();sl(323);g5();sl(459);b4();sl(231);b4();sl(41);g5();sl(419);c5();sl(230);b4();sl(39);d4();sl(34);g4();sl(24);e5();sl(149);d5();sl(690);a4();sl(43);e4();sl(33);a4();sl(54);c5();sl(343);c5();sl(232);c5();sl(231);a4();sl(39);e4();sl(35);a4();sl(41);c5();sl(363);c6();sl(461);g4();sl(232);e5();sl(37);b5();sl(441);e5();sl(231);g4();sl(39);b4();sl(31);e4();sl(398);g5();sl(461);f4();sl(231);c5();sl(35);a5();sl(432);c5();sl(42);a5();sl(194);a4();sl(37);c4();sl(32);f4();sl(175);c5();sl(37);a5();sl(429);a5();sl(234);e4();sl(233);b5();sl(459);c6();sl(236);g4();sl(42);c4();sl(27);e4();sl(32);e5();sl(371);c5();sl(459);d4();sl(48);f4();sl(34);c5();sl(230);f4();sl(37);c5();sl(281);f4();sl(47);c5();sl(262);a4();sl(37);d4();sl(31);f4();sl(51);c5();sl(216);d5();sl(308);e5();sl(307);g4();sl(46);g4();sl(37);b4();sl(44);a5();sl(112);g4();sl(51);g4();sl(419);g4();sl(35);g4();sl(200);g4();sl(36);d4();sl(45);f4();sl(48);b4();sl(50);g5();sl(74);g4();sl(41);d4();sl(47);f4();sl(384);g4();sl(73);d4();sl(61);f4();sl(107);g4();sl(462);g4();sl(80);c5();sl(61);d5();sl(99);c5();sl(58);d5();sl(179);g4();sl(50);c5();sl(53);d5();sl(371);g4();sl(63);c5();sl(65);d5();sl(110);b4();sl(49);d5();sl(50);f5();sl(147);a4();sl(54);b4();sl(56);d5();sl(52);f5();sl(84);f5();sl(234);a4();sl(466);a4();sl(79);f5();sl(394);a4();sl(53);d5();sl(192);f5();sl(234);g4();sl(47);c5();sl(39);g5();sl(388);g4();sl(56);c5();sl(39);g5();sl(376);g4();sl(49);c5();sl(47);g5();sl(376);g4();sl(54);c5();sl(63);g5();sl(352);a4();sl(50);g5();sl(415);a4();sl(239);a4();sl(57);f5();sl(185);a4();sl(463);a4();sl(461);g4();sl(74);g4();sl(396);g4();sl(57);a4();sl(182);a4();sl(233);g4();sl(49);a4();sl(422);g4();sl(71);g4();sl(166);d5();sl(233);c4();sl(53);c4();sl(52);d5();sl(369);c4();sl(48);c4();sl(32);c5();sl(395);c4();sl(63);c4();sl(65);d5();sl(341);c4();sl(54);c4();sl(51);d5();sl(365);f4();sl(48);c5();sl(419);f4();sl(462);f4();sl(87);g5();sl(382);g4();sl(60);g4();sl(42);b4();sl(39);d5();sl(37);g5();sl(301);g4();sl(462);g4();sl(461);g4();sl(54);b4();sl(43);d4();sl(45);g4();sl(27);b4();sl(54);d5();sl(32);g5();sl(683);c4();sl(45);c4();sl(39);c6();sl(154);g5();sl(58);a5();sl(176);b5();sl(233);c6();sl(233);b4();sl(46);g5();sl(195);a5();sl(233);b5();sl(234);g5();sl(240);a4();sl(56);a5();sl(186);e5();sl(49);g5();sl(191);a5();sl(461);g4();sl(67);d5();sl(173);e5();sl(232);g5();sl(239);e5();sl(233);f4();sl(53);a5();sl(186);f5();sl(53);g5();sl(188);a5();sl(237);c6();sl(233);e4();sl(49);g5();sl(189);f5();sl(234);e5();sl(237);g5();sl(232);d4();sl(71);e5();sl(170);e5();sl(65);f5();sl(172);d5();sl(63);e5();sl(177);c5();sl(66);d5();sl(175);d4();sl(60);c5();sl(180);c5();sl(66);d5();sl(183);b4();sl(67);c5();sl(172);g4();sl(59);b4();sl(54);d5();sl(49);g5();sl(49);a4();sl(50);g4();sl(449);g4();sl(80);g4();sl(157);e4();sl(65);g4();sl(57);c5();sl(59);g4();sl(61);g4();sl(60);g4();sl(55);g4();sl(132);c5();sl(70);g4();sl(170);c5();sl(75);g4();sl(161);c4();sl(62);c4();sl(1088);g4();sl(64);c4();sl(54);e4();sl(62);c5();sl(297);g5();sl(462);b4();sl(241);b4();sl(64);g5();sl(406);c5();sl(240);b4();sl(66);d4();sl(37);g4();sl(30);e5();sl(112);e5();sl(461);d5();sl(235);a4();sl(462);e4();sl(53);a4();sl(40);c5();sl(383);a4();sl(49);e4();sl(45);a4();sl(39);c5();sl(341);c6();sl(460);g4();sl(238);e5();sl(55);b5();sl(412);e5();sl(236);g4();sl(46);b4();sl(33);e4();sl(161);a5();sl(463);g5();sl(59);a5();sl(179);f4();sl(688);c5();sl(45);a5();sl(197);a4();sl(48);c4();sl(28);f4();sl(26);a5();sl(379);b5();sl(468);e4();sl(42);c6();sl(429);c5();sl(38);g5();sl(199);c5();sl(45);g5();sl(193);g4();sl(42);c4();sl(32);e4();sl(168);e5();sl(46);c5();sl(47);g5();sl(373);c5();sl(458);c5();sl(688);a4();sl(40);d4();sl(28);f4();sl(25);a4();sl(26);d5();sl(26);f5();sl(783);g4();sl(46);g4();sl(27);b4();sl(27);d5();sl(144);g4();sl(486);g4();sl(43);d4();sl(47);f4();sl(38);g4();sl(36);g4();sl(76);g4();sl(48);d4();sl(44);f4();sl(43);b4();sl(45);d5();sl(45);g5();sl(252);g4();sl(48);d4();sl(47);f4();sl(47);c4();sl(50);c4();sl(289);e4();sl(50);g4();sl(54);c5();sl(363);c5();sl(230);c5();sl(240);g4();sl(59);c4();sl(47);e4();sl(51);g5();sl(50);c5();sl(264);b4();sl(50);g5();sl(417);c5();sl(33);b4();sl(201);e5();sl(254);e5();sl(460);d5();sl(44);b4();sl(41);d4();sl(36);g4();sl(579);c5();sl(37);f5();sl(197);f4();sl(232);f5();sl(231);f5();sl(457);a4();sl(38);c4();sl(21);f4();sl(26);f5();sl(384);c6();sl(462);g4();sl(233);f5();sl(35);c6();sl(426);g5();sl(232);g4();sl(41);c4();sl(21);f4();sl(26);g5();sl(149);g5();sl(238);f5();sl(458);c4();sl(39);c4();sl(193);c5();sl(36);e5();sl(208);f5();sl(460);b4();sl(43);b4();sl(45);g5();sl(225);b4();sl(35);g5();sl(281);b4();sl(57);e5();sl(273);a4();sl(37);a4();sl(25);d5();sl(177);a4();sl(50);d5();sl(412);a4();sl(53);c5();sl(180);g4();sl(50);g4();sl(47);e5();sl(381);d5();sl(464);f4();sl(40);f4();sl(29);c5();sl(854);a4();sl(64);c4();sl(402);d5();sl(230);e5();sl(229);g4();sl(30);f5();sl(431);g5();sl(231);a5();sl(231);g4();sl(31);d4();sl(28);f4();sl(408);b5();sl(459);c4();sl(34);g4();sl(23);g5();sl(27);c6();sl(1757);c4();sl(54);g4();sl(35);c5();sl(26);e5();