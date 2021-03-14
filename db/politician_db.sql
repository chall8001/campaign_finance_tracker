DROP DATABASE IF EXISTS politican_db; 

CREATE DATABASE politican_db;

USE politican_db;

Create Table politicanNames (
CID varchar(255) NOT NULL, 
CRPName varChar(255) NOT NULL,
party varChar(2) NOT NULL,
district varchar(225) NOT NULL, 
FECC_ID varchar(225) NOT NULL
)

SELECT * FROM politican_db.politicanNames;
