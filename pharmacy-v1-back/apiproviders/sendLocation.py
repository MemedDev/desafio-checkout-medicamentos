import json

def sendLocation():
    f = open('/opt/memed/pharmacy-v1-back/data/location.json', 'r')
    content = f.read()
    content = content.encode('UTF-8')
    return content