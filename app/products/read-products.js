$(document).ready(function(){
 
    // show list of product on first load
    showProducts();

    // when a 'read products' button was clicked
    $(document).on('click', '.read-products-button', function(){
        showProducts();
    });
 
});
 
// showProducts() method will be here
function showProducts() {

    // get list of products from the API
    $.getJSON("/api/product/read.php", function(data){
        // html for listing products
        var read_products_html="";

        // start table
        read_products_html+="<table class='table table-hover'>";
        
            // creating our table heading
            read_products_html+="<thead class='thead-dark'>";
                read_products_html+="<tr>";
                    read_products_html+="<th class='w-25-pct'>Name</th>";
                    read_products_html+="<th class='w-10-pct'>Price</th>";
                    read_products_html+="<th class='w-15-pct'>Category</th>";
                    read_products_html+="<th class='w-25-pct text-align-center'></th>";
                read_products_html+="</tr>";
            read_products_html+="</thead>";
            
            // rows will be here
            // loop through returned list of data
            $.each(data.records, function(key, val) {
    
                // creating new table row per record
                read_products_html+="<tr>";
    
                    read_products_html+="<td>" + val.name + "</td>";
                    read_products_html+="<td>$" + val.price + "</td>";
                    read_products_html+="<td>" + val.category_name + "</td>";
    
                    // 'action' buttons
                    read_products_html+="<td>";
                    
                        read_products_html+="<div class='btn-group' role='group' aria-label='Basic example'>";
                            // read one product button
                            read_products_html+="<button type='button' class='btn btn-outline-info read-one-product-button' data-id='" + val.id + "'>";
                                read_products_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
                            read_products_html+="</button>";
                
                            // edit button
                            read_products_html+="<button type='button' class='btn btn-outline-info update-product-button' data-id='" + val.id + "'>";
                                read_products_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
                            read_products_html+="</button>";
                
                            // delete button
                            read_products_html+="<button type='button' class='btn btn-outline-info delete-product-button' data-id='" + val.id + "'>";
                                read_products_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
                            read_products_html+="</button>";
                        read_products_html+="</div>";
                    read_products_html+="</td>";
    
                read_products_html+="</tr>";
    
            });
        // end table
        read_products_html+="</table>";

        // inject to 'page-content' of our app
        $("#page-content").html(read_products_html);

        // chage page title
        changePageTitle("Products");

    });

}
