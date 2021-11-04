from fastapi import APIRouter, Body, Request, HTTPException, status, Depends
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from apps.user.models import User
from .models import ProductModel, UpdateProductModel


def get_product_router(app):

    router = APIRouter()

    @router.post(
        "products/",
        response_description="Add new product",
    )
    async def create_product(
        request: Request,
        #user: User = Depends(app.fastapi_users.get_current_active_user),
        product: ProductModel = Body(...),
    ):
        product = jsonable_encoder(product)
        new_product = await request.app.db["products"].insert_one(product)
        created_product = await request.app.db["products"].find_one(
            {"_id": new_product.inserted_id}
        )

        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_product)

    @router.get("products/", response_description="List all products")
    async def list_products(
        request: Request,
        #user: User = Depends(app.fastapi_users.get_current_active_user),
    ):
        products = []
        for doc in await request.app.db["products"].find().to_list(length=100):
            products.append(doc)
        return products

    @router.get("products/{id}", response_description="Get a single product")
    async def show_product(
        id: str,
        request: Request,
        #user: User = Depends(app.fastapi_users.get_current_active_user),
    ):
        if (product := await request.app.db["products"].find_one({"_id": id})) is not None:
            return product

        raise HTTPException(status_code=404, detail=f"Product {id} not found")

    @router.put("products/{id}", response_description="Update a product")
    async def update_product(
        id: str,
        request: Request,
        #user: User = Depends(app.fastapi_users.get_current_active_user),
        product: UpdateProductModel = Body(...),
    ):
        product = {k: v for k, v in product.dict().items() if v is not None}

        if len(product) >= 1:
            update_result = await request.app.db["products"].update_one(
                {"_id": id}, {"$set": product}
            )

            if update_result.modified_count == 1:
                if (
                    updated_product := await request.app.db["products"].find_one({"_id": id})
                ) is not None:
                    return updated_product

        if (
            existing_product := await request.app.db["products"].find_one({"_id": id})
        ) is not None:
            return existing_product

        raise HTTPException(status_code=404, detail=f"Product {id} not found")

    @router.delete("products/{id}", response_description="Delete Product")
    async def delete_product(
        id: str,
        request: Request,
        #user: User = Depends(app.fastapi_users.get_current_active_user),
    ):
        delete_result = await request.app.db["products"].delete_one({"_id": id})

        if delete_result.deleted_count == 1:
            return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

        raise HTTPException(status_code=404, detail=f"Product {id} not found")

    return router