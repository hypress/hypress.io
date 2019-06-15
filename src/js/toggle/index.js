module.exports = function() {
    const toggles = document.querySelectorAll('[data-toggle-target]');

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            const targetSelector = event.target.getAttribute('data-toggle-target');
            const targets = document.querySelectorAll(targetSelector);

            targets.forEach((target) => {
                const toggleClass = target.getAttribute('data-toggle-class');
                target.classList.toggle(toggleClass);
            });
        })
    });

}