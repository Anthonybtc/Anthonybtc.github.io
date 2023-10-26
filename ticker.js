async function getBitcoinPrice() {
    try {
        const response = await fetch("https://api.coinbase.com/v2/prices/spot?currency=USD");
        const data = await response.json();
        return data.data.amount;
    } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        return "N/A";
    }
}

async function updateTicker() {
    const ticker = document.getElementById("ticker");
    const priceElement = document.getElementById("price");

    const bitcoinPrice = await getBitcoinPrice();
    priceElement.textContent = bitcoinPrice;

    setTimeout(updateTicker, 60000); // Update every minute
}

updateTicker();
