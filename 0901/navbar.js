function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg sticky-top'; // Add sticky-top class
    navBar.style.backgroundColor = '#c0e6a5';
    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Adding shadow to navbar

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';

    // Adding brand logo and text
    const logoImg = document.createElement('img');
    logoImg.src = 'logo.png';
    logoImg.alt = 'Logo';
    logoImg.width = 30;
    logoImg.height = 30;
    logoImg.className = 'd-inline-block align-text-top';
    brandLink.appendChild(logoImg);

    const textContainer = document.createElement('div');
    textContainer.style.display = 'inline-block';
    textContainer.style.marginLeft = '10px';

    const text1 = document.createElement('div');
    text1.style.fontWeight = 'bold';
    text1.style.fontSize = '16px';
    text1.textContent = '培英國民中學';

    const text2 = document.createElement('div');
    text2.style.fontSize = '14px';
    text2.textContent = '112年生涯發展教育暨技藝教育';

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

    const menuItems = [
        {
            name: '學校基本資料',
            submenu: [
                { name: '全校班級數', modalId: 'classModal' },
                { name: '教師人數', modalId: 'teacherModal' },
                { name: '辦理相關經費', modalId: 'fundingModal' },
                { name: '技藝教育抽離式課程', modalId: 'skillCourseModal' }
            ]
        },
        {
            name: '生涯發展教育',
            submenu: [
                { name: '行政措施與組織運作', link: '2-1.html' },
                { name: '課程規劃與教學活動', link: '2-2.html' },
                { name: '學生學習與輔導', link: '2-3.html' },
                { name: '特色及推動困難或建議', link: '2-4.html' }
            ]
        },
        {
            name: '技藝教育抽離式課程',
            submenu: [
                { name: '行政與輔導', link: '3-1.html' },
                { name: '課程與教學', link: '3-2.html' },
                { name: '環境與經費', link: '3-3.html' },
                { name: '特色及推動', link: '3-4.html' }
            ]
        },
        {
            name: '其他',
            submenu: [
                { name: '生涯教學資料', link: '4-1.html' },
                { name: '關於我們', link: 'about.html' }
            ]
        }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.className = item.submenu.length > 0 ? 'nav-item dropdown' : 'nav-item';

        const a = document.createElement('a');
        a.className = item.submenu.length > 0 ? 'nav-link dropdown-toggle' : 'nav-link';
        a.href = '#';
        a.textContent = item.name;

        if (item.submenu.length > 0) {
            a.setAttribute('id', 'navbarDropdown');
            a.setAttribute('role', 'button');
            a.setAttribute('data-bs-toggle', 'dropdown');
            a.setAttribute('aria-expanded', 'false');

            const submenuUl = document.createElement('ul');
            submenuUl.className = 'dropdown-menu';
            submenuUl.setAttribute('aria-labelledby', 'navbarDropdown');

            item.submenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.className = 'dropdown-item';

                if (subItem.modalId) {
                    subA.href = '#';
                    subA.setAttribute('data-bs-toggle', 'modal');
                    subA.setAttribute('data-bs-target', `#${subItem.modalId}`);
                    subA.textContent = subItem.name;
                } else if (subItem.link) {
                    subA.href = subItem.link;
                    subA.textContent = subItem.name;
                } else {
                    subA.href = '#';
                    subA.textContent = subItem.name;
                }

                subLi.appendChild(subA);
                submenuUl.appendChild(subLi);
            });

            li.appendChild(a);
            li.appendChild(submenuUl);
        } else {
            li.appendChild(a);
        }

        ul.appendChild(li);
    });

    collapseDiv.appendChild(ul);
    containerDiv.appendChild(collapseDiv);
    navBar.appendChild(containerDiv);

    document.body.prepend(navBar);
}

// Call the function to create and insert the navbar
createNavBar();
