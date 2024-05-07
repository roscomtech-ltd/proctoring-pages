if (document.querySelector('.header__burger')) {
    document.querySelector('.header__burger').onclick = () => {
        document.querySelector('.header__burger').classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
    };
}
if (document.querySelectorAll('[tab]')) {
    document.querySelectorAll('[tab]').forEach(tab => {
        tab.addEventListener('click', (event) => {
            document.querySelectorAll(`[tab="${tab.getAttribute('tab')}"]`).forEach(allTab => {
                allTab.classList.remove('active');
            });
            document.querySelectorAll(`[tab-content="${tab.getAttribute('tab')}"]`).forEach(allTabContent => {
                allTabContent.classList.remove('active');
            });
    
            tab.classList.add('active');
            document.querySelector(`[tab-content="${tab.getAttribute('tab')}"]#${tab.id}`).classList.add('active');
        });
    });
}
if(document.querySelector('#calendar')) {
    const calendar = new VanillaCalendar('#calendar', {
        settings: {
            lang: 'ru',
            visibility: {
                theme: 'light',
                weekend: false,
                today: false,
            },
            selection: {
                day: 'multiple',
            },
            selected: {
                dates: ['2024-05-01', '2024-05-02'],
            },
        }
        
    });
    calendar.init();
}
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.popup__close')) {
        document.querySelector('.popup__close').addEventListener('click', (el) => {
            document.querySelector('.popup').classList.remove('active');
        });
    }
});
