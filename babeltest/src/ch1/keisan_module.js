// 足し算と掛け算の関数
function adding(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}

// 外部に公開する
module.exports = {
  'adding': adding,
  'mul': mul,
};
