INSERT INTO department (name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales');

INSERT INTO role (title, salary, dept_id)
VALUES
  ('Engineering Director', 200000, 1),
  ('Engineer', 135000, 1),
  ('Chief of Finances', 220000, 2),
  ('Accountant', 115000),
  ('Head of Legal', 250000, 3),
  ('Lawyer', 160000, 3),
  ('Head of Sales', 150000, 4),
  ('Sales Person', 100000, 4);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES
