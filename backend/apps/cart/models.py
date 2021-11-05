from typing import List, Optional
import uuid
from pydantic import BaseModel, Field, fields
from pydantic.networks import EmailStr
from ..product.models import ProductModel
from ..user.models import User

class CartModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    user: User
    products: List[ProductModel]
    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example":{
            "id": "00010203-0405-0607-0809-0a0b0c0d0e0f",
            "user": {
                "id": "string",
                "email": "user@example.com",
                "is_active": True,
                "is_superuser": False,
                "adresses": [
                    "string"
                ]
            },
            "products":[{
                "id": "00010203-0405-0607-0809-0a0b0c0d0e0f",
                "name": "Postinor unidosis 1 tableta caja",
                "price": 110,
                "description": "Levonorgestrel 1.5 MG",
                "img": "https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_5640003_1dkmur4ra"
            }]
            }
        }

