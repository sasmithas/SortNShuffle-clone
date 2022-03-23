function sort() {
   $('ul').html($('ul li').sort(sortElements))
}
function sortElements(li1,li2) {
    const a = parseInt($(li1).data('order'));
	const b = parseInt($(li2).data('order'));	
	return a - b;
}

function shuffle() {
    let ul = document.querySelector('ul');
    let li =  ul.children;
    for (var i = li.length; i >= 0; i--) {
        ul.appendChild(li[Math.random() * i | 0]);
    }
}
