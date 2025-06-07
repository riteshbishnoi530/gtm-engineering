const toggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');

        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            toggle.innerHTML = navLinks.classList.contains('show') ? '&times;' : '&#9776;';
        });

        // tabs
        const tabButtons = document.querySelectorAll('.tabs .btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedTab = button.getAttribute('data-tab');

                // Update tab button styles
                tabButtons.forEach(btn => {
                    btn.classList.remove('services-tab-gradient-btn');
                    btn.classList.add('services-tab-btn');
                });
                button.classList.add('services-tab-gradient-btn');

                // Show the selected tab and hide others
                tabContents.forEach(content => {
                    if (content.getAttribute('data-content') === selectedTab) {
                        content.classList.remove('hidden');
                        content.classList.add('active');
                    } else {
                        content.classList.add('hidden');
                        content.classList.remove('active');
                    }
                });
            });
        });