var title = document.querySelectorAll('.title')
var id = document.querySelectorAll('.id span')

for (var i = 0; i < title.length; i++) {
    id[i].innerHTML = i+1
}