# react-tech-test
This application is part of a technical test for React.
It is a short time frame test in a framework I am not practically familiar with. Due to these constraints I have outlined some of my thinking below: 

### ⏏️❌
This application uses react-create-app to initialize the framework for the sake of speed and the brief.
I have also chosen not to eject as there is no benefit in it for this project. The only consequences of this are:
Having to manually include enzyme configuration in each test rather than as jest config.
I have pulled in more resources than I would of liked in the header (Google fonts, Font Awesome, Leaflet maps)
I am comfortable with build tools like webpack and this can hopefully be seen in other projects.

### 🎨
I have used SCSS so themes and key elements can be updated easily and globally. I tried to theme it roughly around the React colours but if i had more time i would of worked on a more polished feel. (for example transitions and animations)

### 🔬
I have used some test frameworks and created basic tests to show I am comfortable with them. In a proper application i would expect there to be more in depth tests and e2e tests.
I have tried to cover a few different areas but didnt create a test for every prop being passed in or every component being rendered as i believe that defeats the point of testing.
I have used a `data-hook` custom attribute to find things in unit tests. This is so that the styling and structure can be changed without breaking the tests.
With mock data I would normally dedicate separate files or areas to them. However due to the scale I have chosen to leave them inline in this project.
I would also consider using a snapshot framework to check for unintended changes in the render but again it didnt really fit the scale of this project.

### ⛑️
NPM audit reports some possible vulnerabilities. In a production or professional environment i would investigate these problem areas.

### 👥
Although I have used git for this project I havn't been using branches and following and sort of pull request process. This is simply for speed as its a small project with a single developer.
In a professional environment each commit would be on its own branch and only merged after peer review and CI processes. 

### 🗺 ️
Finally the maps component looks odd and its usually because the dummy data provided places people mostly in the sea. I have checked it with Google maps and it seems to be correct.

Thank you for taking the time to look over my React challenge. If you have any questions, comments of thoughts please get in touch.