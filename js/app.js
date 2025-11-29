// التهيئة الرئيسية للتطبيق
class APKBuilder {
    constructor() {
        this.init();
    }

    init() {
        this.initializeIcons();
        this.setupEventListeners();
        this.checkUserAgreement();
    }

    initializeIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setupEventListeners() {
        // إعداد مستمعي الأحداث
        document.getElementById('agreeBtn')?.addEventListener('click', () => this.handleAgreement());
        document.getElementById('apkForm')?.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    handleAgreement() {
        localStorage.setItem('termsAgreed', 'true');
        this.showMainContent();
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        // معالجة إنشاء APK
    }

    showMainContent() {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('termsModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }

    checkUserAgreement() {
        const hasAgreed = localStorage.getItem('termsAgreed');
        if (hasAgreed) {
            this.showMainContent();
        }
    }
}

// تشغيل التطبيق
document.addEventListener('DOMContentLoaded', () => {
    new APKBuilder();
});
