// Initialize SwiperJS Slider
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Notifications Dropdown
const notificationCount = document.getElementById('notification-count');
const notificationList = document.getElementById('notification-list');
let count = 0;
document.getElementById('notifications').addEventListener('click', function () {
    document.getElementById('notification-list').classList.remove('dropdown');
    count = count + 1;
    let notifications = ['Notification '+count+''];
    notificationCount.textContent = count;
    notifications.forEach(notification => {
        let li = document.createElement('li');
        li.textContent = notification;
        notificationList.appendChild(li);
    });
    
});
document.getElementById('close').addEventListener('click', function () {
    document.getElementById('notification-list').classList.add('dropdown');
})

// Example dynamic notifications


// Search Functionality
const searchBar = document.getElementById('search-bar');
const courses = document.querySelectorAll('.course');

searchBar.addEventListener('keyup', function () {
    let filter = searchBar.value.toLowerCase();

    courses.forEach(course => {
        let title = course.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    });
});

// Interactive Learning Modules
const modules = document.querySelectorAll('.module h3');
modules.forEach(module => {
    module.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('module-content');
    });
});
