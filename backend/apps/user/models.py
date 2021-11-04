from typing import List
from fastapi_users.models import BaseUser, BaseUserCreate, BaseUserUpdate, BaseUserDB


class User(BaseUser):
    adresses: List[str]


class UserCreate(BaseUserCreate):
    adresses: List[str]


class UserUpdate(User, BaseUserUpdate):
    adresses: List[str]


class UserDB(User, BaseUserDB):
    pass