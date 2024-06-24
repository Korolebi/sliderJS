document.addEventListener("DOMContentLoaded", function() {
    const images = [
        '\SliderJS\images\cat.jpg',
        '\SliderJS\images\mouse.jpg',
        '\SliderJS\images\sejong.jpg'
    ];
    const intervalTime = 3000; // 3 seconds
    let currentIndex = 0;

    const sliderComponent = document.getElementById('slider_component');
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    sliderComponent.appendChild(imgElement);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }, intervalTime);
});
