from typing import Optional
import uuid
from pydantic import BaseModel, Field, fields

class ProductModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    name: str = Field(...)
    price: int = 0 
    description: str = Field(...)
    img: str = Field(...) 

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "id": "00010203-0405-0607-0809-0a0b0c0d0e0f",
                "name": "Postinor unidosis 1 tableta caja",
                "price": 110,
                "description": "Levonorgestrel 1.5 MG",
                "img": "https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_5640003_1dkmur4ra"
            }
        }


class UpdateProductModel(BaseModel):
    name: Optional[str]
    price: Optional[int]
    description: Optional[str]
    img: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "name": "Postinor unidosis 1 tableta caja",
                "price": 110,
                "description": "Levonorgestrel 1.5 MG",
                "img": "https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_5640003_1dkmur4ra"
            }
        }