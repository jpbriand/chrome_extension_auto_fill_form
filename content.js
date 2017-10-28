
function randString(len) {
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

function randMail() {
    var start = randString(5);
    var domain = randString(5);
    return start + '@' + domain + '.com';
}

function randDecimal() {
    return Math.random() * 1000;
}

function randInteger(max) {
    return Math.round(Math.random() * max) + 1;
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    var input = document.getElementsByTagName('input');

    Array.from(input).forEach(function (element) {
        if ('text' === element.type || 'password' === element.type) {
            element.value = randString(5);
        } else if ('email' === element.type) {
            element.value = randMail();
        } else if ('number' === element.type) {
            element.value = randNumber();
        }
    });

    var select = document.getElementsByTagName('select');
    Array.from(select).forEach(function (element) {
        var options = Array.from(element.getElementsByTagName('option'));
        options.map(option => option.removeAttribute('selected'))

        var optionsLength = options.length;
        var selectedIndex = randInteger(options.length);

        var option = options[selectedIndex];
        if (undefined !== option) {
            option.setAttribute('selected', '');
        }
    })

    var textarea = document.getElementsByTagName('select');
    Array.from(textarea).forEach(function (element) {
        //  element.value = randString(100);
    });
});
