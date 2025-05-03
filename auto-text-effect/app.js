const containerEl = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];

// เก็บตำแหน่งของอาชีพที่กำลังแสดงอยู่ใน array
let careerIndex = 0;

// เก็บตำแหน่งตัวอักษรที่จะแสดงในแต่ละรอบ (เพื่อสร้างเอฟเฟกต์พิมพ์ทีละตัว)
let charecterIndex = 0;

function updateText() {
    // เพิ่มค่าของ characterIndex ทีละ 1 ในแต่ละรอบ
    charecterIndex++
    containerEl.innerHTML = 
        // เช็กว่าชื่ออาชีพเริ่มต้นด้วยตัว “I” หรือไม่:
        // ถ้าใช่ ให้ใช้ "an" (เช่น "an Instructor")
        // ถ้าไม่ใช่ ให้ใช้ "a" (เช่น "a YouTube")
        `
        <h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex]
            // ตัดข้อความจาก 0 ถึง characterIndex เพื่อสร้างเอฟเฟกต์พิมพ์ทีละตัว
            .slice(0,charecterIndex)}</h1>
        `;
        // ถ้า characterIndex เท่ากับความยาวของอาชีพในรอบนั้น แปลว่า "พิมพ์ครบแล้ว"
        if(charecterIndex === careers[careerIndex].length){
            // เพิ่ม careerIndex เพื่อไปยังอาชีพถัดไป และรีเซ็ต characterIndex เป็น 0 เพื่อเริ่มพิมพ์อาชีพใหม่
            careerIndex++
            charecterIndex = 0
        }

        // ถ้าอาชีพสุดท้ายแสดงเสร็จแล้ว => วนกลับไปอาชีพแรก
        if(careerIndex === careers.length) {
            careerIndex = 0;
        }
        // รอ 400 มิลลิวินาทีก่อนจะเรียกฟังก์ชัน updateText() อีกครั้ง ทำให้เกิดดีเลย์ที่ดูเหมือนพิมพ์ตัวอักษรทีละตัว
        setTimeout(updateText, 400)
}
updateText();
