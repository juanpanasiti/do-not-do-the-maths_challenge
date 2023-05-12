import requests
import os

from ..schemas.dollar_schemas import DollarDataResponse, DolarBase
from ..helpers.dollar_helpers import get_dollar_data


def get_dollar_kind_data():
    api_key = os.getenv('DOLARITO_API_KEY', '')
    data = requests.get(
        f'https://www.dolarito.ar/_next/data/{api_key}/dolar-hoy.json')
    data = data.json()
    data = data['pageProps']['realTimeQuotations']['quotations']
    official = get_dollar_data(data['oficial'])
    blue = get_dollar_data(data['informal'])
    ccl = get_dollar_data(data['ccl'])
    mep = get_dollar_data(data['mep'])
    return DollarDataResponse(official=official, blue=blue, ccl=ccl, mep=mep)
