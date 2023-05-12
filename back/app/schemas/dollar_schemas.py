from datetime import datetime
from pydantic import BaseModel

class DolarBase(BaseModel):
    date: datetime
    buy: float
    sell: float


class DollarDataResponse(BaseModel):
    official: DolarBase
    blue: DolarBase
    ccl: DolarBase
    mep: DolarBase