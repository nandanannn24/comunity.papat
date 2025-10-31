// Authentication functionality for login page
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const passwordToggle = document.querySelector('.password-toggle');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle eye icon
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Handle form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Simple validation
        if (!username || !password) {
            showMessage('Harap isi semua field', 'error');
            return;
        }

        // In a real application, you would send this to a server
        // For demo purposes, we'll simulate a successful login
        simulateLogin(username, password, remember);
    });

    function simulateLogin(username, password, remember) {
        // Show loading state
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // For demo, accept any non-empty credentials
            if (username && password) {
                // Store user data (in a real app, this would be a token from the server)
                const userData = {
                    username: username,
                    loginTime: new Date().toISOString(),
                    remember: remember
                };

                localStorage.setItem('papatUser', JSON.stringify(userData));

                showMessage('Login berhasil! Mengarahkan...', 'success');

                // Redirect to dashboard (in a real app)
                setTimeout(() => {
                    // For demo, just show a message
                    alert('Login berhasil! Dalam aplikasi nyata, Anda akan diarahkan ke dashboard.');
                    // window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                showMessage('Username atau password salah', 'error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }, 1500);
    }

    function showMessage(message, type) {
        // Remove any existing messages
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = message;

        // Add styles
        messageEl.style.cssText = `
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-weight: 500;
            text-align: center;
            ${type === 'error' ? 'background-color: #FEE2E2; color: #DC2626; border: 1px solid #FECACA;' : ''}
            ${type === 'success' ? 'background-color: #D1FAE5; color: #065F46; border: 1px solid #A7F3D0;' : ''}
        `;

        // Insert before form
        loginForm.parentNode.insertBefore(messageEl, loginForm);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }

    // Check if user is already logged in
    const savedUser = localStorage.getItem('papatUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        document.getElementById('username').value = userData.username;
        document.getElementById('remember').checked = userData.remember;
    }
});