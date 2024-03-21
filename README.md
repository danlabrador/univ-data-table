# Data Table

## Overview

This project involves the creation of a dynamic web application that allows users to input and display data through a form and table, respectively. Additionally, it incorporates a search mechanism with filters to refine the data displayed based on specific criteria.

## Features

The application consists of two main features:

1. **Form Submission and Data Display**: Users can submit data via a form. This data is then displayed in a table on the same page. The form includes fields for first name, last name, gender, age, and position (teacher or student). The table displays the full name, gender, age, and position of each entry.

2. **Search Mechanism and Filters**: Users can filter the displayed data based on full name (substring search), gender, position, and an age range. These filters can be applied simultaneously to narrow down the results.

## Relevant Test Cases

Below are the test cases that align with our project's requirements and have been selected for implementation and testing.

### Feature 1: Form Submission and Data Display

- **Case #1: Form submission**: Validates that the table updates with a new entry upon form submission.
- **Case #2: Form validation**: Ensures the form cannot be submitted with missing fields.
- **Case #3: Full name search filter**: Tests the substring search functionality on full names.
- **Case #4: Gender filter**: Checks that the table filters entries based on gender.
- **Case #5: Position filter**: Verifies that entries can be filtered by position (teacher or student).
- **Case #6: Age range filter**: Confirms that entries can be filtered within a specified age range.
- **Case #7: Combined filters application**: Tests the application of multiple filters simultaneously.
- **Case #10: Correct data display in table**: Ensures the table correctly displays the data from submitted forms.
- **Case #11: Invalid age input handling**: Checks the form's response to invalid age inputs.

### Feature 2: Form, Table, and Search Mechanism Styling

- **Case #1: Form styling with CSS**: Ensures the form elements are styled for visual appeal.
- **Case #2: Table styling with CSS**: Checks the table's styling for consistency and visual appeal.
- **Case #3: Search input and filters styling with CSS**: Verifies the styling of search inputs and filters.

## Excluded Test Cases

The following test cases have been considered irrelevant by the project's scope and thus are excluded:

- Responsive layout checks (Feature 1: Case #8)
- Data persistence after page refresh (Feature 1: Case #9)
- Invalid filter range handling (Feature 1: Case #12)

## Development and Testing

Developers and testers are encouraged to focus on the relevant test cases listed above. This approach ensures that efforts are concentrated on the functionality that aligns with the project's objectives and requirements.

## Review Results

The test cases and their outcomes can be reviewed in detail at the following link:
[GitHub Project Board](https://github.com/users/danlabrador/projects/3/views/1?pane=issue&itemId=57173202)

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE).
