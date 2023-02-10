# Ngee Ann Student Companion Website

This project aims to create a web app that displays relevant information on student life in Ngee Ann Polytechnic in an organized and convenient manner.
We have found that the existing student companion app, NPal, is lacking in clarity and organization. For example, some of its crucial features tend to be hidden in obscure sections of pages.
However, this project is not merely an overhaul of NPal - it combines features from NPal and information from the official Ngee Ann Website, so as to allow students access to the content they might use on a day-to-day basis on a single site.
 
## NOTE

https://creative-nh.github.io/ID-ASG2/

User ID: s116
Password: qwerty

## Design Process

- As a NP Student, in order to stay updated on recent happenings, I want to be able to view important, school-related news and announcements.
- As a NP Student, I want to be able to easily obtain the contact information of my classmates so that I can communicate with them.
- As a NP Student, I want to keep track of the progress of my academic pursuits by being able to conveniently view my grades and set goal for my GPA.
- As a NP Student, so as to avoid missing anything, I want to be able to conveniently view my class, common test and exam timetables.
- As a NP Student, in order to be more active on campus, I want to obtain information on clubs and events on campus.
- As a NP Freshman, I want to learn more about the polytechnic.

### Wireframe
https://xd.adobe.com/view/ae2ee4ac-718b-4e58-8a3b-9aa086314054-fb7d/


## Features
 
### Existing Features

#### All Pages
- Navigation Bar - Allows students to traverse the site.
- Footer - Displays important links for students, as well as links to NP's social media. 

#### Home
- Announcements - Allows users to stay updated by displaying important reminders and news. 
- Banner - Allows users to stay updated by displaying important reminders and news.
- Quiz Game - Provides users with miscellaneous information on the school in a fun and engaging manner.
- Links to Other Pages - Clearly displays important features to students.

#### Schedule
- Timetables - Displays timetables to users so as to help them stay on track which includes the class timetable, common-test and exam timetables.

#### Grades
- Module Results - Displays the module grades of students from each semester, assisting them with staying focused on their goals.
- GPA - Displays the GPA of students, and allows them to set goals to work towards, assisting them with staying focused on their goals. Also displays encouraging messages to motivate students.

#### Events
- CCAs - Displays a list of CCAs and relevant information on each CCA, including contacts, so that students can join if interested.
- Events - Lists upcoming on-campus events and their details, so that students can join if interested.

#### Contact Us
- Emergency Contacts - Displays useful contact information in the event of an emergency. 
- List of Student Contacts - Allows users to add their contacts, as well as search for contacts of peers, enabling better communication between students.

### Features Left to Implement
- We originally considered adding a sign-up function for the 'Events' page. However, due to time constraints, we did not proceed with the implementation of this feature.


## Technologies Used

- [JQuery](https://jquery.com)
    - This project uses **JQuery** to simplify DOM manipulation.

- [RestDB](https://restdb.io)
    - This project uses **RestDB** to store and load user data.

- [Lottie](https://lottiefiles.com)
    - This project uses **Lottie** animations in a quiz game. 


## Testing

1. Contact form:
    1. Go to the "Contact Us" page.
    2. Try to submit the empty form and verify that an error message appears.
    3. Try to submit the form with different combinations of invalid inputs in each field and verify that an error message appears.
    4. Try to submit the form with all inputs valid and verify that a success message appears.

2. Target GPA 
    1. Go to the "Grades" page.
    2. Try to submit the empty Target GPA field and verify that an error message appears.
    3. Try to submit the field with an invalid GPA and verify that an error message appears.
    4. Try to submit the field with a valid GPA and verify that a success message appears.
    5. Reload the page and verify that the target GPA is of the same value. 
    6. Try to submit the field with a lower, valid GPA and verify that the motivational message changes to 'You can do it!'
    7. Try to submit the field with a lower, valid GPA close to the current GPA and verify that the motivational message changes to 'Almost there!'
    8. Try to submit the field with a valid GPA higher than the current GPA and verify that the motivational message changes to 'You did it!'
    9. Set the current GPA to a value lower than 3 on RestDB.
    10. Try to submit the field with a higher, valid GPA close to the current GPA and verify that the motivational message changes to 'You did it, aim higher!'

3. Module Results
    1. Go to the "Grades" page.
    2. Try to submit the empty semester form and verify that an error message appears.
    3. Try to submit the form with an invalid input and verify that an error message appears.
    4. Try to submit the form with a listed semester and verify that the corresponding module results are displayed.

### How this Project Looks and Works on Various Screens

- Homepage
    - The Homepage comprises of six panels.  On desktop, the panels are divided into two rows. The first row contains a small panel, used to display anncouncements, which takes up close to a third of the box's width. (The text contents of the announcements panel pops up when hovered upon.) The other panel, which is used to display the banner, takes up the remaining space of the first row. The second row consists of a large panel which contains a game quiz (Comprises of four multiple-choice questions, and plays different animations based on user's performance), as well as three stacked-up panels to its right, which serve as links to other pages. (The images in these three panels are unblurred when hovered upon.) On mobile, these panels are stacked into one column, and their heights are redistributed.

- Grades
    - The Grades page comprises of two panels, labeled 'Module Results' and 'Grade Point Average'. The first panel contains a list of the student's completed modules, as well as a field where a semester can be entered. Entering a valid sesmester will display the student's grades for that semester in table form. The second panel contains the student's current GPA, their target GPA, and a field for users to change said target GPA. The mobile version of this page is identical to the desktop page. 

- Events
    - The Events page contains two boxes displayed horizontally, labeled 'CCAs' and 'Events', which pop up slightly when hovered upon. When clicked on, they display their respective information in a popup. On mobile, the boxes are displayed vertically instead.

- Schedule
    - The Schedule page contains three boxes displayed horizontally, labeled 'Class Timetable', 'CT Timetable' and 'Exam Timetable', which pop up slightly when hovered upon. When clicked on, they display the respective timetables in a popup. On mobile, the boxes are displayed vertically instead.

- Contact Us
    - The Contact Us page contains two panels. The top panel contains a list of emergency contacts. The bottom panel contains a table of student contacts, a form and a search bar. Users can use the search bar to look for specific entries in the table, or use the form to input an entry of their own. Users can edit their entries using the 'Delete' and 'Update' buttons in each table entry. The mobile version of this page is identical to the desktop page. 

### Bugs/Problems

- For the Contact Us page, we were unable to add the contact owner's student id to the data of the delete button. This prevented us from implementing a feature to stop users from deleting others' contacts. Interestingly, this feature worked perfectly for the update button.


## Credits

### Content

- The navigation menu used in all pages was created using [this video](https://www.youtube.com/watch?v=8QKOaTYvYUA) as a guide. 
- The text for the 'CCAs' section of the Events page was copied from the NP [Clubs and Societies page](https://www.np.edu.sg/student-life/clubs-societies).
- The phone numbers in the Contact Us page were taken from the [official NP website](https://www.np.edu.sg).

### Media

- Photos used were taken from the following sites:
    - https://www.np.edu.sg
    - https://portal2.np.edu.sg

- The banner used in the homepage was a recreation of the banner of the [NP Student Portal](https://portal2.np.edu.sg). 
- The clip used for the sign-in section was taken from [this promotional video](https://www.youtube.com/watch?v=opGwI2UG8iA).