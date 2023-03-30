function GroupSearch() {

    //Code Academy lesson shifts
    var morning = 'Your classes are in the morning shift.';
    var afternoon = 'Your classes are in the afternoon shift.';
    var evening = 'Your classes are in the evening shift.';
    var weekend = 'Your classes are in the weekend shift.';
    var nogroup = 'Group not found.';


    var input = document.getElementById('input').value;
    var getgroup = Number(input.slice(-3, -2));
    if (input === '') {
        alert('Enter a group name.....')
    }
    switch (getgroup) {
        case 1:
            var groupshifts = document.getElementById('groupshifts');
            groupshifts.innerHTML = morning;
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1417918045827-f574d241e2cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMGNpdHl8ZW58MHx8MHx8&w=1000&q=80)'
            break;
        case 2:
            var groupshifts = document.getElementById('groupshifts');
            groupshifts.innerHTML = afternoon;
            document.body.style.backgroundImage = 'url(https://images.fineartamerica.com/images-medium-large-5/new-york-city-summer-afternoon-vivienne-gucwa.jpg)'
            break;
        case 3:
            var groupshifts = document.getElementById('groupshifts');
            groupshifts.innerHTML = evening;
            document.body.style.backgroundImage = 'url(https://img5.goodfon.com/wallpaper/nbig/a/92/gorod-zakat-vecher-solntse-oblaka-city-doma.jpg)'
            break;
        case 5:
            var groupshifts = document.getElementById('groupshifts');
            groupshifts.innerHTML = weekend;
            document.body.style.backgroundImage = 'url(https://www.staysure.co.uk/wp-content/uploads/2021/02/the-shambles-york.jpg)'
            break;
        default:
            var groupshifts = document.getElementById('groupshifts');
            alert('Enter a group name.....')
            groupshifts.innerHTML = nogroup;
            document.body.style.backgroundImage = 'url(https://cdn.wallpapersafari.com/21/35/Aa7zE5.jpg)';
            break;
    }
}
