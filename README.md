In order to do this activity you have to fork this repository. 

**Run the server**

First, you should execute the npm install in `/server`, after, you should init the server in `/server` and execute the command `npm run serve`.

**Endpoint API:**

 Loan Object:
 
```JSON
"loan": {"userId": 3,"date": "03/06/2018"}

```
 Book Object:

```JSON
 “book”: {"id": 4,"name": "O Hobbit","userId": 1,"loan": loan}
 
 “loan”: false, default value.

```

| VERB   | ENDPOINT   | PARAMS | RETURN |
| ------ | ---------- |------ | ------ |
| POST   | /books     | book  | 200 OK |
| GET    | /books     |       | [book] |
| GET    |/books/:id  |       | book   |
| PUT    |/books/:id  | book  |        |
| DELETE |/books/:id  |       | 200 OK |



User Object: 

```javascript 
    user: {
      id: 1,
      name: 'Teste',
      email: 'teste@teste.com',
      password: '123456'
    }
```    

| VERB   | ENDPOINT   | PARAMS | RETURN |
| ------ | ---------- |------ | ------ |
| POST   | /users     | user  | 200 ok |
| GET    | /users/:id |       | book   |
| PUT    |/users/:id  | user  |        |
| DELETE |/users/:id  |       |200 ok  |

You can use url parameter like:

* limit: limit data, like: _limit=30
* sort: to data order, like: _sort=id
* order: asc or desc data


*  page: page number, like: _page=2, default value per page: 10.

In url parameter you can use also relationship like: _sort=loan.userId. In order to filter some data you can use . to access deep properties, like: loan.userId=20.

More details visit the link: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)