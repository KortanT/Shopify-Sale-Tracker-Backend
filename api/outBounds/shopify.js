var https = require("https");



async function isShopifyStore(storeUrl){
    var options = {
        host: storeUrl,
        path: "/products.json?limit=250&page=1",
        method: "GET",
        headers: {
            "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36",
            "Content-Type": "application/json"
        }
    };
    try {
        https.get(options, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(data)
            const products = JSON.parse(data);
        console.log(products)
        });


        
    })
    } catch (error) {
        console.log(error)
    }
    
}

isShopifyStore('candleproject.co')

module.exports = {isShopifyStore};
