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
    </div>
    
    <!--技藝教育抽離式課程 Modal -->
    <div class="modal fade" id="skillCourseModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="skillCourseModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="skillCourseModalLabel">技藝教育抽離式課程</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>開辦學期</th>
                                <th>辦理方式</th>
                                <th>職群名稱</th>
                                <th>合作單位</th>
                                <th>時數</th>
                                <th>上課時段</th>
                                <th>學生數</th>
                                <th>退選原因分析（可複選）</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>第一學期</td>
                                <td>自辦式</td>
                                <td>化工群</td>
                                <td>新竹高工</td>
                                <td>3</td>
                                <td>5~7</td>
                                <td>20/10</td>
                                <td>
                                    1. 志趣不合：8人次<br>
                                    2. 功課因素：<br>
                                    3. 職群不足：<br>
                                    4. 家庭因素：<br>
                                    5. 升學考量：2人次<br>
                                    6. 其他：<br>
                                </td>
                            </tr>
                            <tr>
                                <td>第二學期</td>
                                <td>自辦式</td>
                                <td>電機與電子職群</td>
                                <td>義石中學</td>
                                <td>3</td>
                                <td>5~7</td>
                                <td>18/11</td>
                                <td>
                                    1. 志趣不合：<br>
                                    2. 功課因素：<br>
                                    3. 職群不足：<br>
                                    4. 家庭因素：<br>
                                    5. 升學考量：<br>
                                    6. 其他：<br>
                                </td>
                            </tr>
                            <!-- 更多数据 -->
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>`;

    // 将所有的模态窗口插入到页面中
    document.body.insertAdjacentHTML('beforeend', modalsHtml);
}

// 呼叫函数来创建并插入模态窗口
createModals();
