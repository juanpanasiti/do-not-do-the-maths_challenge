from datetime import datetime
from ..schemas.dollar_schemas import DolarBase


def get_dollar_data(data: dict) -> DolarBase:
    date = datetime.strptime(data['date'],'%d-%m-%Y - %H:%M')
    sell = float(data['sell'].replace(',','.'))
    buy = float(data['buy'].replace(',','.'))

    return DolarBase(date=date,sell=sell,buy=buy)
