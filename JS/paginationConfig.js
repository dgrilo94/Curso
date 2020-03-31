jQuery(document).ready(function () {
    var items = $(".wrapper article");
    var numItems = items.length;
    var perPage = 16;

    items.slice(perPage).hide();

    $('.pages').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });



});