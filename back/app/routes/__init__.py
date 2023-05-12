from fastapi import APIRouter

from .dollar_routes import router as dollar_router

api_router = APIRouter(prefix='/api')

api_router.include_router(dollar_router)