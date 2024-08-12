-- Drop tables if they exist
DROP TABLE IF EXISTS teacher_class;
DROP TABLE IF EXISTS student_class;
DROP TABLE IF EXISTS class_time;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;

-- Create teacher table with auto-incrementing primary key
CREATE TABLE teacher (
                         id BIGSERIAL PRIMARY KEY,
                         name VARCHAR(255),
                         tckn VARCHAR(20),
                         surname VARCHAR(255),
                         phone VARCHAR(20),
                         second_phone VARCHAR(20),
                         address VARCHAR(255),
                         city VARCHAR(50),
                         update_time TIMESTAMP,
                         created_on TIMESTAMP NOT NULL
);

-- Insert data into teacher table
INSERT INTO teacher (name, tckn, surname, phone, second_phone, address, city, update_time, created_on) VALUES
                                                                                                           ('Ali', '12345678901', 'Kara', '555-1234', '555-5678', '123 Öğretmen Cadde', 'ANKARA', NOW(), NOW()),
                                                                                                           ('Mehmet', '23456789012', 'Yılmaz', '555-2345', '555-6789', '456 Öğretmen Sokak', 'ISTANBUL', NOW(), NOW()),
                                                                                                           ('Ayşe', '34567890123', 'Demir', '555-3456', '555-7890', '789 Öğretmen Caddesi', 'IZMIR', NOW(), NOW());

-- Create class table with auto-incrementing primary key
CREATE TABLE class (
                       id BIGSERIAL PRIMARY KEY,
                       name VARCHAR(255),
                       language VARCHAR(50),
                       teacher_id BIGINT REFERENCES teacher(id)
);

-- Insert data into class table
INSERT INTO class (name, language, teacher_id) VALUES
                                                   ('Matematik', 'Türkçe', 1),
                                                   ('Fizik', 'İngilizce', 2),
                                                   ('Kimya', 'Türkçe', 3),
                                                   ('Biyoloji', 'Türkçe', 1);

-- Create class_time table with auto-incrementing primary key
CREATE TABLE class_time (
                            id BIGSERIAL PRIMARY KEY,
                            day_of_week VARCHAR(20),
                            start_time TIME,
                            end_time TIME,
                            class_id BIGINT REFERENCES class(id)
);

-- Insert data into class_time table
INSERT INTO class_time (day_of_week, start_time, end_time, class_id) VALUES
                                                                         ('Pazartesi', '09:00:00', '10:30:00', 1),
                                                                         ('Salı', '11:00:00', '12:30:00', 1),
                                                                         ('Çarşamba', '13:00:00', '14:30:00', 2),
                                                                         ('Perşembe', '10:00:00', '11:30:00', 3),
                                                                         ('Cuma', '14:00:00', '15:30:00', 4);

-- Create student table with auto-incrementing primary key
CREATE TABLE student (
                         id BIGSERIAL PRIMARY KEY,
                         name VARCHAR(255),
                         tckn VARCHAR(20),
                         surname VARCHAR(255),
                         phone VARCHAR(20),
                         second_phone VARCHAR(20),
                         address VARCHAR(255),
                         city VARCHAR(50),
                         registration_date TIMESTAMP,
                         update_time TIMESTAMP,
                         created_on TIMESTAMP NOT NULL
);

-- Insert data into student table
INSERT INTO student (name, tckn, surname, phone, second_phone, address, city, registration_date, update_time, created_on) VALUES
                                                                                                                              ('Ayşe', '98765432101', 'Yılmaz', '555-6789', '555-1234', '456 Kızılçam Sokak', 'ANKARA', NOW(), NOW(), NOW()),
                                                                                                                              ('Fatma', '87654321012', 'Çelik', '555-2345', '555-5678', '789 Karanfil Sokak', 'ISTANBUL', NOW(), NOW(), NOW()),
                                                                                                                              ('Ahmet', '76543210923', 'Öztürk', '555-3456', '555-6789', '123 Zambak Sokak', 'IZMIR', NOW(), NOW(), NOW()),
                                                                                                                              ('Mehmet', '65432109834', 'Arslan', '555-4567', '555-7890', '234 Menekşe Sokak', 'ANTALYA', NOW(), NOW(), NOW()),
                                                                                                                              ('Ali', '54321098745', 'Koç', '555-5678', '555-8901', '345 Karanfil Cadde', 'BOLU', NOW(), NOW(), NOW()),
                                                                                                                              ('Elif', '43210987656', 'Sönmez', '555-6789', '555-9012', '456 Sümbül Sokak', 'BURSA', NOW(), NOW(), NOW()),
                                                                                                                              ('Fatih', '32109876567', 'Gül', '555-7890', '555-0123', '567 Orkide Sokak', 'IZMIR', NOW(), NOW(), NOW()),
                                                                                                                              ('Hüseyin', '21098765478', 'Yurt', '555-8901', '555-1234', '678 Lale Sokak', 'KONYA', NOW(), NOW(), NOW()),
                                                                                                                              ('Zeynep', '10987654389', 'Güneş', '555-9012', '555-2345', '789 Çiçek Sokak', 'SAMSUN', NOW(), NOW(), NOW()),
                                                                                                                              ('Burcu', '09876543290', 'Aydın', '555-0123', '555-3456', '890 Ağaç Sokak', 'TRABZON', NOW(), NOW(), NOW()),
                                                                                                                              ('Merve', '98765432102', 'Acar', '555-1234', '555-4567', '901 Gülden Sokak', 'MERSIN', NOW(), NOW(), NOW()),
                                                                                                                              ('Can', '87654321023', 'Kurt', '555-2345', '555-5678', '012 Kiraz Sokak', 'EDIRNE', NOW(), NOW(), NOW()),
                                                                                                                              ('Deniz', '76543210934', 'Kara', '555-3456', '555-6789', '123 Zambak Cadde', 'BOLU', NOW(), NOW(), NOW()),
                                                                                                                              ('Gizem', '65432109845', 'Sönmez', '555-4567', '555-7890', '234 Lale Cadde', 'DENIZLI', NOW(), NOW(), NOW()),
                                                                                                                              ('Seda', '54321098756', 'Demir', '555-5678', '555-8901', '345 Orkide Cadde', 'KARAMAN', NOW(), NOW(), NOW()),
                                                                                                                              ('Ege', '43210987667', 'Berk', '555-6789', '555-9012', '456 Sümbül Cadde', 'HATAY', NOW(), NOW(), NOW()),
                                                                                                                              ('Hakan', '32109876578', 'Arslan', '555-7890', '555-0123', '567 Menekşe Cadde', 'KIRIKKALE', NOW(), NOW(), NOW()),
                                                                                                                              ('Leyla', '21098765489', 'Yılmaz', '555-8901', '555-1234', '678 Çiçek Cadde', 'YOZGAT', NOW(), NOW(), NOW()),
                                                                                                                              ('Selin', '10987654390', 'Gül', '555-9012', '555-2345', '789 Ağaç Cadde', 'TRABZON', NOW(), NOW(), NOW()),
                                                                                                                              ('Rıza', '09876543201', 'Koç', '555-0123', '555-3456', '890 Gülden Cadde', 'GUMUSHANE', NOW(), NOW(), NOW()),
                                                                                                                              ('Özlem', '98765432103', 'Güneş', '555-1234', '555-4567', '901 Kiraz Cadde', 'AFYONKARAHISAR', NOW(), NOW(), NOW());

-- Create student_class table with auto-incrementing primary key
CREATE TABLE student_class (
                               id BIGSERIAL PRIMARY KEY,
                               student_id BIGINT REFERENCES student(id),
                               class_id BIGINT REFERENCES class(id)
);

-- Insert data into student_class table
INSERT INTO student_class (student_id, class_id) VALUES
                                                     (1, 1),
                                                     (2, 1),
                                                     (3, 2),
                                                     (4, 2),
                                                     (5, 3),
                                                     (6, 3),
                                                     (7, 4),
                                                     (8, 4),
                                                     (9, 1),
                                                     (10, 2),
                                                     (11, 3),
                                                     (12, 4),
                                                     (13, 1),
                                                     (14, 2),
                                                     (15, 3),
                                                     (16, 4),
                                                     (17, 1),
                                                     (18, 2),
                                                     (19, 3),
                                                     (20, 4);

-- Create teacher_class table with auto-incrementing primary key
CREATE TABLE teacher_class (
                               id BIGSERIAL PRIMARY KEY,
                               teacher_id BIGINT REFERENCES teacher(id),
                               class_id BIGINT REFERENCES class(id)
);

-- Insert data into teacher_class table
INSERT INTO teacher_class (teacher_id, class_id) VALUES
                                                     (1, 1),
                                                     (2, 2),
                                                     (3, 3),
                                                     (1, 4);
