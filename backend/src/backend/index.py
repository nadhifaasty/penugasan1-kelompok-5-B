from fastapi import FastAPI
from pydantic import BaseModel
import json
import os
from pathlib import Path
from fastapi.staticfiles import StaticFiles

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"

app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

ITEMS_FILE = BASE_DIR / "items.json"

if ITEMS_FILE.exists():
    with open(ITEMS_FILE, "r") as file:
        items = json.load(file)
else:
    items = []

class Item(BaseModel):
    image_url: str
    audio_url: str
    gif_url: str

#GET
@app.get("/")
def read_root():
    return {"message": "Selamat datang di API Kelompok 5"}

@app.get("/items")
def get_items():
    return items

# POST
@app.post("/items")
def create_item(item: Item):
    items.append(item.dict())

    with open("items.json", "w") as file:
        json.dump(items, file)
    return item

# PUT
@app.put("/items/{item_id}")
def update_item(item_id: int, updated_item: Item):  
    if item_id < len(items):                         
        items[item_id] = updated_item.dict()         
        with open("items.json", "w") as file:        
            json.dump(items, file)
        return updated_item
    return {"error": "Item not found"}

# DELETE
@app.delete("/items/{item_id}")
def delete_item(item_id: int):              
    if item_id < len(items):               
        deleted_item = items.pop(item_id)  
        with open("items.json", "w") as file:  
            json.dump(items, file)
        return {"message": "Item deleted", "item": deleted_item}
    return {"error": "Item not found"}

