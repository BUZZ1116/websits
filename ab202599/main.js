document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.className = 'container mt-4';

    const row = document.createElement('div');
    row.className = 'row g-3'; // 增加間距，確保顯示美觀

    for (let i = 1; i <= 12; i++) {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        const card = document.createElement('div');
        card.className = 'card shadow-sm';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseover', function () {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseout', function () {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = `img/${String(i).padStart(2, '0')}.jpg`;
        img.alt = `Image ${i}`;
        img.style.width = '100%';
        img.style.height = '200px';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';

        img.addEventListener('click', function () {
            showModal(img.src, img.alt);
        });

        card.appendChild(img);
        col.appendChild(card);
        row.appendChild(col);
    }

    container.appendChild(row);
    document.body.appendChild(container);
});
