import telegram
from bot import setup
from urllib import parse
from waitress import serve
from threading import Thread
from flask import Flask, request, jsonify, render_template
from config import BOT_TOKEN, WEB_HOOK, PORT
from flask import request
import datetime
import openai
import os

# 设置 OpenAI API 密钥
openai.api_key = os.environ.get("OPENAI_API_KEY")

app = Flask(__name__)
updater, dispatcher = setup(BOT_TOKEN)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.before_request
def log_request_info():
    now = datetime.datetime.now()
    ip_address = request.remote_addr
    user_agent = request.headers.get('User-Agent')
    print(f'访问ip: {ip_address}, 时间:{now}\n设备： {user_agent}')

@app.route('/send_message', methods=['POST'])
def send_message():
    # 获取用户输入的文本
    user_input = request.form['user_input']

    # 使用 OpenAI API 进行回复
    response = openai.Completion.create(
        engine='davinci',
        prompt=user_input,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    # 获取回复文本
    reply_text = response.choices[0].text.strip()

    # 返回回复结果
    return jsonify({'status': 'success', 'message': reply_text})

@app.route(rf'/{BOT_TOKEN}'.format(), methods=['POST'])
def respond():
    # retrieve the message in JSON and then transform it to Telegram object
    update = telegram.Update.de_json(request.get_json(force=True), updater.bot)
    message = update.message.text
    if message:
        # 使用 OpenAI API 进行回复
        response = openai.Completion.create(
            engine="davinci",
            prompt=message,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.5,
        )

        # 获取回复文本
        reply_text = response.choices[0].text.strip()

        # 发送回复消息
        chat_id = update.message.chat_id
        updater.bot.send_message(chat_id=chat_id, text=reply_text)

    return jsonify({'status': 'success', 'message': 'Received message successfully.'})

@app.route('/setwebhook', methods=['GET', 'POST'])
def configure_webhook():
    webhookUrl = parse.urljoin(WEB_HOOK,rf"/{BOT_TOKEN}")
    result = updater.bot.setWebhook(webhookUrl)
    if result:
        print(rf"webhook configured: {webhookUrl}")
        return rf"webhook configured: {webhookUrl}"
    else:
        print(rf"webhook setup failed")
        return rf"webhook setup failed"

if __name__ == '__main__':
    configure_webhook()
    serve(app, host="0.0.0.0", port=PORT)