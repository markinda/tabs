function tabs() {

    const tabs = document.querySelectorAll('.tabs');

    if (!tabs) return;

    tabs.forEach(item => {

        const btn = item.querySelectorAll('.tabs__btn');
        const content = item.querySelectorAll('.tabs__item');

        btn.forEach(itemBtn => {
            itemBtn.addEventListener('click', () => {

                btn.forEach(el => {el.classList.remove('tabs__btn--active')});
                itemBtn.classList.add('tabs__btn--active');

                const path = itemBtn.dataset.tabsPath;

                content.forEach(el => {el.classList.remove('tabs__item--active')});

                document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__item--active');
            });
        });
    });
}

tabs();