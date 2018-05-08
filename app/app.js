$(document).ready(function(){
 
    // app html
    app_html="";

    // navbar
    app_html+="<nav class='navbar navbar-expand-lg navbar-light bg-light'>";
    
        app_html+="<a class='navbar-brand' href='#'>menu.me</a>";
            
            app_html+="<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
                app_html+="<span class='navbar-toggler-icon'></span>";
            app_html+="</button>";

            app_html+="<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
                app_html+="<ul class='navbar-nav mr-auto'>";
                app_html+="</ul>";
                // product list
                app_html+="<div id='read-products' class='btn btn-outline-info read-products-button nav-btn'>";
                    app_html+="<span class='glyphicon glyphicon-list'></span> Product List";
                app_html+="</div>";
                // create product
                app_html+="<div id='create-product' class='btn btn-outline-info create-product-button nav-btn'>";
                    app_html+="<span class='glyphicon glyphicon-plus'></span> Create Product";
                app_html+="</div>";
                app_html+="<form class='form-inline my-2 my-lg-0'>";
                    app_html+="<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'>";
                    app_html+="<button class='btn btn-outline-info my-2 my-sm-0' type='submit'>Search</button>";
                app_html+="</form>";
            app_html+="</div>";
    app_html+="</nav>";
 
    app_html+="<div class='container' id='app-wrapper'>";
 
        app_html+="<div class='page-header'>";
            app_html+="<h1 id='page-title'>Products</h1>";
        app_html+="</div>";
 
        // this is where the contents will be shown.
        app_html+="<div id='page-content'></div>";
 
    app_html+="</div>";
 
    // inject to 'app' in index.html
    $("#app").html(app_html);
 
});
 
// change page title
function changePageTitle(page_title){
 
    // change page title
    $('#page-title').text(page_title);
 
    // change title tag
    document.title=page_title;
}
 
// function to make form values to json format
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};