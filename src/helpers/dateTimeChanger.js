
function dateTimeChanger(dateTime) {

     // data object gebruiken
    return new Date(dateTime).toLocaleDateString('nl-NL', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

export {dateTimeChanger};

