const monthNameEl =  document.getElementById("month-name")
const dayNameEl =  document.getElementById("day-name")
const dayNumEl =  document.getElementById("day-number")
const yearEl =  document.getElementById("year")

const date = new Date();
// getMonth() จะคืนค่าหมายเลขเดือนในรูปแบบเลข (0-11) เช่น มกราคม = 0, กุมภาพันธ์ = 1, …, ธันวาคม = 11
const month = date.getMonth();
// แปลงวันเวลาในตัวแปร date ให้เป็นข้อความ, "en" คือระบุว่าใช้ภาษาอังกฤษ
monthNameEl.innerText = date.toLocaleString("en", {
    // แสดงชื่อเดือนแบบเต็ม เช่น "April", "December"
    month: "long"
})

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})

dayNumEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()