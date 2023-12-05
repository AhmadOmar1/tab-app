
export function storeValue(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function getValue(key: string) {
    return localStorage.getItem(key);
}

export function removeValue(key:string) {
    localStorage.removeItem(key);
}
