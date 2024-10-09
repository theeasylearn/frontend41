let $ = function (id) {
    let tagId = document.getElementById(id);
    return tagId;
}
let textOf = function (id, content = null) {
    console.log(id, content);
    if (content === null)
        return $(id).value;
    else
        $(id).value = content;
}