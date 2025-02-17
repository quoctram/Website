function updateClock() {
    const now = new Date();

    // Lấy giờ, phút, giây hiện tại
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Định dạng lại để luôn có 2 chữ số (thêm số 0 nếu cần)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Cập nhật nội dung của các phần tử trong DOM
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Cập nhật đồng hồ mỗi giây (1000ms)
setInterval(updateClock, 1000);

// Gọi hàm lần đầu để hiển thị ngay khi trang tải
updateClock();

// Lấy tham chiếu đến phần tử body và nút chuyển đổi
const body = document.body;
const toggleButton = document.getElementById("toggleMode");

// Kiểm tra chế độ hiện tại từ localStorage
const currentMode = localStorage.getItem("mode");

// Áp dụng chế độ đã lưu (nếu có)
if (currentMode === "dark") {
    enableDarkMode();
} else {
    enableLightMode();
}

// Thêm sự kiện click cho nút chuyển đổi
toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// Hàm kích hoạt chế độ tối
function enableDarkMode() {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleButton.textContent = "Dark";
    localStorage.setItem("mode", "dark"); // Lưu chế độ vào localStorage
}

// Hàm kích hoạt chế độ sáng
function enableLightMode() {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleButton.textContent = "Light";
    localStorage.setItem("mode", "light"); // Lưu chế độ vào localStorage
}

// Mảng chứa các thông tin thú vị
const facts = [
    "Hello :))",
    "Hi :))",
    "Có thể bạn chưa biết: 1 phút ở Mỹ bằng 60 giây ở Việt Nam",
    "Nhế nhô nhác nhạn",
    "Chào mừng đến với website của mình",
];

// Chọn ngẫu nhiên một thông tin từ mảng
const randomFact = facts[Math.floor(Math.random() * facts.length)];

// Hiển thị thông tin lên trang
document.getElementById("info-box").textContent = randomFact;