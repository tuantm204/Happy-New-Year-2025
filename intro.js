var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function () {
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function () {
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function () {
    slider3.classList.remove('active')
})


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick = function () {
    if (mySong.paused) {
        mySong.play()
    }
}


// JavaScript Code
const imagesFolder = "memories/"; // Thư mục chứa ảnh
const totalImages = 13; // Đặt số lượng ảnh trong thư mục
let currentIndex = 0; // Chỉ số ảnh hiện tại

// Lấy các phần tử HTML
const imageElement = document.querySelector('.content-2 img');
const followButton = document.getElementById('follow-button');
const backButton = document.getElementById('back-button');
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');

// Sự kiện khi nhấn Follow
followButton.addEventListener('click', () => {
    if (content1.style.display !== 'none') {
        // Lần đầu nhấn, ẩn content-1 và hiện content-2
        content1.style.display = 'none';
        content2.style.display = 'block';
        imageElement.src = `${imagesFolder}${currentIndex + 1}.jpg`; // Hiển thị ảnh đầu tiên
    } else {
        // Nếu chưa đến ảnh cuối, chuyển sang ảnh tiếp theo
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            imageElement.src = `${imagesFolder}${currentIndex + 1}.jpg`; // Đổi ảnh
        }
    }
});

// Sự kiện khi nhấn Back
backButton.addEventListener('click', () => {
    if (content2.style.display === 'block') {
        if (currentIndex > 0) {
            // Nếu chưa đến ảnh đầu tiên, quay lại ảnh trước đó
            currentIndex--;
            imageElement.src = `${imagesFolder}${currentIndex + 1}.jpg`; // Đổi ảnh
        } else {
            // Nếu đang ở ảnh đầu tiên, quay lại content-1
            content2.style.display = 'none';
            content1.style.display = 'block';
        }
    }
});

// Kiểm tra chế độ màn hình ngay khi trang được tải
function checkOrientation() {
    const rotateMessage = document.querySelector('.rotate-message');
    if (window.innerHeight > window.innerWidth) {
        // Chế độ dọc
        rotateMessage.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn
    } else {
        // Chế độ ngang
        rotateMessage.style.display = 'none';
        document.body.style.overflow = 'auto'; // Bật cuộn lại
    }
}

// Lắng nghe sự kiện thay đổi kích thước hoặc xoay màn hình
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);