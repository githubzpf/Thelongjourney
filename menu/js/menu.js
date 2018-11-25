let menus = "";
for(let i = 0, len = data.data.length; i < len; i++) {
    let list = "";
    if(data.data[i].length > 0){
        for(let n = 0, lens = data.data[i].length; n < lens; n++) {
            if(data.data[i][n].isLeaf == 1) {
                list += "<li class = 'onelist'><p class='fon'><i class='fa fa-address-book'></i></p><p class='navtxt'>" + data.data[i][n].folderName + "</p><a class ='skip' href=" + data.data[i][n].folderUrl + ">" + "</a></li>";
            } else {
                list += "<li class = 'onelist'><p class='fon'><i class='fa fa-address-book'></i></p><p class='navtxt'>" + data.data[i][n].folderName + "</p></li>";
            }
        }
        menus += "<p class='tit'><b>" + data.data[i][0].appName + "</b></p><ul class='oneMenu'>" + list + "</ul>";
    }
}
$("#box").append(menus);

function traverse(obj, tag, cla) {
    let list = "";
    for (let i = 0, len = obj.length; i < len; i++){
        if(obj[i].isLeaf == 1){ //判断是否跳转
            list += "<li class =" + cla + "><p class='fon'><i class='fa fa-address-book'></i></p><p class='navtxt'>" + obj[i].folderName + "</p><a class ='skip' href=" + obj[i].folderUrl + ">" + "</a></li>";
        } else {
            list += "<li class =" + cla + "><p class='fon'><i class='fa fa-address-book'></i></p><p class='navtxt'>" + obj[i].folderName + "</p></li>";
        }
    }
    tag.append(list);
}

//二级
let twoTit = "";
let twoNo = "a";
let parindexs;
$('#box').on("click",'.onelist', function() {
    let index = $(this).index();
    $('.oneBor').removeClass("oneBor");
    $(".twoMenu").remove();
    $(".threeMenu").remove();
    let parindex = ($(this).parent(".oneMenu").index() - 1) / 2;
    if( index == twoNo && parindexs == parindex) {
        twoNo = "a";
    } else {
        twoNo = index;
        $(this).addClass("oneBor");
        let twoMenu = "<ul class='twoMenu'></ul>"
        $(".oneMenu").eq(parindex).after(twoMenu);
        twoTit = data.data[parindex][index].children;
        if(twoTit){
            traverse(twoTit,$('.twoMenu'),"twolist");
        }
    }
    parindexs = parindex;
})

//三级
let threeNo = "a";
$('#box').on("click",'.twolist', function() {
    $('.twoBor').removeClass("twoBor");
    $(".threeMenu").remove();
    let index = $(this).index();
    if(threeNo == index) {
    threeNo = "a";
    } else {
        threeNo = index;
        $(this).addClass("twoBor");
        let threeMenu = "<ul class='threeMenu'></ul>";
        $(".twoMenu").after(threeMenu);
        if(twoTit[index].children){
            traverse(twoTit[index].children,$('.threeMenu'),"threelist");
        }
    }
})