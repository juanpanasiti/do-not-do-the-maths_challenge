from fastapi import APIRouter

import requests

from ..schemas.dollar_schemas import DollarDataResponse
from ..service.dollar_service import get_dollar_kind_data


router = APIRouter(prefix='/dollar')


@router.get('/values')
async def login() -> DollarDataResponse:
    response = get_dollar_kind_data()
    return response
