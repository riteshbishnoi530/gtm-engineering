const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const headerLinks = document.querySelectorAll('.header-link');

toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    toggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    document.body.classList.toggle('no-scroll', isOpen);
});

// Close navbar when any link is clicked (on small screens)
headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            toggle.innerHTML = '&#9776;';
            document.body.classList.remove('no-scroll');
        }
    });
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

        // video

         document.getElementById('video-thumbnail').addEventListener('click', function () {
        const videoContainer = document.getElementById('video-container');
        
        // Replace the image with a video element
        videoContainer.innerHTML = `
            <video controls autoplay class="w-full rounded-md">
                <source src="./assets/videos/demo.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    });