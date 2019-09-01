
let searchM = document.getElementById('searchMove');
let searchIn = document.getElementById('search');
searchM.addEventListener('mouseenter',search);
searchM.addEventListener('mouseleave',search);

searchIn.addEventListener('blur',hideInput);
let timer1;
function search(){
    /**
     * 问题：定时器未清楚 引起事件错乱
     */
    clearInterval(timer1);
    if (searchM.offsetWidth >80 ) {
        searchM.style.width = '80px';
        // document.addEventListener('click',hideInput);
        // let sub = setInterval(function () {
        //     if (searchM.offsetWidth > 80) {
        //         searchM.style.width = (searchM.offsetWidth - 10) + 'px';
        //         console.log(searchM.offsetWidth);
        //     }else{
        //         // 清楚定时器
        //         clearInterval(sub);
        //     }
        // }, 1);
    } 

    else if (searchM.offsetWidth === 80) {
        searchM.style.width = '250px';
        
        timer1 = setTimeout(() => searchIn.focus(),500);
        // document.addEventListener('click',hideInput);
        // let add = setInterval(function () {
        //     if (searchM.offsetWidth < 250) {
        //         searchM.style.width = (searchM.offsetWidth + 10) + 'px';
        //     }else{
        //         // 清除定时器
        //         clearInterval(add);
        //     }
        // }, 1);
        
    }
    

    // searchM.style.width = searchM.offsetWidth > 60 ? '60px': '250px';
    // setInterval
}

function hideInput(e){
    console.log('hide');
    searchM.style.width = '80px';
    // e.stopPropagation();
}


/**
 * 测拉栏
 */
var menu = document.getElementById('menu');
var sidebar = document.getElementById('sidebar_right');
var body_mask = document.getElementById('body_mask');

menu.addEventListener('click', sidebar_show);
function sidebar_show(e){
    /**
     * 1.切换遮罩和bar 状态
     * 2.阻止事件冒泡
     */
    sidebar.style.width = `350px`;
    
    body_mask.style.display = 'block';
    body_mask.addEventListener('click', sidebar_hide);
    e.stopPropagation();
}
function sidebar_hide(e){
    // let timer = setInterval(
    //     function(){
            
    //     }
    // ,1)
    sidebar.style.width = `0px`;
    body_mask.style.display = 'none';
    console.log('sub');
    e.stopPropagation();
}

