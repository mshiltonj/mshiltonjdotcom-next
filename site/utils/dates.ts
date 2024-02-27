function monthNumToString(num: number|string){
  if (typeof num === "string"){
    num = parseInt(num)
  }
  return Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(2000, num - 1))
}

export default {
  monthNumToString
}