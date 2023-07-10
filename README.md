# cow-hut


## Live Link: https://cow-hut-railway.vercel.app

# Application Routes:

## User
* https://cow-hut-railway.vercel.app/api/v1/auth/signup (POST)
* https://cow-hut-railway.vercel.app/api/v1/users (GET)
* https://cow-hut-railway.vercel.app/api/v1/users/649006261086836a1e559d89 (Single GET) Include an id that is saved in your database
* https://cow-hut-railway.vercel.app/api/v1/users/649006261086836a1e559d89 (PATCH)
* https://cow-hut-railway.vercel.app/api/v1/users/649006261086836a1e559d89 (DELETE) Include an id that is saved in your database

## Cows

* https://cow-hut-railway.vercel.app/api/v1/cows (POST)
* https://cow-hut-railway.vercel.app/api/v1/cows (GET)
* https://cow-hut-railway.vercel.app/api/v1/cows/64908925fd3c4e743b81826c (Single GET) Include an id that is saved in your database
* https://cow-hut-railway.vercel.app/api/v1/cows/64908925fd3c4e743b81826c (PATCH)
* https://cow-hut-railway.vercel.app/api/v1/cows/64908925fd3c4e743b81826c (DELETE) Include an id that is saved in your database

## Pagination and Filtering routes of Cows

* https://cow-hut-railway.vercel.app/api/v1/cows?pag=1&limit=10
* https://cow-hut-railway.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
* https://cow-hut-railway.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000
* https://cow-hut-railway.vercel.app/api/v1/cows?location=Chattogram
* https://cow-hut-railway.vercel.app/api/v1/cows?searchTerm=Cha

##  /api/v1/orders (POST) Body

```
{
  "cow":"64908925fd3c4e743b81826c", 
  "buyer":"6490065c1086836a1e559d8b"
}
```
