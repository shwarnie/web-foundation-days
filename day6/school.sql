CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);


CREATE TABLE enrolments (
    id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade TEXT,

    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id),

    UNIQUE (student_id, course_id)
);


INSERT INTO students (id, name, email) VALUES
(1, 'Sharnice Otieno', 'sharnice@example.com'),
(2, 'Brian Kamau', 'brian@example.com'),
(3, 'Mercy Wanjiku', 'mercy@example.com'),
(4, 'Kevin Mwangi', 'kevin@example.com');


INSERT INTO courses (id, name, description) VALUES
(1, 'Database Systems', 'Introduction to relational databases and SQL'),
(2, 'Web Development', 'HTML, CSS and JavaScript fundamentals'),
(3, 'Cybersecurity', 'Introduction to cybersecurity concepts');


INSERT INTO enrolments (id, student_id, course_id, grade) VALUES
(1, 1, 1, 'A'),
(2, 1, 2, 'B'),
(3, 2, 1, 'B'),
(4, 2, 3, 'A'),
(5, 3, 2, 'A');

SELECT courses.name
FROM courses
JOIN enrolments ON courses.id = enrolments.course_id
JOIN students ON students.id = enrolments.student_id
WHERE students.name = 'Sharnice Otieno';


SELECT students.name
FROM students
JOIN enrolments ON students.id = enrolments.student_id
JOIN courses ON courses.id = enrolments.course_id
WHERE courses.name = 'Database Systems';


SELECT courses.name, COUNT(enrolments.student_id) AS student_count
FROM courses
LEFT JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id, courses.name;


SELECT students.name
FROM students
LEFT JOIN enrolments ON students.id = enrolments.student_id
WHERE enrolments.student_id IS NULL;

