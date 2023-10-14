
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
} 

const getValueFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
export {
    getValueFromLocalStorage,
    removeFromLocalStorage,
    saveToLocalStorage
}