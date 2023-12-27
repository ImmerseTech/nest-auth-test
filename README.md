## Authorization
##### It`s simple project with register and login. 
#### This project created with:
- [PostgresQL](https://www.postgresql.org/)
- [NestJS](https://nestjs.com/)
- [React](https://react.dev/)

## Running the Project with Docker Compose

This project can be launched using Docker Compose. Ensure that Docker and Docker Compose are installed before getting started.

### Step 1: Clone the Repository

First, clone this repository to your computer:

```bash
git clone https://github.com/ImmerseTech/nest-auth-test
cd nest-auth-test
```
### Step 2. Create a .env file in the root of './back' folder according to the example:
```bash
cd back
touch .env
```
##### Example:
```bash
.env.example
```


##### The example specifies the variables to run in docker. If the launch is local or on the server, then you need to specify your variables.

### Step 3. In the root folder of your project you need run this command:
```bash
docker-compose up
```