$(window).on('load', function(){
    $('.loading').delay(1000).fadeOut('slow');
});
$(document).ready(function () {
    $('#input-menu').click(function () {
        $('#body-div').addClass('background-opacity');
        $(this).addClass('hide-item');
        $('#model').removeClass('hide-item');
        $('#model').addClass('show-item');
    });

    $('main').click(function () {
        $('#body-div').removeClass('background-opacity');
        $('#model').removeClass('show-item');
        $('#model').addClass('hide-item');
        $('#input-menu').removeClass('hide-item');
        $('#input-menu').addClass('show-item');
    });

    $('.btn-close').click(function () {
        $('#body-div').removeClass('background-opacity');
        $('#model').removeClass('show-item');
        $('#model').addClass('hide-item');
        $('#input-menu').removeClass('hide-item');
        $('#input-menu').addClass('show-item');
    });
    
    fetch('https://gnews.io/api/v4/search?q=example&token=e73f1fdcc48aee4d858532734a6eb70e')
    .then(function (response) {
        return response.json();
    })
        .then(function (data) {
            var html = "";
            for(var i = 0; i < data.articles.length; i++) {
            html += '<div class="news-content-xs news-content-sm news-content-xl news-content-xxl">';
            html += '<img class="image-xs image-sm image-xl image-xxl" src="' + data.articles[i].image + '">';
            html += '<div class="news-content-body-sm">';
            html += '<a href="' + data.articles[i].url + '" target="_blank"><h3>' + data.articles[i].title + '</h3></a><br>';
            html += '<p>' + data.articles[i].description + '</p><br>';
            html += '<p>' + data.articles[i].publishedAt + '</p>';
            html += '<p>Name: ' + data.articles[i].source.name + '</p>';
            html += '<p>Url: ' + '<a href="' + data.articles[i].source.url + '" target="_blank">' + data.articles[i].source.url + '</a></p>';
            html += '</div>';
            html += '</div>';
        }
        $('.newsList').append(html);
    });
    $('#search-btn').click(function() {
        var keyWord = $('#input-model').val();
        var searchInput = 'https://gnews.io/api/v4/search?q=' + keyWord + '&token=e73f1fdcc48aee4d858532734a6eb70e';
        fetch(searchInput)
        .then(function (rs) {
            return rs.json();
        })
        .then(function (dt) {
            var html2 = "";
            for(var i = 0; i < dt.articles.length; i++) {
                html2 += '<div class="news-content-xs news-content-sm news-content-xl news-content-xxl">';
                html2 += '<img class="image-xs image-sm image-xl image-xxl" src="' + dt.articles[i].image + '">';
                html2 += '<div class="news-content-body-sm">';
                html2 += '<a href="' + dt.articles[i].url + '" target="_blank"><h3>' + dt.articles[i].title + '</h3></a><br>';
                html2 += '<p>' + dt.articles[i].description + '</p><br>';
                html2 += '<p>' + dt.articles[i].publishedAt + '</p>';
                html2 += '<p>Name: ' + dt.articles[i].source.name + '</p>';
                html2 += '<p>Url: ' + '<a href="' + dt.articles[i].source.url + '" target="_blank">' + dt.articles[i].source.url + '</a></p>';
                html2 += '</div>';
                html2 += '</div>';
            }
            $('.newsList').html(html2);

            $('#body-div').removeClass('background-opacity');
            $('#model').removeClass('show-item');
            $('#model').addClass('hide-item');
            $('#input-menu').removeClass('hide-item');
            $('#input-menu').addClass('show-item');
            $('#input-model').val('');
        });
    });  
});