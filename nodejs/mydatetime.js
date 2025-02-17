function getDate()
{
    //should return today's date in d-m-Y format
    let date = new Date();
    let today = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return today;
}
function getTime()
{
    //should return today's date in d-m-Y format
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}
module.exports.getDate = getDate;
module.exports.getTime = getTime;