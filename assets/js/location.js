// Location Based Dynamic Filter | Created By Kisal Wijemanna (www.cabeska.lk)
// Made with ipinfo.io API and JavaScript

// LKR & USD Change Function
function updatePrices(country) {
    const prices = {
        plus: country === 'Sri Lanka' ? { currency: 'LKR', amount: 4990 } : { currency: 'USD', amount: 25 },
        pro: country === 'Sri Lanka' ? { currency: 'LKR', amount: 8990 } : { currency: 'USD', amount: 45 },
        exclusive: country === 'Sri Lanka' ? { currency: 'LKR', amount: 14990 } : { currency: 'USD', amount: 75 },
        plusYearly: country === 'Sri Lanka' ? { currency: 'LKR', amount: 3990 } : { currency: 'USD', amount: 20 },
        proYearly: country === 'Sri Lanka' ? { currency: 'LKR', amount: 7990 } : { currency: 'USD', amount: 40 },
        exclusiveYearly: country === 'Sri Lanka' ? { currency: 'LKR', amount: 12990 } : { currency: 'USD', amount: 65 }
    };

    document.getElementById('price-plus').innerHTML = `<sup>${prices.plus.currency}</sup>${prices.plus.amount}<sub>/mo</sub>`;
    document.getElementById('price-pro').innerHTML = `<sup>${prices.pro.currency}</sup>${prices.pro.amount}<sub>/mo</sub>`;
    document.getElementById('price-exclusive').innerHTML = `<sup>${prices.exclusive.currency}</sup>${prices.exclusive.amount}<sub>/mo</sub>`;
    document.getElementById('price-plus-yearly').innerHTML = `<sup>${prices.plusYearly.currency}</sup>${prices.plusYearly.amount}<sub>/mo</sub> <br>`;
    document.getElementById('price-pro-yearly').innerHTML = `<sup>${prices.proYearly.currency}</sup>${prices.proYearly.amount}<sub>/mo</sub> <br>`;
    document.getElementById('price-exclusive-yearly').innerHTML = `<sup>${prices.exclusiveYearly.currency}</sup>${prices.exclusiveYearly.amount}<sub>/mo</sub> <br>`;
}


fetch('https://ipinfo.io/json?token=6c8d674cb9fd67')
    .then(response => response.json())
    .then(data => {
        const country = data.country;
        const countryName = data.country === 'LK' ? 'Sri Lanka' : 'Other';
        updatePrices(countryName);
    })
    .catch(error => {
        console.error('Error fetching location:', error);
        updatePrices('Other');
    });


    // Navbar Location Identifier
    document.addEventListener('DOMContentLoaded', function () {
        
        async function getLocationData() {
            try {
               
                let response = await fetch('https://ipinfo.io/json?token=6c8d674cb9fd67');
                let data = await response.json();

                if (data && data.city && data.country) {
                    const location = `${data.city}, ${data.country}`;

                  
                    document.getElementById('location-name').textContent = location;
                } else {
                    document.getElementById('location-name').textContent = 'Unknown';
                }
            } catch (error) {
                console.error('Error fetching location data:', error);
                document.getElementById('location-name').textContent = 'Unknown';
            }
        }

        
        getLocationData();
    });