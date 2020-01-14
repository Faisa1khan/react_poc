
export function stringToArrayBuffer(s){
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i=0 ; i<s.length ; i++)
        view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}