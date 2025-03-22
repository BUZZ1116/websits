function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg sticky-top';
    navBar.style.background = 'linear-gradient(90deg, #ff9a9e, #fad0c4)'; // 更新為粉紅色漸層背景
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.6)'; // 添加陰影

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';

    // Adding brand logo and text


    const textContainer = document.createElement('div');
    textContainer.style.display = 'inline-block';
    textContainer.style.marginLeft = '10px';

    const text1 = document.createElement('div');
    text1.style.fontWeight = 'bold';
    text1.style.fontSize = '18px';
    text1.textContent = '@ab202599 安寶全台外送';

    const text2 = document.createElement('div');


    textContainer.appendChild(text1);
    textContainer.appendChild(text2);
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

    containerDiv.appendChild(ul);
    navBar.appendChild(containerDiv);

    document.body.prepend(navBar);
}

// Call the function to create and insert the navbar
createNavBar();
