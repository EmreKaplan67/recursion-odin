const fibs = (n) => {
    if(n <= 0) return [];
    if(n === 1) return [0];

    let arr = [0 , 1];
    
    for(let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

const fibsRec = (n) => {
    if(n <= 0) return [];
    if(n === 1) return [0];
    if (n === 2) return [0, 1];

    const arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

const fibsRecMemo = (n, memo = {}) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  if (memo[n]) return memo[n];

  const prev = fibsRecMemo(n - 1, memo);
  memo[n] = [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
  return memo[n];
};

export { fibs, fibsRec, fibsRecMemo };
