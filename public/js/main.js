// 照片查看器功能
document.addEventListener('DOMContentLoaded', function() {
    const photoItems = document.querySelectorAll('.photo-item');
    const photoViewer = document.querySelector('.photo-viewer');
    const viewerImg = photoViewer.querySelector('img');

    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            viewerImg.src = imgSrc;
            photoViewer.classList.add('active');
        });
    });

    photoViewer.addEventListener('click', function() {
        this.classList.remove('active');
    });

    // 轮播图功能
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // 替换为实际图片
        let currentIndex = 0;
        const carouselImg = carousel.querySelector('.carousel-img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        function updateImage() {
            carouselImg.src = `images/${images[currentIndex]}`;
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        });

        // 自动轮播
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }, 5000);
    }
}); 