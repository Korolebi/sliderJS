document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        'images/cat.jpg',
        'images/mouse.jpg',
        'images/sejong.jpg'
    ];
    const images = [];
    let currentIndex = 0;

    // Pre-load images
    imageUrls.forEach((url, index) => {
        const img = new Image();
        img.src = url;
        img.onload = function() {
            images[index] = img;
        };
    });

    const sliderComponent = document.getElementById('slider_component');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrls[currentIndex];
    sliderComponent.appendChild(imgElement);

    const createButton = (text, onClick) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.onclick = onClick;
        return button;
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex].src;
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex].src;
    };

    const prevButton = createButton('Previous', prevImage);
    const nextButton = createButton('Next', nextImage);

    sliderComponent.appendChild(prevButton);
    sliderComponent.appendChild(nextButton);

    // Optional: Add interval to automatically change images every 3 seconds
    setInterval(nextImage, 3000);
});


// document.addEventListener("DOMContentLoaded", function() {
//     const imageUrls = [
//         'images/cat.jpg',
//         'images/mouse.jpg',
//         'images/sejong.jpg'
//     ];
//     const intervalTime = 3000; // 3 seconds
//     let currentIndex = 0;
//     const images = [];

//     // Pre-load images
//     imageUrls.forEach((url, index) => {
//         const img = new Image();
//         img.src = url;
//         img.onload = function() {
//             images[index] = img;
//         };
//     });

//     const sliderComponent = document.getElementById('slider_component');
//     const imgElement = document.createElement('img');
//     imgElement.src = imageUrls[currentIndex];
//     sliderComponent.appendChild(imgElement);

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % images.length;
//         imgElement.src = images[currentIndex].src;
//     }, intervalTime);
// });
