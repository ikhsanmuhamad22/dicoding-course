function fibonacci(n, arr = [0, 1]) {
  if (n === 0) return (arr = [0]);
  if (arr.length > n) return arr;
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibonacci(n, arr);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
