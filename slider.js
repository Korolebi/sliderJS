// document.addEventListener("DOMContentLoaded", function() {
//     const images = [
//         'images/cat.jpg',
//         'images/mouse.jpg',
//         'images/sejong.jpg'
//     ];
//     const intervalTime = 3000; // 3 seconds
//     let currentIndex = 0;

//     const sliderComponent = document.getElementById('slider_component');
//     const imgElement = document.createElement('img');
//     imgElement.src = images[currentIndex];
//     sliderComponent.appendChild(imgElement);

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % images.length;
//         imgElement.src = images[currentIndex];
//     }, intervalTime);
// });

document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        'images/cat.jpg',
        'images/mouse.jpg',
        'images/sejong.jpg'
    ];
    const intervalTime = 3000; // 3 seconds
    let currentIndex = 0;
    const images = [];

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

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex].src;
    }, intervalTime);
});
