$(document).ready(function(){
 
    // app html
    app_html="";

    // navbar
    app_html+="<nav class='navbar navbar-expand-lg navbar-light bg-light'>";
    
        app_html+="<a class='navbar-brand' href='/'>menu.me</a>";
            
            app_html+="<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>";
                app_html+="<span class='navbar-toggler-icon'></span>";
            app_html+="</button>";

            app_html+="<div class='collapse navbar-collapse' id='navbarSupportedContent'>";
                app_html+="<ul class='navbar-nav mr-auto'>";
            //         app_html+="<li class='nav-item active'>";
            //             app_html+="<a class='nav-link' href='#'>Home <span class='sr-only'>(current)</span></a>";
            //         app_html+="</li>";
            //         app_html+="<li class='nav-item'>";
            //             app_html+="<a class='nav-link' href='#'>Link</a>";
            //         app_html+="</li>";
            //         app_html+="<li class='nav-item dropdown'>";
            //             app_html+="<a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown</a>";
            //             app_html+="<div class='dropdown-menu' aria-labelledby='navbarDropdown'>";
            //                 app_html+="<a class='dropdown-item' href='#'>Action</a>";
            //                 app_html+="<a class='dropdown-item' href='#'>Another action</a>";
            //                 app_html+="<div class='dropdown-divider'></div>";
            //                     app_html+="<a class='dropdown-item' href='#'>Something else here</a>";
            //                 app_html+="</div>";
            //         app_html+="</li>";
            //         app_html+="<li class='nav-item'>";
            //             app_html+="<a class='nav-link disabled' href='#'>Disabled</a>";
            //         app_html+="</li>";
                app_html+="</ul>";
                app_html+="<form class='form-inline my-2 my-lg-0'>";
                    app_html+="<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'>";
                    app_html+="<button class='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>";
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