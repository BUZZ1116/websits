// JS.js

function createNavBar() {
    const navBar = document.createElement('ul');
    navBar.className = 'drop-down-menu';

    const menuItems = [
        { name: '首頁', submenu: [] },
        { 
            name: '學校基本資料', 
            submenu: ['全校班級數', '教師人數', '辦理相關經費', '技藝教育抽離式課程'] 
        },
        { 
            name: '生涯發展教育', 
            submenu: ['行政措施與組織運作', '課程規劃與教學活動', '學生學習與輔導', '特色推動'] 
        },
        { 
            name: '技藝教育抽離式課程', 
            submenu: ['行政與輔導', '課程與教學', '環境與經費', '特色及推動'] 
        },
        { 
            name: '其他', 
            submenu: ['生涯教學'] 
        }
    ];

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item.name;

        li.appendChild(a);
        
        if (item.submenu.length > 0) {
            const subUl = document.createElement('ul');
            item.submenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = '#';
                subA.textContent = subItem;
                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });
            li.appendChild(subUl);
        }

        navBar.appendChild(li);
    });

    document.body.prepend(navBar); // Add nav bar at the top
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '&copy; 2024 111學年度 生涯發展教育工作執行委員會. All rights reserved.';
    document.body.appendChild(footer);
}

// Call the functions to create and insert the navigation bar and footer
createNavBar();
createFooter();
