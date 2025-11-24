// Authentication functionality for login and register pages
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Initialize password toggles
    initializePasswordToggles();

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Handle register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleRegister();
        });
    }

    // Check if user is already logged in
    checkAuthStatus();
});

function initializePasswordToggles() {
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle eye icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    });
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember') ? document.getElementById('remember').checked : false;

    // Simple validation
    if (!username || !password) {
        showMessage('Harap isi semua field', 'error');
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('#login-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('papatUsers') || '[]');
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Store user session
            const sessionData = {
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                loginTime: new Date().toISOString(),
                remember: remember
            };

            if (remember) {
                localStorage.setItem('papatUser', JSON.stringify(sessionData));
            } else {
                sessionStorage.setItem('papatUser', JSON.stringify(sessionData));
            }

            showMessage('Login berhasil! Mengarahkan...', 'success');

            // Redirect to dashboard (in a real app)
            setTimeout(() => {
                // For demo, just show a message
                alert('Login berhasil! Dalam aplikasi nyata, Anda akan diarahkan ke dashboard.');
                // window.location.href = 'dashboard.html';

                // Reset form
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        } else {
            showMessage('Username atau password salah', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }, 1500);
}

function handleRegister() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    // Validation
    if (!fullname || !email || !username || !password || !confirmPassword) {
        showMessage('Harap isi semua field', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Password dan konfirmasi password tidak cocok', 'error');
        return;
    }

    if (!agreeTerms) {
        showMessage('Anda harus menyetujui syarat dan ketentuan', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('Password minimal 6 karakter', 'error');
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('#register-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mendaftarkan...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('papatUsers') || '[]');

        // Check if username or email already exists
        const existingUser = users.find(u => u.username === username || u.email === email);

        if (existingUser) {
            showMessage('Username atau email sudah terdaftar', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        // Add new user
        const newUser = {
            fullname: fullname,
            email: email,
            username: username,
            password: password,
            registerDate: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('papatUsers', JSON.stringify(users));

        showMessage('Pendaftaran berhasil! Silakan login.', 'success');

        // Redirect to login page
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }, 1500);
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('papatUser') || sessionStorage.getItem('papatUser');

    if (savedUser && window.location.pathname.includes('login.html')) {
        const userData = JSON.parse(savedUser);
        document.getElementById('username').value = userData.username;
        if (document.getElementById('remember')) {
            document.getElementById('remember').checked = userData.remember;
        }
    }
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

    // Insert before form
    const form = document.getElementById('login-form') || document.getElementById('register-form');
    if (form) {
        form.parentNode.insertBefore(messageEl, form);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }
}

// Logout function (you can add this to your dashboard later)
function logout() {
    localStorage.removeItem('papatUser');
    sessionStorage.removeItem('papatUser');
    window.location.href = 'login.html';
}