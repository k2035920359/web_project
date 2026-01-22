document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');

    document.getElementById('btnHello').addEventListener('click', () => {
        fetch('/api/hello')    //hello
        .then(res => res.json())
        .then(data => {
            result.textContent = JSON.stringify(data, null, 2);
        });
    });



    document.getElementById('btnUsers').addEventListener('click', () => {
        fetch('/api/users')  //users
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('result').textContent =
            JSON.stringify(data, null, 2);
    });

  });
});
