var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ltc = document.getElementById("litecoin");
var doge = document.getElementById("dogecoin");
var chainlink = document.getElementById("chainlink");
var btc_percent = document.getElementById("bitcoin_percent");
var eth_percent = document.getElementById("ethereum_percent");
var ltc_percent = document.getElementById("litecoin_percent");
var doge_percent = document.getElementById("dogecoin_percent");
var chainlink_percent = document.getElementById("chainlink_percent");
var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2CLitecoin%2CDogecoin%2Cyearn%2Cchainlink&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=bitcoin",

    "method": "GET",
    "headers": {}
}
$.ajax(liveprice).done(function (response){
btc.innerHTML = response.bitcoin.usd;
eth.innerHTML = response.ethereum.usd;
ltc.innerHTML = response.litecoin.usd;
doge.innerHTML = response.dogecoin.usd;    
chainlink.innerHTML = response.chainlink.usd;    
});


$.ajax(liveprice).done(function (response){
btc_percent.innerHTML = response.bitcoin.usd_24h_change.toFixed(4);
eth_percent.innerHTML = response.ethereum.usd_24h_change.toFixed(4);
ltc_percent.innerHTML = response.litecoin.usd_24h_change.toFixed(4);
doge_percent.innerHTML = response.dogecoin.usd_24h_change.toFixed(4); 
chainlink_percent.innerHTML = response.chainlink.usd_24h_change.toFixed(4); 
}); 
