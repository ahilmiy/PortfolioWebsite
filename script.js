// script.js

// Fotoğraf kategorileri ve fotoğraflar
const photos = {
    retro: ['retrocar1.jpg', 'retrocar2.jpg', 'retrocar3.jpg', 'retrocar4.jpg', 'retrocar5.jpg', 'retrocar6.jpg', 'retrocar7.jpg', 'retrocar8.jpg', 'retrocar9.jpg', 'retrocar10.jpg', 'retrocar11.jpg'],
    sedan: ['sedansport1.jpg', 'sedansport2.jpg', 'sedansport3.jpg', 'sedansport4.jpg', 'sedansport5.jpg', 'sedansport6.jpg', 'sedansport7.jpg', 'sedansport8.jpg'],
    jdm: ['jdmcar1.jpg', 'jdmcar2.jpg', 'jdmcar3.jpg', 'jdmcar4.jpg'],
    rally: ['rallycar1.jpg', 'rallycar2.jpg', 'rallycar3.jpg', 'rallycar4.jpg'],
    suv: ['suvcar1.jpg', 'suvcar2.jpg', 'suvcar3.jpg', 'suvcar4.jpg', 'suvcar5.jpg'],
    'super-sport': ['supersportcar1.jpg', 'supersportcar2.jpg','supersportcar3.jpg','supersportcar4.jpg','supersportcar5.jpg','supersportcar6.jpg','supersportcar7.jpg','supersportcar8.jpg','supersportcar9.jpg','supersportcar10.jpg']
};

// Kategorileri ve fotoğrafları dinamik olarak yükleme
const categoryLinks = document.querySelectorAll('nav a');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = link.dataset.category;
        displayPhotos(category);
        document.getElementById('category-title').textContent = link.textContent;
    });
});

// Fotoğrafları gösterme fonksiyonu
function displayPhotos(category) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Önceki fotoğrafları temizleme

    photos[category].forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = category;

        img.addEventListener('click', function() {
            // Küçük resimleri gizleme
            gallery.querySelectorAll('img').forEach(img => {
                img.style.display = 'none';
            });

            // Büyük resmi gösterme
            const enlargedImage = document.createElement('img');
            enlargedImage.src = photo;
            enlargedImage.alt = category;
            enlargedImage.classList.add('enlarged');

            const enlargedBackground = document.createElement('div');
            enlargedBackground.classList.add('enlarged-background');

            enlargedImage.addEventListener('click', function() {
                // Küçük resimleri yeniden gösterme
                gallery.querySelectorAll('img').forEach(img => {
                    img.style.display = 'block';
                });

                enlargedImage.remove();
                enlargedBackground.remove();
            });

            document.body.appendChild(enlargedImage);
            document.body.appendChild(enlargedBackground);
        });

        gallery.appendChild(img);
    });
}
