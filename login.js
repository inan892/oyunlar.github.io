document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kullanıcıyı localStorage'dan alıyoruz
    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        // Giriş başarılı olduğunda kullanıcı adını localStorage'a kaydediyoruz
        localStorage.setItem('loggedInUser', username);
        alert("Başarıyla giriş yaptınız!");
        window.location.href = "anasayfa.html";  // Ana sayfaya yönlendir
    } else {
        alert("Kullanıcı adı veya şifre yanlış!");
    }
});