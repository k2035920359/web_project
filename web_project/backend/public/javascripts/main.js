document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    document.getElementById('btnHello').addEventListener('click', () => {
        fetch('/routes/api/index.js/hello')
        .then(res => res.json())
        .then(data => {
            result.textContent = JSON.stringify(data, null, 2);
        });
    });



    document.getElementById('btnUsers').addEventListener('click', () => {
        fetch('/routes/api/users.js/list')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('result').textContent =
            JSON.stringify(data, null, 2);
    });

  });
});
