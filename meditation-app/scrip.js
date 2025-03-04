// ฟังก์ชันสำหรับเริ่มทำสมาธิ
function startMeditation() {
    let timeLeft = 300; // 5 นาที
    const timerDisplay = document.getElementById('timer');
    const breathingAudio = document.getElementById('breathingAudio');

    breathingAudio.play();
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            breathingAudio.pause();
            alert("การทำสมาธิสิ้นสุดแล้ว!");
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

// ฟังก์ชันสำหรับวิเคราะห์อารมณ์
function analyzeEmotion() {
    alert("การวิเคราะห์อารมณ์จะถูกเพิ่มในอนาคต");
}

// ฟังก์ชันสำหรับบันทึกไดอารี่
function saveDiaryEntry() {
    const entry = document.getElementById('diaryEntry').value;
    if (entry) {
        alert("บันทึกเรียบร้อย!");
        // บันทึกข้อมูลลง Local Storage หรือเซิร์ฟเวอร์
    } else {
        alert("กรุณาเขียนข้อความก่อนบันทึก");
    }
}