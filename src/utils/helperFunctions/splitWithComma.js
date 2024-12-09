export default function splitWithCommas(num) {
  let arr = String(num).split("").reverse();
  let res = [];
  arr.map((elem, index) => {
    if (index % 3 === 0 && index > 0) {
      res.push(",");
    }
    res.push(elem);
  });
  return res.reverse().join("");
}
