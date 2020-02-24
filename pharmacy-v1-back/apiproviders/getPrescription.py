import json
import requests

def getPrescriptionList(clientId):
    url = 'http://localhost:5000/api/v1/prescription/' + str(clientId)
    response = requests.get(url)
    if (response.httpcode == 200):
        return response.content