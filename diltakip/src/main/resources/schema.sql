-- Drop tables if they exist
DROP TABLE IF EXISTS teacher_class;
DROP TABLE IF EXISTS student_class;
DROP TABLE IF EXISTS class_time;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS appusers;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS city;

-- Create the City table
CREATE TABLE IF NOT EXISTS city (
                                    id SERIAL PRIMARY KEY,
                                    name VARCHAR(255) NOT NULL
);

-- Create the Company table
CREATE TABLE IF NOT EXISTS company
(
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the Teacher table with company_id column
CREATE TABLE IF NOT EXISTS teacher
(
    id           BIGSERIAL PRIMARY KEY,
    name         VARCHAR(255) NOT NULL,
    tckn         VARCHAR(11)  NOT NULL,
    surname      VARCHAR(255) NOT NULL,
    phone        VARCHAR(20),
    second_phone VARCHAR(20),
    address      TEXT,
    city         VARCHAR(255),
    update_time  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_on   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    company_id   BIGINT
);

-- Create the Class table with company_id column
CREATE TABLE IF NOT EXISTS class
(
    id                 BIGSERIAL PRIMARY KEY,
    name               VARCHAR(255) NOT NULL,
    language           VARCHAR(255),
    teacher_id         BIGINT,
    capacity           INT,
    number_of_students INT,
    company_id         BIGINT
);

-- Create the ClassTime table with company_id column
CREATE TABLE IF NOT EXISTS class_time
(
    id          BIGSERIAL PRIMARY KEY,
    day_of_week VARCHAR(20),
    start_time  TIME,
    end_time    TIME,
    class_id    BIGINT,
    company_id  BIGINT
);

-- Create the Student table with company_id column
CREATE TABLE IF NOT EXISTS student
(
    id                BIGSERIAL PRIMARY KEY,
    name              VARCHAR(255) NOT NULL,
    tckn              VARCHAR(11)  NOT NULL,
    surname           VARCHAR(255) NOT NULL,
    phone             VARCHAR(20),
    second_phone      VARCHAR(20),
    address           TEXT,
    city              VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_on        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    company_id        BIGINT
);

-- Create the StudentClass table with company_id column
CREATE TABLE IF NOT EXISTS student_class
(
    id         BIGSERIAL PRIMARY KEY,
    student_id BIGINT,
    class_id   BIGINT,
    company_id BIGINT
);

-- Create the TeacherClass table with company_id column
CREATE TABLE IF NOT EXISTS teacher_class
(
    id         BIGSERIAL PRIMARY KEY,
    teacher_id BIGINT,
    class_id   BIGINT,
    company_id BIGINT
);

-- Create the UserRoles table
CREATE TABLE IF NOT EXISTS user_roles
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGINT,
    role_id BIGINT
);

-- Create the Role table
CREATE TABLE IF NOT EXISTS role
(
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create the AppUsers table
CREATE TABLE IF NOT EXISTS appusers
(
    id                     BIGSERIAL PRIMARY KEY,
    first_name             VARCHAR(255),
    last_name              VARCHAR(255),
    email                  VARCHAR(255),
    password               VARCHAR(255),
    phone                  VARCHAR(20),
    company_id             BIGINT,
    update_time            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_on             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    enabled                BOOLEAN   DEFAULT TRUE
);