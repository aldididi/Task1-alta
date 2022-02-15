var autoedom = document.querySelectorAll('input[type="radio"]');
var score = 3;
for (var i = 0; i < autoedom.length; i++) {
    if (autoedom[i].value == score) {
        autoedom[i].checked = true;
    }
}

