<button class="btn btn-success" onclick="install()">Install</button>

    // Client Side Ajax Script
    <script>
    $('button').click(function () {
        $.post('/page', {data: 'blah'}, function (data) {
            console.log(data);
        });
    }, 'json');
    </script>