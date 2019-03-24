module.exports = function check(str, bracketsConfig) {
 let arr = [];
  arr.push(str[0]);
  for (let i=1; i<str.length; i++) {
    arr.push(str[i]);
    for (let j=0; j<bracketsConfig.length; j++) {
      if (JSON.stringify([arr[arr.length - 2], arr[arr.length - 1]]) === JSON.stringify(bracketsConfig[j])) {
        arr.pop();
        arr.pop();
      }
    }
  }
  return arr.length == 0 ? true : false;    
}
