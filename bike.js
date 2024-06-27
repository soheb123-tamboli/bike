document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const selectedBrandHeading = document.getElementById('selectedBrand');
    const noBikesMessage = document.getElementById('noBikesMessage');
    selectedBrandHeading.textContent = `${brand} Bikes`;

    const bikes = [
        { brand: 'HF Deluxe', model: 'Defy', price: 1500, images: ['giant_defy_1.jpg', 'giant_defy_2.jpg', 'giant_defy_3.jpg', 'giant_defy_4.jpg'] },
        { brand: 'Giant', model: 'Anthem', price: 2000, images: ['giant_anthem_1.jpg', 'giant_anthem_2.jpg', 'giant_anthem_3.jpg', 'giant_anthem_4.jpg'] },
        { brand: 'splendor', model: '2016', price: 1800, images: ['splendor1.jpeg', 'splendor2.jpeg', 'splendor3.jpeg', 'splendor4.jpeg'] },
        { brand: 'splendor', model: 'Fuel', price: 2200, images: ['trek_fuel_1.jpg', 'trek_fuel_2.jpg', 'trek_fuel_3.jpg', 'trek_fuel_4.jpg'] }
        // Add more bike models here
    ];

    const bikeSlider = document.getElementById('bikeSlider');

    // Function to render bike details with images in slider
    function renderBikeDetails(brand) {
        const filteredBikes = bikes.filter(bike => bike.brand === brand);
        // Check if there are no bikes for the selected brand
        if (filteredBikes.length === 0) {
            noBikesMessage.style.display = 'block'; // Show "Bike not available" message
            return;
        } else {
            noBikesMessage.style.display = 'none'; // Hide "Bike not available" message
        }
        
        filteredBikes.forEach(bike => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            bike.images.forEach(image => {
                const img = document.createElement('img');
                img.src = `${image}`;
                img.alt = `${brand} ${bike.model}`;
                slide.appendChild(img);
            });
            const details = document.createElement('div');
            details.innerHTML = `
                <p><strong>Model:</strong> ${bike.model}</p>
                <p><strong>Price:</strong> ₹${bike.price}</p>
                <p><strong>Insurance:</strong>${bike.insurance}</p>
                <p><strong>PUC:</strong>${bike.puc}
            `;
            slide.appendChild(details);
            bikeSlider.appendChild(slide);
        });
    }

    // Check if brand parameter exists and render bike details
    if (brand) {
        renderBikeDetails(brand);
    }
});
