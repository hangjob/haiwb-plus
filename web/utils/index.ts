/**
 * 跳转详情页数据
 * @param row
 */
const getDelPath = (row:any)=>{
    return '/det/' + (row.router || row.id);
}


const blogDirectory = {

}

export {
    getDelPath
}
