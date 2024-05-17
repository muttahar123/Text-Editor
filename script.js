

var text_bold = document.getElementById('bold');
var italic = document.getElementById('italic');
var underline = document.getElementById('underline');
var capital = document.getElementById('capital');
var align_right = document.getElementById('align_right')
var align_left = document.getElementById('align_left')
var align_centre = document.getElementById('align_centre')
var head = document.getElementById("head");

text_bold.addEventListener('click', function () {
    head.style.fontWeight = "bold";
})

italic.addEventListener('click' , function(){
    head.style.fontStyle = 'italic'
})

underline.addEventListener('click' , function(){
    head.style.textDecoration = 'underline'
})

capital.addEventListener('click' , function(){
    head.style.textTransform = 'capitalize'
})

align_right.addEventListener('click' , function(){
    head.style.textAlign = 'right'
})

align_centre.addEventListener('click' , function(){
    head.style.textAlign = 'center'
})

align_left.addEventListener('click' , function(){
    head.style.textAlign = 'left'
})