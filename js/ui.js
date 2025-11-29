// إدارة واجهة المستخدم
class UIManager {
    constructor() {
        this.setupUIEvents();
    }

    setupUIEvents() {
        // نسخ البريد الإلكتروني
        document.getElementById('emailBtn')?.addEventListener('click', () => this.copyEmail());
        
        // إظهار/إخفاء الشروط
        document.getElementById('termsBtn')?.addEventListener('click', () => this.showTermsModal());
    }

    copyEmail() {
        const email = "support@apkbuilder.com";
        navigator.clipboard.writeText(email).then(() => {
            this.showNotification('تم نسخ البريد الإلكتروني', 'success');
        });
    }

    showNotification(message, type = 'info') {
        // عرض إشعار للمستخدم
    }

    showTermsModal() {
        document.getElementById('termsModal').style.display = 'flex';
    }

    updateProgress(percentage, status) {
        // تحديث شريط التقدم
        const progressBar = document.getElementById('progressBar');
        const progressPercent = document.getElementById('progressPercent');
        const progressStatus = document.getElementById('progressStatus');
        
        if (progressBar) progressBar.style.width = `${percentage}%`;
        if (progressPercent) progressPercent.textContent = `${percentage}%`;
        if (progressStatus) progressStatus.textContent = status;
    }
}
