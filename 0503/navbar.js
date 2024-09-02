function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg navbar-light bg-light';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container-fluid';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'index.html';
    const logoImg = document.createElement('img');
    logoImg.src = 'logo.png';
    logoImg.alt = 'Logo';
    logoImg.width = 30;
    logoImg.height = 30;
    logoImg.className = 'd-inline-block align-text-top';
    brandLink.appendChild(logoImg);
    brandLink.appendChild(document.createTextNode(' 培英國中'));

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

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarSupportedContent';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav me-auto mb-2 mb-lg-0';

    const menuItems = [
        {
            name: '學校基本資料',
            submenu: [
                { name: '全校班級數', modalId: 'classModal' }, // 觸發班級數量模態視窗
                { name: '教師人數', modalId: 'teacherModal' }, // 觸發教師人數模態視窗
                { name: '辦理相關經費', modalId: 'fundingModal' }, // 觸發經費模態視窗
                '技藝教育抽離式課程'
            ]
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
            submenu: []
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

                if (typeof subItem === 'object' && subItem.modalId) {
                    subA.href = '#';
                    subA.setAttribute('data-bs-toggle', 'modal');
                    subA.setAttribute('data-bs-target', `#${subItem.modalId}`);
                    subA.textContent = subItem.name;
                } else {
                    subA.href = '#';
                    subA.textContent = subItem;
                }

                subLi.appendChild(subA);
                submenuUl.appendChild(subLi);
            });

            li.appendChild(a);
            li.appendChild(submenuUl);
        } else {
            a.setAttribute('tabindex', '-1');
            li.appendChild(a);
        }

        ul.appendChild(li);
    });

    collapseDiv.appendChild(ul);
    containerDiv.appendChild(brandLink);
    containerDiv.appendChild(toggleButton);
    containerDiv.appendChild(collapseDiv);
    navBar.appendChild(containerDiv);

    document.body.prepend(navBar);
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'text-center bg-light py-3';
    footer.innerHTML = '&copy; 2024 新竹市立培英國民中學. All rights reserved.';
    document.body.appendChild(footer);
}

function createModals() {
    const modalsHtml = `
    <!--全校班級數 Modal -->
    <div class="modal fade" id="classModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="classModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="classModalLabel">全校班級數</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">年級</th>
                                <th scope="col">班級數</th>
                                <th scope="col">學生人數</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>國中一年級（七年級）</td>
                                <td>27</td>
                                <td>801</td>
                            </tr>
                            <tr>
                                <td>國中二年級（八年級）</td>
                                <td>27</td>
                                <td>779</td>
                            </tr>
                            <tr>
                                <td>國中三年級（九年級）</td>
                                <td>27</td>
                                <td>803</td>
                            </tr>
                            <tr>
                                <td>合計</td>
                                <td>81</td>
                                <td>2383</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3">
                                    包含美術班、音樂班、體育班、舞蹈班、特教班等
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!--教師人數 Modal -->
    <div class="modal fade" id="teacherModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="teacherModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="teacherModalLabel">教師人數</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">類別</th>
                                <th scope="col">教師人數（人）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>員額編制</td>
                                <td>195</td>
                            </tr>
                            <tr>
                                <td>編制內正式教師</td>
                                <td>174</td>
                            </tr>
                            <tr>
                                <td>代理教師</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td rowspan="2">任教輔導活動科教師人數</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>具輔導活動科合格教師證人數</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>不具輔導活動科合格教師證人數</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!--辦理相關經費 Modal -->
    <div class="modal fade" id="fundingModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="fundingModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="fundingModalLabel">辦理相關經費</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">類別</th>
                                <th scope="col">生涯發展教育</th>
                                <th scope="col">抽離式技藝教育</th>
                                <th scope="col">專業編班技藝教育</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>縣市政府補助（含教育部）</td>
                                <td>344,000</td>
                                <td>60,000</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>學校預算</td>
                                <td>135,548</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>自行籌措（如無，請填寫「0」）</td>
                                <td>287,584</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>合計</td>
                                <td>767,132</td>
                                <td>60,000</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalsHtml);
}

// 呼叫函數來創建並插入導航欄、頁腳和模態視窗
createNavBar();
createFooter();
createModals();
