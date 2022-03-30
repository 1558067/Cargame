'use strict';
let perm = [];
let value = 0;
/*
　道の凸凹を作成する。パーリンノイズを使用する。
  参考

  ・空文について
  空文 - JavaScript | MDN
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/Empty
  
  while文の中身はない。中身がないので空文となる。
  
  ・やりたいこと
  配列permには重複なしの0~255の整数を入れたい。includesによって重複チェックをしている。
  
  ・includesの返り値がtrue、つまりランダムに生成した整数が既存の配列permのいずれかの要素と重複していた
  このときwhile文の条件式がtrueになるのでもう一度整数の乱数が生成されincludesによる重複チェックが行われる
  
  ・includesの返り値がfalse、つまりランダムに生成した整数が既存の配列permのすべての要素と重複していなかった
  このときwhile文は終了する。while文の条件式で使ったvalは生きている。なのでvalを配列permに新規追加している。
  */
while (perm.length < 255) {
  while (perm.includes(value = Math.floor(Math.random() * 255)));
  perm.push(value);
}
//線形補間を行う。
let lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;

function road(x) {
  x = x * 0.01 % 255;
  return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}