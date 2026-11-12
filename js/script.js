(function () {
    var btn = document.getElementById('photo'), input = document.getElementById('photoInput'), 
    img = document.getElementById('photoImg');
    btn.addEventListener('click', function () { input.click() });
    input.addEventListener('change', function () {
        var f = input.files && input.files[0]; if (!f) return;
        var r = new FileReader();
        r.onload = function () { img.src = r.result; btn.classList.add('has-img') };
        r.readAsDataURL(f);
    });
})();