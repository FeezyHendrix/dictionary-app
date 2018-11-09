from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import config
import json
import re
from difflib import get_close_matches as match
import apiai

app = Flask(__name__)
cors = CORS(app, resources={r"/search_word/*": {'Access-Control-Allow-Origin': '*'}})
ai = apiai.ApiAI(config.CLIENT_ACCESS_TOKEN)
data = json.load(open('Data.json'))

@app.route('/search_word/<string:word>', methods=['GET'])
def search(word):
    word = word.lower()
    if word in data:
        return jsonify({'status':200, 'data' : {'word': word, 'definition' : data[word]}})

    elif len(match(word, data.keys())) > 0:
        return jsonify({ 'status': 160 , 'data' : match(word, data.keys())})

    else:
        return jsonify({'status':60, 'data':"Word Doesnt Exist"})


@app.route('/send_message', methods=['POST'])
def received():
    data  = request.get_json()
    print()
    parse_message(data['message'])
    
    return 'ok'




def search(word):
    word = word.lower()
    if word in data:
        return jsonify({'status':200, 'data' : {'word': word, 'definition' : data[word]}})

    elif len(match(word, data.keys())) > 0:
        return jsonify({ 'status': 160 , 'data' : match(word, data.keys())})

    else:
        return jsonify({'status':60, 'data':"Word Doesnt Exist"})


def parse_message(message):
    request = ai.text_request()
    request.query = message

    response = json.loads(request.getresponse().read().decode('utf-8'))
    responseStatus = response['status']['code']

    if responseStatus == 200:
        try:
            word = response['result']['parameters']['any']
            search(word)


        except Exception as e:
            print(e)






@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)
