// Текст, який буде відображатися в заголовку
const text = 'Вітаю на сайті таргетолога';

// Функція для анімації печаті тексту
function typeWriter() {
    let i = 0;
    const speed = 50; // Швидкість печаті

    // Вивід тексту посимвольно
    function type() {
        if (i < text.length) {
            document.getElementById("main-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Запускаємо анімацію печаті при завантаженні сторінки
window.onload = typeWriter;

// Функція для відкриття/закриття меню
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

const nodemailer = require('nodemailer');

// Створюємо об'єкт транспорту
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Ваша електронна адреса Gmail
        pass: 'your_password' // Пароль від вашої електронної пошти Gmail
    }
});

// Функція для надсилання електронної пошти
function sendEmail(email, subject, text) {
    const mailOptions = {
        from: 'your_email@gmail.com', // Ваша електронна адреса Gmail
        to: andryskhatop@gmail.com, // Адреса, на яку потрібно надіслати пошту
        subject: subject, // Тема листа
        text: text // Текст повідомлення
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Приклад виклику функції для надсилання електронної пошти
sendEmail('recipient_email@example.com', 'Тема вашого повідомлення', 'Текст вашого повідомлення');
