# School Database Design

## Students Table

The students table stores information about students. Each student has a unique id, a name, and an email. The email is required and must be unique so that two students cannot use the same email address.

## Courses Table

The courses table stores the courses offered by the school. Each course has a unique id, a required name, and a description.

## Enrolments Table

The enrolments table records which students are enrolled in which courses. It contains foreign keys referencing the students and courses tables, as well as the student's grade for the course.

## Relationships

There is a one-to-many relationship between students and enrolments because one student can have many enrolments, while each enrolment belongs to one student.

There is also a one-to-many relationship between courses and enrolments because one course can have many enrolments, while each enrolment belongs to one course.

Overall, students and courses have a many-to-many relationship because one student can take many courses and one course can have many students. The enrolments table is needed as a join table to represent this many-to-many relationship. The UNIQUE (student_id, course_id)` constraint prevents the same student from enrolling in the same course more than once.

## Index

I would add an index on enrolments.student_id. This would make it faster to find all the courses taken by a particular student, especially when the database contains many enrolments.

CREATE INDEX idx_enrolments_student_id
ON enrolments(student_id);
