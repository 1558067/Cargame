'use strict';
// キャンバスの用意
let canvas = document.createElement("canvas");
//2Dグラフィックを描画するためのメソッドやプロパティをもつオブジェクトを返す。
let ctx = canvas.getContext("2d");
//キャンバスのサイズを規定
canvas.width = window.innerWidth - 20;
canvas.height = 400;
//キャンバスをhtmlのbodyに追加
document.body.appendChild(canvas);