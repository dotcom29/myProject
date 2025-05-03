// Array Object
const testimonial = [
    {
        name: "Ivar the Enigmatic",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I recently had the pleasure of experiencing the incredible versatility and deliciousness of apples"
    },
    {
        name: "Embla the Mead-maker",
        photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Would definitely recommend apple and will definitely be ordering again."
    },
    {
        name: "Iss the Troll-conqueror",
        photoUrl: "https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"We don’t need to spend as much time in meetings now that we use apple."
    },
    {
        name: "Freyja the Raven-wise",
        photoUrl: "https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I love anything that I purchase from apple!"
    },
    {
        name: "Geiravor the Wave-walker",
        photoUrl: "https://images.unsplash.com/photo-1644904105846-095e45fca990?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money."
    },
];

const imgEl = document.querySelector("img");
const usernameEl = document.querySelector(".username");
const textEl = document.querySelector(".text")

// index of testimonial
let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    // ไปยัง testimonial ถัดไป
    idx++;
    // ถ้า idx มากกว่าจำนวน testimonial ก็กลับไปที่ 0 (วนลูป)
    if(idx === testimonial.length){
        idx = 0;
    }

    // รอ 4 วินาที แล้วเรียกตัวเองใหม่ เพื่อเปลี่ยนเป็น testimonial ถัดไป
    setTimeout(() => {
        updateTestimonial();
    }, 5000)
}