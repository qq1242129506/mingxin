sleep(100);var window = floaty.window(<frame><vertical><button id="btn" text='暂停'/><horizontal><button id="speedLow" text='减速'w="80"/><button id="speedHigh" text='加速'w="80"/></horizontal><horizontal><button id="speed" text='x1'w="80"/><button id="stop" text='停止'w="80"/></horizontal></vertical></frame>);window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.myEngine().forceStop()})
var s=1;var speedControl=1;var time=400;var time1=200;var time2=800;
setScreenMetrics(1080, 2340);//默认分辨率，以下按键位置基于此分辨率
var x=[410,680,950,1220,1490,1760,2030];
var y=[980,870,760];
function ran(){return Math.random()*20-10}
function pre(a,b,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(a,b,c)}
function c4(t) {pre(x[0]+ran(),y[0]+ran(),t)}
function d4(t) {pre(x[1]+ran(),y[0]+ran(),t)}
function e4(t) {pre(x[2]+ran(),y[0]+ran(),t)}
function f4(t) {pre(x[3]+ran(),y[0]+ran(),t)}
function g4(t) {pre(x[4]+ran(),y[0]+ran(),t)}
function a4(t) {pre(x[5]+ran(),y[0]+ran(),t)}
function b4(t) {pre(x[6]+ran(),y[0]+ran(),t)}
function c5(t) {pre(x[0]+ran(),y[1]+ran(),t)}
function d5(t) {pre(x[1]+ran(),y[1]+ran(),t)}
function e5(t) {pre(x[2]+ran(),y[1]+ran(),t)}
function f5(t) {pre(x[3]+ran(),y[1]+ran(),t)}
function g5(t) {pre(x[4]+ran(),y[1]+ran(),t)}
function a5(t) {pre(x[5]+ran(),y[1]+ran(),t)}
function b5(t) {pre(x[6]+ran(),y[1]+ran(),t)}
function c6(t) {pre(x[0]+ran(),y[2]+ran(),t)}
function d6(t) {pre(x[1]+ran(),y[2]+ran(),t)}
function e6(t) {pre(x[2]+ran(),y[2]+ran(),t)}
function f6(t) {pre(x[3]+ran(),y[2]+ran(),t)}
function g6(t) {pre(x[4]+ran(),y[2]+ran(),t)}
function a6(t) {pre(x[5]+ran(),y[2]+ran(),t)}
function b6(t) {pre(x[6]+ran(),y[2]+ran(),t)}
function t1() {while (s != 1) {sleep(100)};sleep(time/speedControl)}//默认间隔-
function t2() {sleep(time1/speedControl)}//较短间隔~
function t3() {sleep(time2/speedControl)}//较长间隔,
function t4() {sleep(100/speedControl)}//自定义间隔*点一下隔100ms
a5();t1();a5();t2();a5();t2();a5();t2();g5();t1();t2();a5();t3();t2();t2();e5();t1();g5();t1();g5();t2();g5();t2();g5();t1();e5();t1();g5();t3();t3();d5();t1();d5();t2();d5();t2();d5();t1();d5();t2();d5();t2();d5();t1();d5();t1();d5();t3();d5();t1();d5();t1();g5();t1();f5();t1();e5();t3();t3();a5();t1();a5();t2();a5();t2();a5();t1();g5();t2();a5();t2();a5();t3();t3();g5();t1();g5();t2();g5();t2();g5();t1();g5();t2();a5();t2();g5();t3();t2();a5();t1();d5();t1();d5();t2();d5();t2();d5();t1();d5();t1();d5();t1();d5();t2();e5();t2();d5();t1();t2();a4();t2();b4();t1();b4();t3();a5();t2();g5();t2();a4();t3();t3();d5();t1();d5();t1();d5();t1();d5();t2();c5();t2();d5();t2();e5();t2();d5();t3();t2();e5();t1();d5();t1();c5();t2();d5();t2();c5();t2();b4();t2();a4();t3();t2();a4();t1();d5();t3();d5();t1();d5();t1();d5();t1();d5();t2();d5();t2();c5();t1();d5();t1();g5();t1();f5();t1();e5();t1();d5();t2();e5();t2();e5();t3();t3();d5();t1();d5();t2();d5();t2();d5();t1();d5();t2();d5();t2();c5();t1();d5();t3();c5();t2();d5();t2();e5();t1();d5();t1();c5();t1();b4();t2();c5();t2();a4();t3();t3();a4();t1();d5();t2();d5();t2();d5();t1();e5();t1();f5();t1();f5();t2();g5();t2();f5();t1();g5();t1();a5();t1();a5();t1();c6();t1();b5();t1();a5();t3();t3();a5();t3();a5();t3();e5();t1();a5();t1();a5();t2();a5();t2();g5();t1();a5();t1();b5();t1();g5();t1();t3();t2();e5();t1();f5();t3();f5();t1();t2();f5();t2();g5();t1();f5();t3();f5();t2();f5();t2();e5();t1();d5();t1();e5();t1();e5();t1();t3();t2();a5();t3();a5();t3();e5();t1();a5();t3();a5();t2();a5();t2();g5();t1();a5();t1();b5();t1();g5();t1();t3();t2();e5();t1();c6();t2();c6();t2();c6();t3();c6();t2();d6();t2();b5();t1();a5();t1();g5();t1();c6();t2();b5();t2();a5();t3();t3();t3();t3();a5();t1();a5();t2();a5();t2();a5();t2();g5();t1();t2();a5();t3();t2();t2();e5();t1();g5();t1();g5();t2();g5();t2();g5();t1();e5();t1();g5();t3();t3();d5();t1();d5();t2();d5();t2();d5();t1();d5();t2();d5();t2();d5();t1();d5();t1();d5();t3();d5();t1();d5();t1();g5();t1();f5();t1();e5();t3();t3();a5();t1();a5();t2();a5();t2();a5();t1();g5();t2();a5();t2();a5();t3();t3();g5();t1();g5();t2();g5();t2();g5();t1();g5();t2();a5();t2();g5();t3();t2();a5();t1();d5();t1();d5();t2();d5();t2();d5();t1();d5();t1();d5();t1();d5();t2();e5();t2();d5();t1();t2();a4();t2();b4();t1();b4();t3();a5();t2();g5();t2();a4();t3();t3();d5();t1();d5();t1();d5();t1();d5();t2();c5();t2();d5();t2();e5();t2();d5();t3();t2();e5();t1();d5();t1();c5();t2();d5();t2();c5();t2();b4();t2();a4();t3();t2();a4();t1();d5();t3();d5();t1();d5();t1();d5();t1();d5();t2();d5();t2();c5();t1();d5();t1();g5();t1();f5();t1();e5();t1();d5();t2();e5();t2();e5();t3();t3();d5();t1();d5();t2();d5();t2();d5();t1();d5();t2();d5();t2();c5();t1();d5();t3();c5();t2();d5();t2();e5();t1();d5();t1();c5();t1();b4();t2();c5();t2();a4();t3();t3();a4();t1();d5();t2();d5();t2();d5();t1();e5();t1();f5();t1();f5();t2();g5();t2();f5();t1();g5();t1();a5();t1();a5();t1();c6();t1();b5();t1();a5();t3();t3();a5();t3();a5();t3();e5();t1();a5();t1();a5();t2();a5();t2();g5();t1();a5();t1();b5();t1();g5();t1();t3();t2();e5();t1();f5();t3();f5();t1();t2();f5();t2();g5();t1();f5();t3();f5();t2();f5();t2();e5();t1();d5();t1();e5();t1();e5();t1();t3();t2();a5();t3();a5();t3();e5();t1();a5();t3();a5();t2();a5();t2();g5();t1();a5();t1();b5();t1();g5();t1();t3();t2();e5();t1();c6();t2();c6();t2();c6();t3();c6();t2();d6();t2();b5();t1();a5();t1();g5();t1();c6();t2();b5();t2();a5();t3();t3();t3();t3();a5();t1();t2();a5();t2();e5();t1();g5();t1();a5();t1();a5();t1();c5();t1();b5();t1();a5();t1();a5();t1();g5();t2();a5();t2();g5();t2();f5();t2();e5();t3();t3();d5();t1();t2();d5();t2();d5();t1();d5();t1();d5();t1();d5();t2();d5();t2();d5();t1();c5();t2();d5();t2();e5();t1();e5();t1();g5();t1();d5();t1();e5();t3();t3();a5();t1();t2();a5();t2();e5();t1();g5();t1();a5();t1();a5();t2();a5();t2();c6();t1();b5();t1();a5();t1();a5();t1();g5();t2();a5();t2();g5();t2();f5();t2();e5();t3();t2();t2();d5();t2();d5();t1();t2();d5();t2();d5();t1();e5();t1();f5();t1();f5();t2();f5();t2();f5();t1();g5();t1();a5();t1();a5();t1();b5();t1();g5();t1();a5();t3();t3();
