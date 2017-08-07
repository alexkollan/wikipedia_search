const wikiApi = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';


function wikiSearch(term) {
    $.ajax({
        url: wikiApi + term + '&format=json&callback=?',
        method: 'GET',
        dataType: "json",
        success: function(data, status, JqXHR) {
            console.log(data);
            $('#content').html('');
            $('#content').css({
                'width': '0%'
            })
            $('#content').hide();

            for (let i = 0; i <= data[1].length - 1; i++) {
                $('#content').append(`
                    <div class="group">
                    <h4 class="rtitle">${data[1][i]}</h4>
                    <div class="rcontent">${data[2][i]}</div>
                    <a href="${data[3][i]}" class="goTobtn">Go to Article Page</a>
                    </div>
                    
                `);
            }
            $('#content').show();
            $('#content').animate({
                width: '60%'
            })
        }
    });
}

var term;
$('.srchbtn').on('click', function() {
    term = $('#inputf').val();
    if (term == '') {
        alert(`Please don't leave me empty... :(`)
    } else {
        wikiSearch(term);
    }

})
$('.rndbtn').on('click', function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
})