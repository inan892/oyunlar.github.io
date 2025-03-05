document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Kullanıcı adı ve şifreyi bir obje olarak saklıyoruz
    const user = {
        username: newUsername,
        password: newPassword
    };

    // Kullanıcı bilgilerini localStorage'a kaydediyoruz
    localStorage.setItem(newUsername, JSON.stringify(user));
    alert('Hesap başarıyla oluşturuldu!');
    window.location.href = 'anasayfa.html'; // Giriş sayfasına yönlendir
});