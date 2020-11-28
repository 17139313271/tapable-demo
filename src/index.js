// import { SyncHook } from '../table/lib';
//
// const hook = new SyncHook(); // 创建钩子对象
// hook.tap('logPlugin', () => console.log('注册了')); // tap方法注册钩子回调
// hook.tap('logPlugin', () => console.log('注册了2')); // tap方法注册钩子回调
// hook.call(); // call方法调用钩子，打印出‘被勾了’三个字


import { SyncBailHook } from '../table/lib';

const hook = new SyncBailHook();
hook.tap('SyncBailHook1', () => console.log(`钩子1`));
hook.tap('SyncBailHook2', () => {console.log(`钩子2`) ; return 1});
hook.tap('SyncBailHook3', () => console.log(`钩子3`));

hook.call(); // 会打印‘钩子1’‘钩子2’‘钩子3’


// // index.js
// import { SyncWaterfallHook  } from '../table/lib';
//
// const hook = new SyncWaterfallHook(["newSpeed"]);
// hook.tap('SyncWaterfallHook1', (speed) => { console.log(`增加到${speed}`); return speed + 100; });
// hook.tap('SyncWaterfallHook2', (speed) => { console.log(`增加到${speed}`); return 5 });
// hook.tap('SyncWaterfallHook3', (speed) => { console.log(`增加到${speed}`); });
//
// hook.call(50); // 打印‘增加到50’‘增加到150’‘增加到200’


// // index.js
// import { SyncLoopHook } from '../table/lib';
//
//
// let index = 0;
// const hook = new SyncLoopHook();
// hook.tap('startPlugin1', () => {
//     console.log(`执行`);
//     if (index < 5) {
//         index++;
//         return 1;
//     }
// });
//
// hook.tap('startPlugin2', () => {
//     console.log(`执行2`);
// });
//
// hook.call(); // 打印‘执行’6次，打印‘执行2’一次。


// import { AsyncParallelHook } from '../table/lib';
//
//
// const hook = new AsyncParallelHook();
// hook.tapAsync('calculateRoutesPlugin1', (callback) => {
//     setTimeout(() => {
//         console.log('异步事件1');
//         callback('123123');
//     }, 1000);
// });
//
// hook.tapAsync('calculateRoutesPlugin2', (callback) => {
//     setTimeout(() => {
//         console.log('异步事件2');
//         callback();
//     }, 3000);
// });
//
//
// hook.callAsync((rest) => { console.log('最终的回调'+ rest); }); // 会在1s的时候打印‘异步事件1’。2s的时候打印‘异步事件2’。紧接着打印‘最终的回调’


// import { AsyncParallelBailHook } from '../table/lib';
//
//
// const hook = new AsyncParallelBailHook();
// hook.tapAsync('calculateRoutesPlugin1', (callback) => {
//     setTimeout(() => {
//         console.log('异步事件1');
//           callback();
//     }, 1000);
// });
//
// hook.tapAsync('calculateRoutesPlugin2', (callback) => {
//     setTimeout(() => {
//
//         console.log('异步事件2');
//           callback();
//     }, 2000);
// });
//
// hook.callAsync((result) => { console.log('最终的回调',result); }); // 会在1s的时候打印‘异步事件1’,紧接着打印‘最终的回调’,2s的时候打印‘异步事件2’。


// import { AsyncSeriesHook } from '../table/lib';
//
// const hook = new AsyncSeriesHook();
// hook.tapPromise('calculateRoutesPlugin1', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件1');
//             resolve('1111');
//         }, 1000);
//     });
// });
//
// hook.tapPromise('calculateRoutesPlugin2', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件2');
//             resolve();
//         }, 1500);
//     });
// });
//
// hook.promise().then(() => { console.log('最终的回调' ); });
// // 1s过后，打印异步事件1，再过2s（而不是到了第2s，而是到了第3s），打印异步事件2，再立马打印最终的回调。


// import { AsyncSeriesBailHook } from '../table/lib';
//
// const hook = new AsyncSeriesBailHook();
// hook.tapPromise('calculateRoutesPlugin1', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件1');
//             resolve(1);
//         }, 1000);
//     });
// });
//
// hook.tapPromise('calculateRoutesPlugin2', () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件2');
//             resolve(2);
//         }, 2000);
//     });
// });
//
// hook.promise().then(() => { console.log('最终的回调'); });
// // / 1s过后，打印计算路线1，立马打印最终的回调，不会再执行计算路线2了。



// import { AsyncSeriesWaterfallHook } from '../table/lib';
//
// const hook = new AsyncSeriesWaterfallHook(['home']);
// hook.tapPromise('calculateRoutesPlugin1', (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件1', result);
//
//             resolve();
//         }, 1000);
//     });
// });
//
// hook.tapPromise('calculateRoutesPlugin2', (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('异步事件2', result);
//             resolve();
//         }, 2000);
//     });
// });
//
// hook.promise().then((result) => { console.log('最终的回调' + result); });
// // // 1s过后，打印异步事件1 undefined，再过2s打印异步事件2 北京，然后立马打印最终的回调。
