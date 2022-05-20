export function getLocalStorageData () {
  return JSON.parse(localStorage.getItem('CartList') || '[]')
}

export function setLocalStorageData () {
  return localStorage.setItem("CartList", JSON.stringify(this.$store.state.CartList))
}


// 导出获取 购物车商品 长度 方法 
export function getLocalStorageDataLen () {
  return JSON.parse(localStorage.getItem('CartList')).length
}



// 导出 获取 用户本地的数据 方法 
export function getLocalStorageUserData () {
  return JSON.parse(localStorage.getItem('Userlist') || '[]')
}

//导出 将用户数据 存入 本地的数据 方法  
export function SetLocalStorageUserData () {
  return localStorage.setItem('Userlist', JSON.stringify(this.$store.state.Userlist))
}