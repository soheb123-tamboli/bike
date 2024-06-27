// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Bike Details
$('#bikeModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var bike = button.data('bike');
    var modal = $(this);
    modal.find('.modal-title').text('Bike Details - ' + bike);
    modal.find('#bikeDetails').text('More information about ' + bike + '.');
});

// Form Validation for Contact Page
document.querySelector('form').addEventListener('submit', function (event) {
    var form = event.target;
    var isValid = form.checkValidity();
    if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}, false);
