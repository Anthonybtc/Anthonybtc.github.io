async function getCryptoPrice(endpoint) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return parseFloat(data.price);
    } catch (error) {
        console.error("Error fetching price:", error);
        return "N/A";
    }
}

async function updateTickers() {
    const bitcoinTicker = document.getElementById("bitcoin-price");
    const litecoinTicker = document.getElementById("litecoin-price");
    const dogecoinTicker = document.getElementById("dogecoin-price");
    const cardanoTicker = document.getElementById("cardano-price")
    const xrpTicker = document.getElementById("xrp-price");
    const dotTicker = document.getElementById("dot-price");
    const xlmTicker = document.getElementById("xlm-price");
    const linkTicker = document.getElementById("link-price")

    const bitcoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/BTC-USD/ticker");
    bitcoinTicker.textContent = isNaN(bitcoinPrice) ? "N/A" : `$${bitcoinPrice.toFixed(2)}`;

    const litecoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/LTC-USD/ticker");
    litecoinTicker.textContent = isNaN(litecoinPrice) ? "N/A" : `$${litecoinPrice.toFixed(2)}`;

    const dogecoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/DOGE-USD/ticker");
    dogecoinTicker.textContent = isNaN(dogecoinPrice) ? "N/A" : `$${dogecoinPrice.toFixed(5)}`;

    const cardanoPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/ADA-USD/ticker");
    cardanoTicker.textContent = isNaN(cardanoPrice) ? "N/A" : `$${cardanoPrice.toFixed(5)}`;

    const xrpPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/XRP-USD/ticker");
    xrpTicker.textContent = isNaN(xrpPrice) ? "N/A" : `$${xrpPrice.toFixed(2)}`;

    const dotPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/DOT-USD/ticker");
    dotTicker.textContent = isNaN(dotPrice) ? "N/A" : `$${dotPrice.toFixed(2)}`;

    const xlmPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/XLM-USD/ticker");
    xlmTicker.textContent = isNaN(xlmPrice) ? "N/A" : `$${xlmPrice.toFixed(5)}`;

    const linkPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/LINK-USD/ticker");
    linkTicker.textContent = isNaN(linkPrice) ? "N/A" : `$${linkPrice.toFixed(5)}`;

    setTimeout(updateTickers, 1000); // Update every second
}

updateTickers();

// Get the search input element
const searchBar = document.getElementById('search-bar');

// Add an event listener for when the user types in the search bar
searchBar.addEventListener('input', function () {
    const searchTerm = searchBar.value.toLowerCase();
    // Implement search functionality here, e.g., filter and display matching results
});




--

