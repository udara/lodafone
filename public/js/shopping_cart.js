

class Shopping_cart {
    
    constructor()
    {
        if(!this.does_shopping_cart_exist())
        {
            let shopping_cart = [];
            this.write_to_shopping_cart(shopping_cart);
        }

    }

    does_shopping_cart_exist()
    {
        if (localStorage.hasOwnProperty('shopping_cart'))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    get_shopping_cart()
    {
        return JSON.parse(localStorage.getItem('shopping_cart'));
    }

    write_to_shopping_cart(shopping_cart)
    {
        localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
    }

    clear_storage()
    {
        localStorage.removeItem('shopping_cart');
    }

    if_item_exist_in_shopping_cart_get_item_index(shopping_cart,id)
    {
        return shopping_cart.findIndex(item => item.id == id);
    }

    add_item_to_shopping_cart(shopping_cart,id)
    {
        let item_index = this.if_item_exist_in_shopping_cart_get_item_index (shopping_cart,id);

        if ( item_index >= 0 )
        {
            console.log("item found");
            let current_quantity = shopping_cart[item_index].quantity
            shopping_cart[item_index].quantity = parseInt(current_quantity) + 1;
            this.write_to_shopping_cart(shopping_cart);
            console.log(shopping_cart);
        }
        else
        {
            console.log("item not found");
            let new_item =  {"id" : `${id}`, "quantity" : "1"};
            shopping_cart.push(new_item);
            console.log(shopping_cart);
            this.write_to_shopping_cart(shopping_cart);
        }
    }

    add_description_to_shopping_cart_item(shopping_cart,id,product_details)
    {
        let item_index = this.if_item_exist_in_shopping_cart_get_item_index (shopping_cart,id);

        if ( item_index >= 0 )
        {
            console.log("item found");
            shopping_cart[item_index].price = product_details.item_price;
            shopping_cart[item_index].description = product_details.product_description;
            shopping_cart[item_index].product_image = product_details.product_image;
            this.write_to_shopping_cart(shopping_cart);
            console.log(shopping_cart);
        }
        else
        {
            console.log("item not found");
        }
    }

    remove_item_from_cart(shopping_cart,id)
    {
        let item_index = this.if_item_exist_in_shopping_cart_get_item_index (shopping_cart,id);

        if ( item_index >= 0 )
        {
            console.log("item found");
            let current_quantity = shopping_cart[item_index].quantity;
            shopping_cart[item_index].quantity = parseInt(current_quantity) - 1;
            if(shopping_cart[item_index].quantity <= 0) 
            {
                shopping_cart =  shopping_cart.filter(function( item ) 
                {
                    return item.id != id;
                });
            }
            console.log(shopping_cart)
            this.write_to_shopping_cart(shopping_cart);
        }
        else
        {
            console.log("item not found");
        }
    }

    render_shopping_cart()
    {
        let shopping_cart = this.get_shopping_cart();
        let shopping_cart_html_items = ""
        let shopping_cart_html = 
        `<div class="container-xl">`;



        let shopping_cart_html_head = 
        `<div class="row">
        <div class="col-sm-12 mt-5">
            <div class="cart-card mb-5">
                <div class="row pt-4 pl-4 pr-4">
                    <div class="col-md-7">
                        <h2 class="cart-text mt-2">Product</h2>
                    </div>
                    <div class="col-md-5 text-right">
                        <div class="row">
                            <div class="col">
                                <h2 class="cart-text mt-2 text-center">Price</h2>
                            </div>
                            <div class="col">
                                <h2 class="cart-text mt-2 text-center">Items</h2>
                            </div>
                            <div class="col"></div>
                            <div class="col"></div>
                         </div>
            </div>
        </div>` 
        let cart_grand_total = 0;
        shopping_cart.forEach(function (shopping_cart_item) {
            let cart_item_id = shopping_cart_item.id;
            let cart_item_quantity = shopping_cart_item.quantity;
            let cart_item_description = shopping_cart_item.description;
            let cart_item_image = shopping_cart_item.product_image;
            let cart_item_price = shopping_cart_item.price;
            let cart_item_total = cart_item_price * cart_item_quantity;
            cart_grand_total = cart_item_total + cart_grand_total;
            shopping_cart_html_items += 
            //`<div class="col-12"><img src="/phone_images/${cart_item_image}"> - ${cart_item_id} - ${cart_item_description} - ${cart_item_price} - ${cart_item_total}  <a href="#" class="btn btn-primary add_item_cart_button" data-id="${cart_item_id}"> + </a> ${cart_item_quantity} <a href="#" class="btn btn-primary bg-danger remove_item_cart_button" data-id="${cart_item_id}"> - </a></div>`;
            `<div class="row pt-4 pl-4 pr-4">
            <div class="col-md-7">
                <div class="row product-row">
                    <div class="col-sm-3 align-self-center text-center">
                        <img src="/phone_images/${cart_item_image}" href="#" class="cart-thumb">
                    </div>
                    <div class="col-sm-5 align-self-center">
                        <h2 class="cart-text-bold mt-2">${cart_item_description}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-5 text-right">
                <div class="row product-row align-self-center">
                    <div class="col align-self-center  text-center ">
                        <h2 class="cart-text mt-2">${cart_item_price}</h2>
                    </div>
                    <div class="col align-self-center  text-center ">
                        <h2 class="cart-text mt-2">${cart_item_quantity}</h2>
                    </div>
                    <div class="col text-center align-self-center">
                        <button data-id="${cart_item_id}" type="button" class="btn btn-outline-dark cart-btn mb-4 add_item_cart_button">+</button>
                    </div>
                    <div class="col text-center align-self-center">
                        <button data-id="${cart_item_id}" type="button" class="btn btn-outline-dark cart-btn mb-4 remove_item_cart_button">-</button>
                    </div>
                </div>
            </div>
        </div>`
        
        });

        let shopping_cart_html_grand_total = 
        `<div class="row">
        <div class="col-sm-12 mt-5">
            <div class="single-product-card">
                <div class="row pt-4 pl-4 pr-4 pb-3">
                    <div class="col-md-6">
                        <h2 class="cart-text-bold pt-2 pb-1">Total cost</h2>
                    </div>
                    <div class="col-md-6 text-right">
                        <h2 class="cart-text pt-2">Pay monthly <span class="cart-text-bold">$ </span>per/month*</h2>
                        <h4 class="mt-3 mb-4 price" style="font-weight: 300;">Total min. cost $ ${ cart_grand_total }</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `

        shopping_cart_html += shopping_cart_html_grand_total + shopping_cart_html_head + shopping_cart_html_items; 
    shopping_cart_html += `</div>`;    
        console.log(shopping_cart_html);
        return shopping_cart_html;
    }

    render_shopping_cart_icon()
    {
        let shopping_cart_icon = this.get_shopping_cart();
        let items_in_cart = 0;
        shopping_cart_icon.forEach(function (shopping_cart_item) {

            items_in_cart += parseInt(shopping_cart_item.quantity);

        });
        console.log(`Items in cart: ` + items_in_cart);
        items_in_cart == null ?  items_in_cart = 0 :  items_in_cart;
        return items_in_cart;
    }

    async call_api(url,query_string)
    {
        return $.ajax({
            url: url +  query_string,
            type: 'GET'
          });
    }
}

const SC = new Shopping_cart();

document.addEventListener("DOMContentLoaded", async function(){
    shopping_cart = SC.get_shopping_cart();
    $.ajax('/api/shoppingcart_items', {
        type: 'POST',  // http method
        data: { shopping_cart_items: shopping_cart },  // data to submit
        success: function (sc_item_details, status, xhr) {
            let shopping_cart = SC.get_shopping_cart();
            try{
            sc_item_details.forEach(async function (shopping_cart_item) {
                await SC.add_description_to_shopping_cart_item(shopping_cart,shopping_cart_item.product_id,shopping_cart_item)
            });
            $('.shopping-cart').html(SC.render_shopping_cart());
            $('.shopping-cart-icon').html(SC.render_shopping_cart_icon());
            }
            catch(error)
            {
                console.log(error)
            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.log('asd');
        }
    });
    
});

$(".add_item").on('click',function(element)
{
    let item_id = $(element.target).data('id');
    shopping_cart = SC.get_shopping_cart();
    SC.add_item_to_shopping_cart(shopping_cart,item_id);
    $('.shopping-cart').html(SC.render_shopping_cart());
    $('.shopping-cart-icon').html(SC.render_shopping_cart_icon());
    
});

$(document).on('click','.add_item_cart_button',function(element){
    let item_id = $(element.target).data('id');
    shopping_cart = SC.get_shopping_cart();
    SC.add_item_to_shopping_cart(shopping_cart,item_id);
    $('.shopping-cart').html(SC.render_shopping_cart());
    $('.shopping-cart-icon').html(SC.render_shopping_cart_icon());
});

$(document).on('click','.remove_item_cart_button',function(element){
    let item_id = $(element.target).data('id');
    shopping_cart = SC.get_shopping_cart();
    SC.remove_item_from_cart(shopping_cart,item_id);
    $('.shopping-cart').html(SC.render_shopping_cart());
    $('.shopping-cart-icon').html(SC.render_shopping_cart_icon());
});

$(".remove_item").on('click',function(element)
{
    let item_id = $(element.target).data('id');
    shopping_cart = SC.get_shopping_cart();
    SC.remove_item_from_cart(shopping_cart,item_id);
    $('.shopping-cart').html(SC.render_shopping_cart());
    $('.shopping-cart-icon').html(SC.render_shopping_cart_icon());
});



