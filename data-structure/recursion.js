// let num = 0
// const example = [3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90,3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90, 3, 4, 6, 1, 10, 30, 20, 7, 8, 70, 90]
// const max = (item, left, right) => {
//   const middle = Math.floor((right + left) / 2)
//   if (left === right) {
//     return item[left]
//   }
//   const u = max(item, left, middle)
//   const v = max(item, middle + 1, right)
//   if (u > v) {
//     return u
//   } else {
//     return v
//   }
// }
// const max1 = (item) => {
//   for (t = item[0], i = 0; i < item.length; i ++) {
//     if (item[i] > t) {
//       t = item[i]
//     }
//   }
// }
// console.time('程序运行时间')
// // console.log('pakizheng1', Date.now())
// max(example, 0, example.length - 1)
// // console.log('pakizheng2', Date.now())
// // console.log(num)
// // max1(example)
// console.timeEnd('程序运行时间')

const a = [5, 4, 3, 2, 1]
const b = []
const c = []
// c = [3, 2, 1]
const move = (origin, destination) => {
  const result = origin.pop()
  destination.push(result)
}
const hanoi = (num, start, mid , end) => {
  if (num === 0) {
    return
  }
  hanoi(num - 1, start, end, mid)
  move(start, end)
  hanoi(num - 1, mid, start, end)
}

hanoi(a.length, a, b, c)
console.log('pakizheng', a, b, c)