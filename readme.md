# DGTC Task

Need to work on Authentication & Books (CRUD)

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm or yarn installed

## Technologies
* Backend: Node, Express
* Database: MongoDB

## Installation
Design REST API for Authentication(login/register/logout/me) and Books(get all books/get book by id/add book/update book/delete book)

1. **Clone the repository:**
```bash
    git clone https://github.com/your-username/your-project.git
```

2. **Navigate to the directory**
```bash
    cd folder_name
```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Env setup:**
    Create .env file, copy everything from .env.example to .env, Update Mongo URI, and its done.

4. **Run the application:**
    ```bash
    npm run dev

**Once server is started, we can able to see DB connected log. We can then able to make REST Api requests.**

**_NOTE:_** Added postman collection, we can use it to make api request. Also, added swagger api docs for reference, we can go /api-docs to fetch api documentations

### JEST Testing
1. **Run test case:**
```base
    npm test
```