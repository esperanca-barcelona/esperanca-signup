# Experanca Signup Sheet & Backend

This project encompasses the public pages, private pages, and backend for Esperanca to manage signup of their members for their weekly walks.

## Project Technical & Technology Overview

The frontend for this is done in React.

The backend is a mixture of a few different technologies; it uses Zeit's `now` for deployment of both static pages which are served with the react, and set-up and deployment of functions which run on the backend to do things like query the database. 

The data is stored in FaunaDB.

Cron jobs are managed through easycron.com.

## Local development

To develop locally you need three things:

1. Set up FaunaDB (easiest with docker)

    (from this [gist](https://gist.github.com/CaryBourgeois/ebe08f8819fc1904523e360746a94bae))

    ```shell
    $  docker pull fauna/faunadb

    #  You can also add '-d' to run the database in detached mode.
    $  docker run --rm --name faunadb -p 8443:8443 \
              -v <host-directory or named-volume>:/var/lib/faunadb \
              fauna/faunadb
    ```

2. Set up access to local FaunaDB

    This has already basically beend one, so long as you don't change the secret name from the previous step. Access to the db can be performed through `process.env.FAUNADB_SECRET_KEY`

    Optionally, you can install and set up the fauna tool to be able to use it to look into the database.

    ```shell
    #  Install the fauna shell
    $  npm install -g fauna-shell
    
    #  Add the localhost endpoint created by default with docker
    $  fauna add-endpoint http://localhost:8443/ --alias localhost --key secret

    #  Create a database in the local endpoint
    $  fauna create-database esperanca-signup

    #  Create a key for the database
    $  fauna create-key esperanca-signup server
    ```

    Once you've created the key, copy the file named `.env.sample` in the root of this repository and make sure the following is set:

    ```
    FAUNADB_SECRET_KEY=<your secret key from above command>
    ```

3. Run the development version of the server

    ```shell
    $ now dev
    ```

4. (Optional) Simulate cron with PostMan or CURL

    TODO

## Deployment

To deploy you'll need to sign in to the esperanca barcelona zeit account; we only have one developer set up right now and would probably have to pay for more.

I'll try to work on setting up continuous deployment with github
ASAP as that will simplify things significantly.

### Deploying From Your Terminal

Before you deploy, you'll have to login. This can be done using:

```shell
$ now login
```

You'll need access to the group email as the login process involves sending an email to that address. After that is complete you'll be able to deploy using this command:

```shell
$ now
```

### 