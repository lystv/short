
<?php

// 设置OpenAI API密钥
$openai_api_key = 'YOUR_API_KEY_HERE';

// 定义函数来生成回复
function generate_reply($prompt) {
    global $openai_api_key;
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.openai.com/v1/engines/davinci/completions",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode(array(
            "prompt" => $prompt,
            "max_tokens" => 1024,
            "n" => 1,
            "stop" => null,
            "temperature" => 0.7,
        )),
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer " . $openai_api_key,
            "Content-Type: application/json"
        ),
    ));
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) {
        return "cURL Error #:" . $err;
    } else {
        $response = json_decode($response, true);
        $reply = $response['choices'][0]['text'];
        return $reply;
    }
}

// 处理POST请求
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $prompt = $_POST['prompt'];
    $reply = generate_reply($prompt);
    echo json_encode(array('response' => $reply));
    exit();
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>ChatGPT Demo</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#submit').click(function() {
                var prompt = $('#prompt').val();
                $.post('index.php', {prompt: prompt}, function(data) {
                    $('#response').text(data.response);
                }, 'json');
            });
        });
    </script>
</head>
<body>
    <h1>ChatGPT Demo</h1>
    <p>Enter a prompt:</p>
    <input type="text" id="prompt">
    <button id="submit">Submit</button>
    <p>Response:</p>
    <div id="response"></div>
</body>
</html>