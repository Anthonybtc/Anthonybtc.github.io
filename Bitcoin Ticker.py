import requests

def get_bitcoin_price():
    url = "https://api.coinbase.com/v2/prices/spot?currency=USD"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            bitcoin_price = data['data']['amount']
            return float(bitcoin_price)
        else:
            print(f"Failed to retrieve Bitcoin price. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    bitcoin_price = get_bitcoin_price()
    if bitcoin_price is not None:
        print(f"Current Bitcoin price: ${bitcoin_price:.2f}")
