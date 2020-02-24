########################################################################################
# App: Teste Memed - Pharmacy Checkout                                                 #
# Language: Python3                                                                    #
# Version: 1.0                                                                         #
# Date: 2020/02/24 00:10:00                                                            #
# Author: Alison Martins                                                               #
# E-Mail: martins.alison.new@gmail.com                                                 #
# File: server.py                                                                      #
# Description: Router provider for APIs. Based in FLASK                                #
########################################################################################

#DEPENDENCIES DECLARAIONS
#PRORPIETARY DEPENDENCIES
from apiproviders.sendPrescription import sendPrescription
from apiproviders.sendLocation import sendLocation
from apiproviders.getBestmatch import getBestMatch
#GENERAL PYTHON DEPENDENCIES
import json
import flask
from flask import Flask
from flask import abort
from flask import request

#INSTANCIATE FLASL OBJECT ESTENDED TO ALL ROUTES SERVICES
app = Flask(__name__)

#INSTANCIATION OF ROUTE THAT PROVIDES PRESCRIPTION JSON
@app.route('/api/v1/prescription/<int:clientId>', methods=['GET'])
def sendPresctiptionAPI(clientId):
    #CALLS PROVIDER WITH GIVEN PARAMETER
    response = sendPrescription(clientId)
    #IN CASE OF NO RESPONSE THROWS 404 ERROR PAGE
    if len(response) == 0:
        abort(404)
    else:
        #INSTANCIATE RESPONSE OBJECT AND SETS HEADERS TO PREVENT CORS AND RESPOND AS JSON
        flaskResponse = flask.Response(response)
        flaskResponse.headers['content-type'] = 'application/json'
        flaskResponse.headers['access-control-allow-origin'] = '*'
        return flaskResponse

#INSTANCIATION OF ROUTE THAT PROVIDES LOCATION JSON
@app.route('/api/v1/location', methods=['GET'])
def sendLocationAPI():
    #CALLS PROVIDER WITH GIVEN PARAMETER
    response = sendLocation()
    #IN CASE OF NO RESPONSE THROWS 404 ERROR PAGE
    if len(response) == 0:
        abort(404)
    else:
        #INSTANCIATE RESPONSE OBJECT AND SETS HEADERS TO PREVENT CORS AND RESPOND AS JSON
        flaskResponse = flask.Response(response)
        flaskResponse.headers['content-type'] = 'application/json'
        flaskResponse.headers['access-control-allow-origin'] = '*'
        return flaskResponse

@app.route('/api/v1/bestmatch', methods=['GET'])
def getBestMatchAPI():
    #DESERIALIZATION OF PARAMETERES
    presc = json.loads(request.args.get('prescription'))
    loct = json.loads(request.args.get('location'))
    #CALLS PROVIDER WITH GIVEN PARAMETER
    response = getBestMatch(presc, loct)
    #IN CASE OF NO RESPONSE THROWS 404 ERROR PAGE
    if len(response) == 0:
        abort(404)
    else:
        #INSTANCIATE RESPONSE OBJECT AND SETS HEADERS TO PREVENT CORS AND RESPOND AS JSON
        flaskResponse = flask.Response(response)
        flaskResponse.headers['content-type'] = 'application/json'
        flaskResponse.headers['access-control-allow-origin'] = '*'
        return flaskResponse
        
#STARTS THE SERVER
if __name__ == '__main__':
    app.run(debug=True)