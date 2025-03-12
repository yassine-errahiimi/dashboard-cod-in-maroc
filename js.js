function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function addLead() {
    let clientName = document.getElementById('client-name').value;
    let clientPhone = document.getElementById('client-phone').value;
    let clientCity = document.getElementById('client-city').value;
    let productSelect = document.getElementById('product-select').value;

    let tableBody = document.getElementById('lead-table-body');

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${clientName}</td>
        <td>${clientPhone}</td>
        <td>${clientCity}</td>
        <td>${productSelect}</td>
    `;
    tableBody.appendChild(newRow);

    // Update Leads Card on the Home Page
    let leadsCount = document.getElementById('leads-count');
    leadsCount.innerText = parseInt(leadsCount.innerText) + 1;

    alert("Lead added successfully!");
}

function addProduct(productId) {
    let productContainer = document.getElementById('my-products-container');
    let product = document.getElementById(productId);
    let productName = product.querySelector('h3').innerText;

    // Check if product is already added
    if (!productContainer.innerHTML.includes(productName)) {
        let newProduct = document.createElement('div');
        newProduct.classList.add('product-card');
        newProduct.innerHTML = `
            <h3>${productName}</h3>
            <button class="remove-button" onclick="removeProduct(this)"><i class="fas fa-trash"></i> Remove</button>
        `;
        productContainer.appendChild(newProduct);
        alert(`${productName} added to My Products.`);
    } else {
        alert(`${productName} is already in My Products.`);
    }
}

function removeProduct(button) {
    button.parentElement.remove();
}
function calculerPrixVente() {
    let prixAchat = parseFloat(document.getElementById('prixAchat').value);
    let costPerLead = parseFloat(document.getElementById('costPerLead').value);
    let confirmationRate = parseFloat(document.getElementById('confirmationRate').value) / 100;
    let deliveryRate = parseFloat(document.getElementById('deliveryRate').value) / 100;
    let extra = parseFloat(document.getElementById('extra').value);
    let shipping = parseFloat(document.getElementById('shipping').value);
    let margin = parseFloat(document.getElementById('margin').value);

    let costPerConfirmed = costPerLead / confirmationRate;
    let costPerDelivered = costPerConfirmed / deliveryRate;
    
    let prixVente = prixAchat + costPerDelivered + extra + shipping + margin;
    
    document.getElementById('costPerConfirmed').innerText = costPerConfirmed.toFixed(2) + 'dh';
    document.getElementById('costPerDelivered').innerText = costPerDelivered.toFixed(2) + 'dh';
    document.getElementById('prixVente').innerText = prixVente.toFixed(2) + 'dh';
}