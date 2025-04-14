# EmployeeHub

This is an application that allows people to see who they work with built in Next.js. 
Fork, Clone this repo, complete it, and make a PR.  Turn in the link to your PR.

## Fork and Clone

One of your team members will need to us the GitHub web interface to fork this Repo. 
Then all team members will clone that new repo your local machine.

```bash
git clone https://github.com/your_username/employeehub.git
cd employeehub
code .
```

Add your team members as a collaborator on the GitHub repository using the GitHub web interface.

## Collaborating

You will all need to work together to complete this project.
Make sure to communicate effectively and use version control to keep track of changes.
All changes should be tracked using Git.
It is up to you if you would like to use a branch for each feature.
I recommend good communication to avoid merge conflicts.

## Requirements

- Use Next.js
- Use Git to collaborate
- Read in `employees.json` file to display all employees
- Add a search/filter feature based on employee name.
  - This should reduce the number of employees displayed.
  - This should **NOT** be case-insensitive.
- The website should be responsive and mobile-friendly.
- The website should be look and feel like a modern website.

## UI Example

Best project submitted will be displayed here as future groups UI example.
For now use this UI mockup.

```
+------------------------------------------+
|               HEADER Component           |
|  EmployeeHub - Connect with Your Team    |
+------------------------------------------+
|  🔍 Search...         [Name ▼]     |
+------------------------------------------+
|              CARD GRID`                  |
|  [Card]     [Card]     [Card]     [Card] |
|  [Card]     [Card]     [Card]     [Card] |
+------------------------------------------+
|               FOOTER Component           |
+------------------------------------------+
```

## Employee Card Design
```
+------------------------+
|     ⭕ Photo           |
|                       |
|   Sarah Johnson       |
|   Senior Developer    |
|   Engineering         |
|                       |
|   Bio: Full-stack... |
|                       |
|   ✉️ email@emp...     |
+------------------------+
```

![UI Example](instuctions/UI.webp)
![UI Filter](instuctions/UIFilter.webp)
