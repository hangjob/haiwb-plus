import lunisolar from 'lunisolar'

const del = '/det/'
const getDelPath = (row: any) => {
    return del + (row.router || row.id);
}

function ishttp(domain: string) {
    let patt = /^http(s)?:\/\/.+/;
    return patt.test(domain);
}

function ishttps(domain: string) {
    return domain.indexOf("https") === 0;
}

const toRouter = (row: any) => {
    if (Object.prototype.toString.call(row) === "[object String]") {
        return row
    } else {
        return '/' + row.id
    }
}


// 分组
const arrGroup = (arr: Array<any>, len: number) => {
    let index = 0;
    let data = [];
    while (index < arr.length) {
        data.push(arr.slice(index, index += len));
    }
    return data;
}

// 去重
function uniqueFunc(arr: Array<any>, id: string) {
    const res = new Map();
    return arr.filter((item) => !res.has(item[id]) && res.set(item[id], 1));
}


function delHtmlTag(str: string) {
    return str.replace(/<[^>]+>/g, "");  //正则去掉所有的html标记
}

const blogDirectory = {}

/**
 * 本地存储 ，一天只能触发一次
 * @param key
 */
function locaOnce(key: string = 'discoverTime') {
    try {
        let startTime: any = localStorage.getItem(key);
        if (startTime && startTime !== " ") {
            startTime = Number(startTime);
        } else {
            localStorage.setItem(key, String(+new Date()));
            return Promise.resolve(true);
        }
        const startTimeMs = new Date(startTime).setHours(0, 0, 0, 0);
        const endTimeMs = new Date().setHours(0, 0, 0, 0);
        const result = startTimeMs !== endTimeMs;
        return Promise.resolve(result);
    } catch (err) {
        return Promise.resolve(false);
    }
}


export {
    getDelPath,
    toRouter,
    lunisolar,
    arrGroup,
    uniqueFunc,
    delHtmlTag,
    ishttp,
    ishttps,
    locaOnce
}
