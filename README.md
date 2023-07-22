# cow-hut


## Live Link: https://cow-hut-railway-deploy.vercel.app

# Application Routes:

## User
* https://cow-hut-railway-deploy.vercel.app/api/v1/auth/signup (POST)
* https://cow-hut-railway-deploy.vercel.app/api/v1/users (GET)
* https://cow-hut-railway-deploy.vercel.app/api/v1/users/64a74f5a3be5df417c061111 (Single GET) Include an id that is saved in your database
* https://cow-hut-railway-deploy.vercel.app/api/v1/users/64a74f5a3be5df417c061111 (PATCH)
* https://cow-hut-railway-deploy.vercel.app/api/v1/users/64a74f5a3be5df417c061111 (DELETE) Include an id that is saved in your database

## Cows

* https://cow-hut-railway-deploy.vercel.app/api/v1/cows (POST)
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows (GET)
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows/64a753223be5df417c061128 (Single GET) Include an id that is saved in your database
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows/64a753223be5df417c061128 (PATCH)
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows/64a753223be5df417c061128 (DELETE) Include an id that is saved in your database

## Pagination and Filtering routes of Cows

* https://cow-hut-railway-deploy.vercel.app/api/v1/cows?pag=1&limit=10
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows?location=Chattogram
* https://cow-hut-railway-deploy.vercel.app/api/v1/cows?searchTerm=Dhaka

##  /api/v1/orders (POST) Body

```
{
  "cow":"64b6bcb5bc441a2afbc5267e", 
  "buyer":"64a74f763be5df417c061116"
}
```
