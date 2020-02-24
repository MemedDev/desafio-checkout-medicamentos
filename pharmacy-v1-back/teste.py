import json
import requests

url = 'http://localhost:5000/api/v1/bestmatch'

params = {
    "location" : '{"lat": -23.5648304, "lon": -46.6436604}',
    "prescription": '[{"clientId": 1, "data": [{"nome": "Ácido zoledrônico 4mg", "quant": 1}, {"nome": "Água para injeção 1mL", "quant": 1}, {"nome": "Bromazepam 3mg", "quant": 1}]}]'
}

result = json.loads(requests.post(url, params=params).content)


print(str(result))