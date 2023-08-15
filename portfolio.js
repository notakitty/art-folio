// This function handles the gallery tab behavior
function openGallery(galleryName) {
    // Hide all gallery sections
    var galleries = document.querySelectorAll('.gallery');
    galleries.forEach(function(gallery) {
        gallery.style.display = 'none';
    });

    // Show the clicked or specified gallery
    var activeGallery = document.getElementById(galleryName);
    if (activeGallery) {
        activeGallery.style.display = 'block';

        // Re-trigger Masonry layout for the active gallery
        var msnry = Masonry.data(activeGallery);
        if (msnry) {
            msnry.layout();
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to populate galleries (for future data-driven gallery filling)
    function populateGallery(category) {
        const container = document.getElementById(category);
        if (typeof galleryData !== 'undefined') {
            galleryData[category].forEach(imageData => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                const img = document.createElement('img');
                img.src = imageData.src;
                img.alt = imageData.alt;
                galleryItem.appendChild(img);
                container.appendChild(galleryItem);
            });

            // Ensure that all images in this category are loaded before initializing Masonry
            imagesLoaded(container, function() {
                new Masonry(container, {
                    itemSelector: '.gallery-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                    fitWidth: true
                });
            });
        }
    }

    // Populate each gallery
    ['paintings', 'studies', 'stickers', 'sculptures'].forEach(category => {
        populateGallery(category);
    });

    // Set all images on the page to lazy loading
    let images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });

    // Add event listeners to gallery navigation links to trigger gallery display
    var links = document.querySelectorAll('.fixed-nav a[data-tab]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior
            openGallery(this.getAttribute('data-tab'));  // Open the clicked gallery
        });
    });

    // Set 'paintings' as the default gallery to display on page load
    openGallery('paintings');
});
