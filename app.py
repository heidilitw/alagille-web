from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_folder='client/build', static_url_path='')

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
