var listItems = document.querySelectorAll('#codeList li');

for (var i = 0; i < listItems.length; i++) {
    var trashcanIcon = document.createElement('img')
    trashcanIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png')
    trashcanIcon.classList.add('listIcon')
    listItems[i].appendChild(trashcanIcon)
}

addEventListener('click', changeProp, false);

function changeProp(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;

    if(tParent.tagName == 'LI') {
        tParent.remove();
    } else if (tParent.tagName == 'UL') {
        target.classList.add('selected')
    } else {
        console.log('did not work')
    }
}

addEventListener('dblclick', redoItem , false);

function redoItem(e) {
    var target = getTarget(e);
    
    if (target.classList.contains('selected')) {
        target.classList.remove('selected');
    } else {
        target.classList.add('selected');
    }
}