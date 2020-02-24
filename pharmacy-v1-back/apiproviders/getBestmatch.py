import requests
import apiproviders.getPharmacies as getPharmacies
import json
import apiproviders.sendPrescription as sendPrescription
import apiproviders.sendLocation as sendLocation
import math


def getBestMatch(prescription, location):
    pharmaciesList = getPharmacies.getFullPharmaciesList()
    prescriptionItems = []
    #prescriptionReceived = json.loads(prescription)
    #locationReceived = json.loads(location)
    for med in prescription['data']:
        print(med)
        prescriptionItems.append(med['nome'])
    pharmacyItems = []
    pharmaciesListWithPrice = []
    getBestMatch = {
        "pharmacy": None,
        "totalPrice": 0,
        "distance": 0,
        "medList": []
    }
    compareArray = []
    for pharmacy in pharmaciesList:
        pharmacyItems = []
        pharmaciesListWithPrice = []
        pharmacyPrice = 0
        medsInPharmacy = pharmacy['data']['attributes']['medicamentos']
        for medInPharm in medsInPharmacy:
            if medInPharm['nome'] == prescriptionItems[len(pharmacyItems)]:
                filterForquant = next(item for item in prescription['data'] if item['nome'] == medInPharm['nome'])
                total = medInPharm['preco'] * filterForquant['quant']
                medToAdd = {
                    "nome": medInPharm['nome'],
                    "preco": medInPharm['preco'],
                    "quant": filterForquant['quant'],
                    "total": total
                }
                pharmaciesListWithPrice.append(medToAdd)
                pharmacyItems.append(medInPharm['nome'])
                pharmacyPrice = pharmacyPrice + total
            if len(pharmacyItems) == len(prescriptionItems):
                break
        triangleSideA = abs(location['lon'] - pharmacy['data']['attributes']['lon'])
        triangleSideB = abs(location['lat'] - pharmacy['data']['attributes']['lat'])
        distance = math.sqrt(pow(triangleSideA, 2) + pow(triangleSideB, 2)) * 111139
        if pharmacyItems == prescriptionItems:
            if (getBestMatch['totalPrice'] > pharmacyPrice) or (getBestMatch['totalPrice'] == 0):
                if (getBestMatch['distance'] > distance) or (getBestMatch['distance'] == 0):
                    getBestMatch = {
                        "pharmacy": pharmacy['data']['attributes']['nome'],
                        "distance": math.floor(distance),
                        "totalPrice": pharmacyPrice,
                        "medList": pharmaciesListWithPrice
                    }
                compItemtoAdd = {
                    "nome": pharmacy['data']['attributes']['nome'],
                    "dist": distance,
                    "total": pharmacyPrice
                }
                compareArray.append(compItemtoAdd)
        
    return json.dumps(getBestMatch)


prescriptionTest = json.loads(sendPrescription.sendPrescription(1))
locationTest = json.loads(sendLocation.sendLocation())
#obj = getBestMatch(prescriptionTest, locationTest)

#print(obj)



