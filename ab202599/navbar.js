function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg sticky-top';
    navBar.style.background = 'linear-gradient(90deg, #ff9a9e, #fad0c4)';
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.6)';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';

    const textContainer = document.createElement('div');
    textContainer.style.display = 'inline-block';
    textContainer.style.marginLeft = '10px';

    const text1 = document.createElement('div');
    text1.style.fontWeight = 'bold';
    text1.style.fontSize = '18px';
    text1.textContent = '@ab202588888 安寶全台外送';

    textContainer.appendChild(text1);
    brandLink.appendChild(textContainer);
    containerDiv.appendChild(brandLink);

    const toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'navbar-toggler-icon';
    toggleButton.appendChild(toggleIcon);
    containerDiv.appendChild(toggleButton);

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarSupportedContent';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav me-auto mb-2 mb-lg-0';

    // 首頁
  

    // 地區選單（平行項目，不用 dropdown）
    const regions = [
        { name: '❤️ 雙北 選妃', href: 'north.html' },
        { name: '❤️ 桃園・新竹 選妃', href: 'hml.html' },
        { name: '❤️ 臺中・彰化・南投 選妃', href: 'central.html' },
        { name: '❤️ 高雄・臺南・選妃', href: 'south.html' }
    ];

    regions.forEach(region => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = region.href;
        link.textContent = region.name;
        li.appendChild(link);
        ul.appendChild(li);
    });

    collapseDiv.appendChild(ul);
    containerDiv.appendChild(collapseDiv);
    navBar.appendChild(containerDiv);

    document.body.prepend(navBar);
}

createNavBar();
