CREATE TABLE IF NOT EXISTS USER (
    email TEXT PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    country TEXT NOT NULL,
    street_address TEXT NOT NULL
);

DELETE FROM USER;

INSERT INTO USER VALUES ('joshua.abbott@wsu.edu', 'Josh', 'Abbott', 'United States', '123 Main St.');
