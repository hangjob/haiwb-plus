export const useTagColor = (idx:any) => {
    let arrs = ['c-red','c-yellow','c-yellow-2','c-blue','c-blue-2','c-red-2','c-cyan','c-green','c-purple','c-purple-2']
    return arrs[idx] ? arrs[idx] : arrs[0];
}

export function useColorHash(str:string) {
    let lsL = [0.35, 0.5, 0.65];
    let lsS = [0.35, 0.5, 0.65];
    let seed = 131;
    let seed2 = 137;
    let hash = 0;
    str += 'x';
    let MAX_SAFE_INTEGER = parseInt(String(9007199254740991 / seed2));
    for (let i = 0; i < str.length; i++) {
        if (hash > MAX_SAFE_INTEGER) {
            hash = parseInt(String(hash / seed2));
        }
        hash = hash * seed + str.charCodeAt(i);
    }
    let H, S, L;
    H = hash % 359; // note that 359 is a prime
    hash = parseInt(String(hash / 360));
    S = lsS[hash % lsS.length];
    hash = parseInt(String(hash / lsS.length));
    L = lsL[hash % lsL.length];
    H /= 360;
    let q = L < 0.5 ? L * (1 + S) : L + S - L * S;
    let p = 2 * L - q;
    let RGBArray = [H + 1 / 3, H, H - 1 / 3].map(function (color) {
        if (color < 0) {
            color++;
        }
        if (color > 1) {
            color--;
        }
        if (color < 1 / 6) {
            color = p + (q - p) * 6 * color;
        } else if (color < 0.5) {
            color = q;
        } else if (color < 2 / 3) {
            color = p + (q - p) * 6 * (2 / 3 - color);
        } else {
            color = p;
        }
        return Math.round(color * 255);
    });
    let hex = '#';
    RGBArray.forEach(function (value) {
        if (value < 16) {
            hex += 0;
        }
        hex += value.toString(16);
    });
    console.log(hex)
    return hex;
}
