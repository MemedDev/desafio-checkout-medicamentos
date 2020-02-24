import requests
import json


def getMainPharmaciesList():
    result = requests.get('https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com/desafio/farmacias')
    return json.loads(result.content)

def getFullPharmaciesList():
    primaryList = getMainPharmaciesList()
    fullFarmacyList = []
    for pharmacy in primaryList['data']:
        url = pharmacy['links']['self']
        resultPharmacy = requests.get(url)
        fullFarmacyList.append(json.loads(resultPharmacy.content))
    return fullFarmacyList

#obj = getFullPharmaciesList()
#print(str(obj))
