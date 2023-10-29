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

    const bitcoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/BTC-USD/ticker");
    bitcoinTicker.textContent = isNaN(bitcoinPrice) ? "N/A" : `$${bitcoinPrice.toFixed(2)}`;

    const litecoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/LTC-USD/ticker");
    litecoinTicker.textContent = isNaN(litecoinPrice) ? "N/A" : `$${litecoinPrice.toFixed(2)}`;

    const dogecoinPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/DOGE-USD/ticker");
    dogecoinTicker.textContent = isNaN(dogecoinPrice) ? "N/A" : `$${dogecoinPrice.toFixed(5)}`;

    const cardanoPrice = await getCryptoPrice("https://api.pro.coinbase.com/products/ADA-USD/ticker");
    cardanoTicker.textContent = isNaN(cardanoPrice) ? "N/A" : `$${cardanoPrice.toFixed(5)}`;

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
