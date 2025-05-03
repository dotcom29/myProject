const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=> {
    // event.pageX และ event.pageY คือพิกัดของเมาส์ (X,Y) บนหน้าเว็บทั้งหมด
    // btnEl.offsetLeft และ btnEl.offsetTop คือตำแหน่งของปุ่มจากขอบบน-ซ้ายของหน้าเว็บ
    // ลบกันเพื่อให้ได้ ตำแหน่งเมาส์ภายในตัวปุ่ม
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    // กำหนดค่า CSS custom properties (ตัวแปรใน CSS) ชื่อ --xPos และ --yPos บนปุ่ม
    // ค่าเหล่านี้จะมีค่าคือพิกัดของเมาส์ (เป็นหน่วยพิกเซล)
    btnEl.style.setProperty("--xPos", x+ "px");
    btnEl.style.setProperty("--yPos", y+ "px");
});