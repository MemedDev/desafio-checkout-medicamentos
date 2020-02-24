########################################################################################
# App: Teste Memed - Pharmacy Checkout                                                 #
# Language: Python3                                                                    #
# Version: 1.0                                                                         #
# Date: 2020/02/24 00:10:00                                                            #
# Author: Alison Martins                                                               #
# E-Mail: martins.alison.new@gmail.com                                                 #
# File: sendLocation.py                                                                #
# Description: Provider that feteches from file (given by memed) the prescrption of    #
#              the client                                                              #
########################################################################################

#DEPENDENCIES DECLARAIONS
#SYSTEM DEPENDENCIES
import json

def sendPrescription(clientId):
    f = open('/opt/memed/pharmacy-v1-back/data/prescription.json', 'r')
    content = f.read()
    content = content.encode('UTF-8')
    response = json.loads(content)
    if response['clientId'] == clientId:
        return json.dumps(response)