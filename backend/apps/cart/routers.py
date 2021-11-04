
from fastapi.routing import APIRouter

from fastapi import APIRouter, Body, Request, HTTPException, status, Depends
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from apps.user.models import User
from apps.product.models import ProductModel
from .models import CartModel
import uuid

def get_cart_router(app):

    router = APIRouter()

    @router.post("/cart/{product_id}", description="Create cart and add product")
    async def creat_cart_add_product(
        request: Request,
        product_id: str,
        user: User = Depends(app.fastapi_users.get_current_active_user)
    ):
        product = await request.app.db["products"].find_one(
            {"_id": product_id}
        )
        cart = CartModel(
            user = user,
            products = [product]
        )
        cart = jsonable_encoder(cart)
        new_cart = await request.app.db["carts"].insert_one(cart)
        created_cart = await request.app.db["carts"].find_one(
            {"_id": new_cart.inserted_id}
        )

        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_cart)

    @router.post("/cart/{cart_id}/{product_id}", description="Add product to Cart")
    async def cart_add_product(
        request: Request,
        cart_id: str,
        product_id: str,
        user: User = Depends(app.fastapi_users.get_current_active_user)
    ):
        product = await request.app.db["products"].find_one(
            {"_id": product_id}
        )

        cart = await request.app.db["carts"].find_one(
            {"_id": cart_id}
        )
        
        cart["products"].append(product)
        cart = jsonable_encoder(cart)
        new_cart = await request.app.db["carts"].update_one(
                {"_id": cart_id}, {"$set": cart}
            )
        created_cart = await request.app.db["carts"].find_one(
            {"_id": cart_id}
        )

        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_cart)

    return router


