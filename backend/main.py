import uvicorn

if __name__ == "__main__":
    uvicorn.run("dictionary.app:app", port=3000, reload=True)
