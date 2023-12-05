import lunisolar from 'lunisolar'

const del = '/det/'
const getDelPath = (row: any) => {
    return del + (row.router || row.id);
}

const toRouter = (row:any) => {
    return '/'+row.id
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


function delHtmlTag(str:string){
    return str.replace(/<[^>]+>/g,"");  //正则去掉所有的html标记
}

const blogDirectory = {}

export {
    getDelPath,
    toRouter,
    lunisolar,
    arrGroup,
    uniqueFunc,
    delHtmlTag,
}
