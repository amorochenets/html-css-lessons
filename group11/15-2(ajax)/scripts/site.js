function getData(event, backendPath, siteUrl)   {
 event.preventDefault();
    var siteHtml = $('.siteHtml');
    siteHtml.append('Loading...');
    siteHtml.load(backendPath, {site:siteUrl});
};

$(".getSiteBtn").bind("click", function(event) {
	getData(event, 'ajax-grab.php', 'http://i.ua/')
});