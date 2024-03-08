export default function orderByProps(obj, props) {
    const arr = [];
    const objCopy = { ...obj };
    for (let index = 0; index < props.length; index += 1) {
      const key1 = props[index];
      delete objCopy[key1];
      arr.push({ key: key1, value: obj[key1] });
    }
    const sortedArray = (Object.keys(objCopy)).sort();
    for (let index = 0; index < sortedArray.length; index += 1) {
      arr.push({ key: sortedArray[index], value: obj[sortedArray[index]] });
    }
    return arr;
  }