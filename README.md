# cow-hut


## Live Link: [(https://cow-hut-railway-production.up.railway.app/)](https://cow-hut-railway-production.up.railway.app/)

# Application Routes:

## User
* api/v1/auth/signup (POST)
* api/v1/users (GET)
* api/v1/users/649006261086836a1e559d89 (Single GET) Include an id that is saved in your database
* api/v1/users/649006261086836a1e559d89 (PATCH)
* api/v1/users/649006261086836a1e559d89 (DELETE) Include an id that is saved in your database

## Cows

* api/v1/cows (POST)
* api/v1/cows (GET)
* api/v1/cows/64908925fd3c4e743b81826c (Single GET) Include an id that is saved in your database
* api/v1/cows/64908925fd3c4e743b81826c (PATCH)
* api/v1/cows/64908925fd3c4e743b81826c (DELETE) Include an id that is saved in your database

## Pagination and Filtering routes of Cows

* api/v1/cows?pag=1&limit=10
* api/v1/cows?sortBy=price&sortOrder=asc
* api/v1/cows?minPrice=20000&maxPrice=70000
* api/v1/cows?location=Chattogram
* api/v1/cows?searchTerm=Cha

##  /api/v1/orders (POST) Body

```
{
  "cow":"64908925fd3c4e743b81826c", 
  "buyer":"6490065c1086836a1e559d8b"
}
```
