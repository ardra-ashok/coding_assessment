# What are the different subsets of SQL
DDL - data defenition language
DML - Data manipulation language
DCL - Data Control language
TCL - Transaction Control language

# What is DBMS? and its different types?
A software that interacts with the user, applications, and the database itself to capture and analyse data.
The data stored in the database can be anytype like strings, numbers, images etc.
Different types of DBMS
- Hierarchical
- Network
- Relational 
- Object-oriented.

# Table and field in SQL
A table refers to collection of data in organised manner inform of rows and columns.
A field refers to number of columns in a table.

# what are joins in SQL?
A join clause is used to combine rows from two or more tables, based on a related column between them. Its used to merge two tables or retrieve data from there. 

4 Joins in SQL
- Inner Join
- Full Join 
- left Join 
- right join

# what is the difference between char and varchar2?
Char is used for strings of fixed length.
varchar2 is used for character strings of variable length. 
char(10) can only store 10 chars and will not be able to store a string of any other length.
varchar2(10) can store any length ie, 6,8,2 in theis variable.

# what is primary key?
A primary key is a column or a set of columns in a table whose values uniquely identify a row in the table.

# What are constraints?
SQL constraints are used to specify rules for the data in a table. Constraints are used to limit the type of data that can go into a table. 
NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY - Prevents actions that would destroy links between tables
CHECK - Ensures that the values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column if no value is specified
CREATE INDEX - Used to create and retrieve data from the database very quickly

# Difference btw SQL and MySQL?
Sql is a standard language stands for structured query language. SQL is the core of the relational database which is used for accessing and managing database
mySql is an open source relational database management system that works on many platforms. 

# What is foreign key?
A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

# What do you mean by data integrity?
Data integrity is the overall accuracy, completeness, and consistency of data. 

# query to display the current date
select getDate();

# What are Joins?
Joins are used to get result from multiple tables using primary and foreign keys of related tables.
# Explain different joins?
Inner Join - returns those records which have matching values in both the table. 
full join - returns all those records which either have a match in the left or right table.
left join - returns record from the left table,and also those records which satisfy the condition from right table.
right join - returns record from the right table,and also those records which satisfy the condition from left table.

# What are triggers in SQL?
Triggers are stored procedure that are invoked when some event like insert, delete and update happens in the database on a particular table.

# What is denormalization?


# what are entities and relationships?
An entity is an object that exists. In database administration, an entity can be a single thing, person, place, or object. Data can be stored about such entities.

Relation or links between entities that have something to do with each other. There can also be relationships between seperate tables.

# what is Index? different types of index. 
A SQL index is used to retrieve data from a database very fast. 
Unique index - doesnt allow the field to have duplicate values if the column is unique indexed. If a primary key is defined, a unique index can be applied automatically.

# inner join commands
select * from person JOIN car on person.car_id = car.id;

# left join commands
select * from person LEFT JOIN car on car.id = person.car_id;
select * from person LEFT JOIN car on car.id = person.car_id WHERE car.* IS NULL.

OOP concepts , SDLC , RDBMS, testing , Agile etc, trial and error method


