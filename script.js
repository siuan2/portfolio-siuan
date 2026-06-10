document.addEventListener('DOMContentLoaded', () => {

    // ================= INLINE VIDEO MOUSE OVER PLAYBACK =================
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('.preview-video');

        card.addEventListener('mouseenter', () => {
            video.play().catch(err => console.log("Video safe load buffer state."));
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
});

// ================= MODAL FRAME INJECTIONS =================
function openModal(title, sourceUrl, type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerText = title;
    modalBody.innerHTML = '';

    if (type === 'video') {
        modalBody.innerHTML = `
            <video controls autoplay style="width:100%; height:auto; border-radius: 8px;">
                <source src="${sourceUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (type === 'image') {
        modalBody.innerHTML = `<img src="${sourceUrl}" alt="${title}" style="width:100%; height:auto; border-radius: 8px;">`;
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = ''; // Destroys running media instances immediately
    modal.style.display = 'none';
}
function switchView(viewType) {
    // Select containers and buttons
    const view3d = document.getElementById('view-3d-container');
    const viewGrid = document.getElementById('view-grid-container');
    const btn3d = document.getElementById('toggle-3d');
    const btnGrid = document.getElementById('toggle-grid');

    if (viewType === '3d') {
        // Toggle Button Classes
        btn3d.classList.add('active');
        btnGrid.classList.remove('active');

        // Handle Visibility Cross-fade
        viewGrid.classList.remove('active-view');
        setTimeout(() => {
            view3d.classList.add('active-view');
        }, 50);
    } else if (viewType === 'grid') {
        // Toggle Button Classes
        btnGrid.classList.add('active');
        btn3d.classList.remove('active');

        // Handle Visibility Cross-fade
        view3d.classList.remove('active-view');
        setTimeout(() => {
            viewGrid.classList.add('active-view');
        }, 50);
    }
}

function switchPhotoView(viewType) {
    const viewPhoto3d = document.getElementById('view-photo-3d-container');
    const viewPhotoGrid = document.getElementById('view-photo-grid-container');
    const btnPhoto3d = document.getElementById('toggle-photo-3d');
    const btnPhotoGrid = document.getElementById('toggle-photo-grid');

    if (!viewPhoto3d || !viewPhotoGrid) return;

    if (viewType === 'photo3d') {
        btnPhoto3d.classList.add('active');
        btnPhotoGrid.classList.remove('active');

        viewPhotoGrid.classList.remove('active-view');
        viewPhoto3d.classList.add('active-view');
    } else if (viewType === 'photogrid') {
        btnPhotoGrid.classList.add('active');
        btnPhoto3d.classList.remove('active');

        viewPhoto3d.classList.remove('active-view');
        viewPhotoGrid.classList.add('active-view');
        // ================= LOAD MORE VIDEOS FUNCTIONALITY =================
        function toggleExtraVideos() {
            const extraDiv = document.getElementById('extra-videos');
            const btn = document.getElementById('load-more-btn');

            if (extraDiv.style.display === 'none') {
                extraDiv.style.display = 'block';
                btn.innerText = 'Show Less';
            } else {
                extraDiv.style.display = 'none';
                btn.innerText = 'View More Projects';
            }
        }
    }
}