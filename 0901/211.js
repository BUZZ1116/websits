document.addEventListener('DOMContentLoaded', function () {
    const images = [
        { src: '2-1/A.jpg', alt: 'Image A', modalId: 'imageModalA' },
        { src: '2-1/B.jpg', alt: 'Image B', modalId: 'imageModalB' },
        { src: '2-1/C.jpg', alt: 'Image C', modalId: 'imageModalC' },
        { src: '2-1/D.jpg', alt: 'Image D', modalId: 'imageModalD' },
        { src: '2-1/E.jpg', alt: 'Image E', modalId: 'imageModalE' }
    ];

    const container = document.querySelector('.container .row');

    images.forEach((image, index) => {
        // Create card
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.className = 'card-img-top';
        imgElement.setAttribute('data-bs-toggle', 'modal');
        imgElement.setAttribute('data-bs-target', `#${image.modalId}`);

        cardDiv.appendChild(imgElement);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);

        // Create modal
        const modalDiv = document.createElement('div');
        modalDiv.className = 'modal fade';
        modalDiv.id = image.modalId;
        modalDiv.setAttribute('tabindex', '-1');
        modalDiv.setAttribute('aria-labelledby', `${image.modalId}Label`);
        modalDiv.setAttribute('aria-hidden', 'true');

        const modalDialogDiv = document.createElement('div');
        modalDialogDiv.className = 'modal-dialog modal-lg';

        const modalContentDiv = document.createElement('div');
        modalContentDiv.className = 'modal-content';

        const modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.className = 'modal-header';

        const btnClose = document.createElement('button');
        btnClose.className = 'btn-close';
        btnClose.setAttribute('type', 'button');
        btnClose.setAttribute('data-bs-dismiss', 'modal');
        btnClose.setAttribute('aria-label', 'Close');

        modalHeaderDiv.appendChild(btnClose);

        const modalBodyDiv = document.createElement('div');
        modalBodyDiv.className = 'modal-body';

        const imgFluid = document.createElement('img');
        imgFluid.src = image.src;
        imgFluid.alt = image.alt;
        imgFluid.className = 'img-fluid';

        modalBodyDiv.appendChild(imgFluid);

        modalContentDiv.appendChild(modalHeaderDiv);
        modalContentDiv.appendChild(modalBodyDiv);

        modalDialogDiv.appendChild(modalContentDiv);
        modalDiv.appendChild(modalDialogDiv);

        document.body.appendChild(modalDiv);
    });
});
