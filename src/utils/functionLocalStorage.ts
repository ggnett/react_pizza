import { itemsType } from "../redux/slices/cartSlice"

export const getLocalStorageItems = () => {
    const json = localStorage.getItem('cart')
    if (json) {
        const data = JSON.parse(json)
        return data
    }
    return []
}

export const getLocalStorageCost = () => {
    const items:itemsType[] = getLocalStorageItems()
    if (items) {
        let data = 0
        items.forEach(item => {data+=item.price*item.count})
        return data
    }
    return 0
}

export const getLocalStorageCount = () => {
    const items:itemsType[] = getLocalStorageItems()
    if (items) {
        let data = 0
        items.forEach(item => {data+=item.count})
        return data
    }
    return 0
}