INSERT INTO department(name)
VALUES("Finance"), ("Legal"), ("Engineering"), ("Sales"), ("Development");

INSERT INTO role(title, salary, department_id)
VALUES("Lead Engineer", 110000.50, 3), ("Junior Developer", 75091.45, 4), ("Lawyer", 200000.90, 2), ("Software Engineer", 114560.55, 3), ("Manager", 150000.80, 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES("John", "Smith", 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Julie", "Sween", 1, 1), ("Manuel", "Barrera", 4, 1), ("Jessica", "Maury", 2, 1);

SELECT * FROM role;
SELECT * FROM department;
SELECT * FROM employee;