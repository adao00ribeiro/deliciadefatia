import sqlite3 from "sqlite3";
const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = [
    ` CREATE TABLE User (
    id         STRING PRIMARY KEY,
    name       STRING,
    email      STRING,
    password   STRING,
    created_at DATE,
    updated_at DATE
    )`,   
    `CREATE TABLE Category (
    id         STRING PRIMARY KEY,
    name       STRING,
    created_at DATE,
    updated_at DATE
    )`,
    `CREATE TABLE Products (
    id          STRING PRIMARY KEY,
    category_id STRING REFERENCES Category (id),
    name        STRING,
    price       STRING,
    description STRING,
    banner      STRING,
    created_at  DATE,
    updated_at  DATE
)`,
`CREATE TABLE Orders (
    id         STRING  PRIMARY KEY,
    [table]    INTEGER,
    status     BOOLEAN DEFAULT (false),
    drat       BOOLEAN DEFAULT (true),
    name       STRING,
    created_at DATE,
    updated_at DATE
)`,
`CREATE TABLE Item (
    id         STRING  PRIMARY KEY,
    order_id   STRING  REFERENCES Orders (id),
    product_id STRING  REFERENCES Products (id),
    amount     INTEGER,
    created_at DATE,
    updated_at DATE
)`]


const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        SQL_ITENS_CREATE.forEach(element => {
            database.run(element, (err) => {
                if (err) {
                    // Possivelmente a tabela já foi criada
                } else {
                    console.log('Tabela criada com sucesso.')
                }
            })
        });
        
    }
})
export default database