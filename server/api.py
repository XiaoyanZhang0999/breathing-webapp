from flask import Flask, current_app
from flask_socketio import SocketIO, send, emit
from detector.processor import getCustomPulseApp
import numpy as np
import cv2
import calendar
import time
import base64
import traceback
import eventlet

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app,async_mode='eventlet')
args = {
    "serial":None,
    "baud":None,
    "udp":None
}
pulse = getCustomPulseApp(args)

@app.route('/')
def site():
    return current_app.send_static_file('client.html')


@socketio.on('frame')
def handle_frame(payload):
<<<<<<< HEAD
    print('data: ' + str(payload))
=======
    #print('data: ' + str(payload))
>>>>>>> realtimeresults
    b64 = payload['b64']
    testState = payload['testState']

#    print('data: ' + str(b64))

#    file = 'image'+time.strftime("%H%M%S")+'.jpg'
#    with open(file,"wb") as fh:
#        fh.write(base64.b64decode(b64))
    try:
        img = base64.b64decode(b64)
        img = np.array(list(img))
        img_array = np.array(img, dtype = np.uint8)
        frame = cv2.imdecode(img_array, 1)
        imout = pulse.process(frame)
        bpm = pulse.processor.bpm
        retval, buf = cv2.imencode('.jpg',imout)
        b64out = base64.b64encode(buf)
      #  file = 'imageout-'+time.strftime("%H%M%S")+'.jpg'
      #  with open(file,"wb") as fh:
      #      fh.write(base64.b64decode(b64out))
      #  print(b64out)
        payload = {}
        payload['b64'] = b64out.decode('utf-8')
        payload['testState'] = testState
        payload['bpm'] = bpm
        emit('response',payload)
    except Exception as e:
        print(e)
        traceback.print_exc()


if __name__ == '__main__':
    socketio.run(app,host='0.0.0.0')
    app.run()
