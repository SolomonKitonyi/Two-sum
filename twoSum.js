let arr = [1,3,4,7,2]
function twoSum(arr,t){
  let set = new Set()
  for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])){
      return [arr[i], t-arr[i]]
    }
    else {
      set.add(t-arr[i])
    }
  }
  return []
}
console.log(twoSum(arr,10))