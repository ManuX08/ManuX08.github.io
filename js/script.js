/* jQuery Scroll to ID */
function scroll_to(id) {
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top
    }, 'slow');
}

function getCreatorsAge() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var nascita = 2000;
    if (date.getMonth()+1 < 8){
        nascita += 1;
    } else {
        if (date.getMonth()+1 == 8 && date.getDay() < 8) {
            nascita += 1;
        } else {
            nascita += 0;
        }
    }
    return yyyy - nascita;
}