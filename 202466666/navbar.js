function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg sticky-top';
    navBar.style.background = 'linear-gradient(0deg, #FFD1DC, #FFF0F5)'; // Gradient from bottom (#FFD1DC) to top (#FFF0F5)
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.7)'; // Shadow effect

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';

    // Adding brand text with styling
    const textContainer = document.createElement('div');
    textContainer.style.display = 'inline-block';
    textContainer.style.marginLeft = '10px';

    const text1 = document.createElement('div');
    text1.style.fontWeight = 'bold';
    text1.style.fontSize = '30px'; // Set font size to 26px
    text1.style.color = 'blue'; // Set font color to blue
    text1.className = 'floating-text'; // Add a class for the hover effect
    text1.textContent = '东京'; // Display text in simplified Chinese

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

    // Adding "今日出勤表" menu item
    const li1 = document.createElement('li');
    li1.className = 'nav-item';

    const a1 = document.createElement('a');
    a1.className = 'nav-link';
    a1.href = '#';
    a1.textContent = '本日出勤表';

    li1.appendChild(a1);
    ul.appendChild(li1);

    // Adding "今日體檢表" menu item
    const li2 = document.createElement('li');
    li2.className = 'nav-item';

    const a2 = document.createElement('a');
    a2.className = 'nav-link';
    a2.href = '#';
    a2.textContent = '今日體檢表';

    li2.appendChild(a2);
    ul.appendChild(li2);

    collapseDiv.appendChild(ul);
    containerDiv.appendChild(collapseDiv);
    navBar.appendChild(containerDiv);

    document.body.prepend(navBar);

    // Add CSS for hover effect on text1 and underline expanding from center
    const style = document.createElement('style');
    style.innerHTML = `
        .floating-text {
            transition: transform 0.3s ease;
        }
        
        .floating-text:hover {
            transform: translateY(-5px); /* Floating effect */
        }

        .nav-link {
            position: relative;
            text-decoration: none;
            color: inherit;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background-color: red;
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        .nav-link:hover::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
}

// Call the function to create and insert the navbar
createNavBar();
