INSERT INTO departments (dept_name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');

INSERT INTO roles (title, salary, dept_id)
VALUES
  ('Engineering Director', 200000, 1),
  ('Engineer', 135000, 1),
  ('Chief of Finances', 220000, 2),
  ('Accountant', 115000, 2),
  ('Head of Legal', 250000, 3),
  ('Lawyer', 160000, 3),
  ('Head of Sales', 150000, 4),
  ('Sales Person', 100000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Andy', 'Griffith', 1, null),
  ('Blake', 'Griffin', 2, 1),
  ('Mark', 'Walburg', 3, null),
  ('Will', 'Ferrel', 4, 3),
  ('Tom', 'Hanks', 5, null),
  ('Matthew', 'McConaughey', 6, 5),
  ('Elon', 'Musk', 7, null),
  ('Leonardo', 'Di Caprio', 8, 7);