-- Insert data into the Company table
INSERT INTO company (name)
VALUES ('Tech Innovators Inc.'),
       ('Educational Solutions Ltd.'),
       ('Global Tech Co.');


-- Insert data into teacher table with company_id
INSERT INTO teacher (name, tckn, surname, phone, second_phone, address, city, update_time, created_on, company_id)
VALUES ('Ali', '12345678901', 'Kara', '555-1234', '555-5678', '123 Öğretmen Cadde', 'ANKARA', NOW(), NOW(), 1),
       ('Mehmet', '23456789012', 'Yılmaz', '555-2345', '555-6789', '456 Öğretmen Sokak', 'ISTANBUL', NOW(), NOW(), 2),
       ('Ayşe', '34567890123', 'Demir', '555-3456', '555-7890', '789 Öğretmen Caddesi', 'IZMIR', NOW(), NOW(), 3);


-- Insert data into class table with company_id
INSERT INTO class (name, language, teacher_id, capacity, number_of_students, company_id)
VALUES
    ('Türkçe 1', 'Türkçe', 1, 20, 11, 1),
    ('Türkçe 2', 'Türkçe', 1, 20, 10, 1),
    ('İngilizce 1', 'İngilizce', 2, 15, 13, 2),
    ('Rusça 1', 'Rusça', 3, 18, 18, 3),
    ('Arapça 1', 'Arapça', 1, 8, 6, 1),
    ('Fransızca 1', 'Fransızca', 2, 25, 20, 2),
    ('Türkçe 3', 'Türkçe', 3, 22, 14, 3),
    ('İngilizce 2', 'İngilizce', 1, 18, 12, 1),
    ('Rusça 2', 'Rusça', 2, 20, 15, 2),
    ('Arapça 2', 'Arapça', 3, 10, 7, 3),
    ('Fransızca 2', 'Fransızca', 1, 24, 22, 1),
    ('Türkçe 4', 'Türkçe', 2, 25, 16, 2),
    ('İngilizce 3', 'İngilizce', 3, 22, 20, 3),
    ('Rusça 3', 'Rusça', 1, 18, 10, 1),
    ('Arapça 3', 'Arapça', 2, 14, 8, 2),
    ('Fransızca 3', 'Fransızca', 3, 26, 23, 3);


-- Insert data into class_time table with company_id
INSERT INTO class_time (day_of_week, start_time, end_time, class_id, company_id)
VALUES
    ('Pazartesi', '09:00:00', '10:30:00', 1, 1),
    ('Salı', '11:00:00', '12:30:00', 1, 1),
    ('Çarşamba', '13:00:00', '14:30:00', 2, 2),
    ('Perşembe', '10:00:00', '11:30:00', 3, 3),
    ('Cuma', '14:00:00', '15:30:00', 4, 1),
    ('Pazartesi', '10:00:00', '11:30:00', 5, 2),
    ('Salı', '13:00:00', '14:30:00', 6, 3),
    ('Çarşamba', '09:00:00', '10:30:00', 7, 1),
    ('Perşembe', '11:00:00', '12:30:00', 8, 2),
    ('Cuma', '13:00:00', '14:30:00', 9, 3),
    ('Pazartesi', '14:00:00', '15:30:00', 10, 1),
    ('Salı', '09:00:00', '10:30:00', 11, 2),
    ('Çarşamba', '11:00:00', '12:30:00', 12, 3),
    ('Perşembe', '13:00:00', '14:30:00', 13, 1),
    ('Cuma', '10:00:00', '11:30:00', 14, 2),
    ('Pazartesi', '11:00:00', '12:30:00', 15, 3);


-- Insert data into student table with company_id
INSERT INTO student (name, tckn, surname, phone, second_phone, address, city, registration_date, update_time,
                     created_on, company_id)
VALUES ('Ayşe', '98765432101', 'Yılmaz', '555-6789', '555-1234', '456 Kızılçam Sokak', 'ANKARA', NOW(), NOW(), NOW(),
        1),
       ('Fatma', '87654321012', 'Çelik', '555-2345', '555-5678', '789 Karanfil Sokak', 'ISTANBUL', NOW(), NOW(), NOW(),
        2),
       ('Ahmet', '76543210923', 'Öztürk', '555-3456', '555-6789', '123 Zambak Sokak', 'IZMIR', NOW(), NOW(), NOW(), 3),
       ('Mehmet', '65432109834', 'Arslan', '555-4567', '555-7890', '234 Menekşe Sokak', 'ANTALYA', NOW(), NOW(), NOW(),
        1),
       ('Ali', '54321098745', 'Koç', '555-5678', '555-8901', '345 Karanfil Cadde', 'BOLU', NOW(), NOW(), NOW(), 2),
       ('Elif', '43210987656', 'Sönmez', '555-6789', '555-9012', '456 Sümbül Sokak', 'BURSA', NOW(), NOW(), NOW(), 3),
       ('Fatih', '32109876567', 'Gül', '555-7890', '555-0123', '567 Orkide Sokak', 'IZMIR', NOW(), NOW(), NOW(), 1),
       ('Hüseyin', '21098765478', 'Yurt', '555-8901', '555-1234', '678 Lale Sokak', 'KONYA', NOW(), NOW(), NOW(), 2),
       ('Zeynep', '10987654389', 'Güneş', '555-9012', '555-2345', '789 Çiçek Sokak', 'SAMSUN', NOW(), NOW(), NOW(), 3),
       ('Burcu', '09876543290', 'Aydın', '555-0123', '555-3456', '890 Ağaç Sokak', 'TRABZON', NOW(), NOW(), NOW(), 1),
       ('Merve', '98765432102', 'Acar', '555-1234', '555-4567', '901 Gülden Sokak', 'MERSIN', NOW(), NOW(), NOW(), 2),
       ('Can', '87654321023', 'Kurt', '555-2345', '555-5678', '012 Kiraz Sokak', 'EDIRNE', NOW(), NOW(), NOW(), 3),
       ('Deniz', '76543210934', 'Kara', '555-3456', '555-6789', '123 Zambak Cadde', 'BOLU', NOW(), NOW(), NOW(), 1),
       ('Gizem', '65432109845', 'Sönmez', '555-4567', '555-7890', '234 Lale Cadde', 'DENIZLI', NOW(), NOW(), NOW(), 2),
       ('Seda', '54321098756', 'Demir', '555-5678', '555-8901', '345 Orkide Cadde', 'KARAMAN', NOW(), NOW(), NOW(), 3),
       ('Ege', '43210987667', 'Berk', '555-6789', '555-9012', '456 Sümbül Cadde', 'HATAY', NOW(), NOW(), NOW(), 1),
       ('Hakan', '32109876578', 'Arslan', '555-7890', '555-0123', '567 Menekşe Cadde', 'KIRIKKALE', NOW(), NOW(), NOW(),
        2),
       ('Leyla', '21098765489', 'Yılmaz', '555-8901', '555-1234', '678 Çiçek Cadde', 'YOZGAT', NOW(), NOW(), NOW(), 3),
       ('Selin', '10987654390', 'Gül', '555-9012', '555-2345', '789 Ağaç Cadde', 'TRABZON', NOW(), NOW(), NOW(), 1),
       ('Rıza', '09876543201', 'Koç', '555-0123', '555-3456', '890 Gülden Cadde', 'AFYON', NOW(), NOW(), NOW(), 2),
       ('Emre', '98765432103', 'Kara', '555-1234', '555-4567', '901 Kiraz Cadde', 'GUMUSHANE', NOW(), NOW(), NOW(), 3);


-- Insert data into student_class table with company_id
INSERT INTO student_class (student_id, class_id, company_id)
VALUES (1, 1, 1),
       (2, 2, 2),
       (3, 3, 3),
       (4, 1, 1),
       (5, 2, 2),
       (6, 3, 3),
       (7, 4, 1),
       (8, 1, 2),
       (9, 2, 3),
       (10, 3, 1),
       (11, 4, 2),
       (12, 1, 3),
       (13, 2, 1),
       (14, 3, 2),
       (15, 4, 3),
       (16, 1, 2);


-- Insert data into teacher_class table with company_id
INSERT INTO teacher_class (teacher_id, class_id, company_id)
VALUES (1, 1, 1),
       (2, 2, 2),
       (3, 3, 3),
       (4, 4, 1);


-- Insert data into role table
INSERT INTO role (name)
VALUES ('USER'),
       ('ADMIN');


-- Insert data into appusers table
INSERT INTO appusers (first_name, last_name, email, password, phone, company_id, update_time, created_on,
                      enabled)
VALUES ('John', 'Doe', 'john.doe@example.com', 'password123', '555-1234', 1, NOW(), NOW(), TRUE),
       ('Jane', 'Smith', 'jane.smith@example.com', 'password456', '555-5678', 2, NOW(), NOW(), TRUE);

-- Insert data into user_roles table
INSERT INTO user_roles (user_id, role_id)
VALUES (1, 1),
       (2, 2);

-- Insert data into City table
INSERT INTO city (name) VALUES
                            ('Adana'),
                            ('Adıyaman'),
                            ('Afyonkarahisar'),
                            ('Ağrı'),
                            ('Aksaray'),
                            ('Amasya'),
                            ('Ankara'),
                            ('Antalya'),
                            ('Ardahan'),
                            ('Artvin'),
                            ('Aydın'),
                            ('Balıkesir'),
                            ('Bartın'),
                            ('Batman'),
                            ('Bayburt'),
                            ('Bilecik'),
                            ('Bingöl'),
                            ('Bitlis'),
                            ('Bolu'),
                            ('Burdur'),
                            ('Bursa'),
                            ('Çanakkale'),
                            ('Çankırı'),
                            ('Çorum'),
                            ('Denizli'),
                            ('Diyarbakır'),
                            ('Düzce'),
                            ('Edirne'),
                            ('Elazığ'),
                            ('Erzincan'),
                            ('Erzurum'),
                            ('Eskişehir'),
                            ('Gaziantep'),
                            ('Giresun'),
                            ('Gümüşhane'),
                            ('Hakkari'),
                            ('Hatay'),
                            ('Iğdır'),
                            ('Isparta'),
                            ('İstanbul'),
                            ('İzmir'),
                            ('Kahramanmaraş'),
                            ('Karabük'),
                            ('Karaman'),
                            ('Kars'),
                            ('Kastamonu'),
                            ('Kayseri'),
                            ('Kırıkkale'),
                            ('Kırklareli'),
                            ('Kırşehir'),
                            ('Kilis'),
                            ('Konya'),
                            ('Kocaeli'),
                            ('Malatya'),
                            ('Manisa'),
                            ('Mardin'),
                            ('Mersin'),
                            ('Muğla'),
                            ('Muş'),
                            ('Nevşehir'),
                            ('Niğde'),
                            ('Ordu'),
                            ('Osmaniye'),
                            ('Rize'),
                            ('Sakarya'),
                            ('Samsun'),
                            ('Siirt'),
                            ('Sinop'),
                            ('Sivas'),
                            ('Şanlıurfa'),
                            ('Şırnak'),
                            ('Tekirdağ'),
                            ('Tokat'),
                            ('Trabzon'),
                            ('Tunceli'),
                            ('Uşak'),
                            ('Van'),
                            ('Yalova'),
                            ('Yozgat'),
                            ('Zonguldak');