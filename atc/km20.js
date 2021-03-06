// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0

var id = new URL(window.location.href).searchParams.get('id');  // Parse id

if (id && id == parseInt(id)) {  // Validate id

    fetch("https://www.km20.ru/ajax/cart/addItem.php", {
        "credentials": "include",
        "body": `product_id=${id}&product_size=1`,
        "headers": {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        "method": "POST",
        "mode": "no-cors"
    }).then(() => window.location.href = 'https://www.km20.ru/cart/').then(() => window.location.href = 'https://www.km20.ru/cart/order/');  // Go to checkout
    
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}
