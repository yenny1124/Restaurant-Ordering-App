**Rolls & Rolls Restaurant Web Application**

**Team**  
Anthony Hu (Frontend Development), Jamie Choi (Backend & Database Development), Andrew Nguyen (Project Manager)

**Techstack**  
Frontend: Next.js (Typescript), Vanilla CSS, HTML  
Backend: Express.js, Node.js, MongoDB  
Hosting: Netlify (Frontend), Render (Backend)

**Project Description**  
Our team’s project is a full-stack web application for the restaurant Rolls & Rolls Plus Sushi. At the time of this submisson, the main full-stack features of our web application are allowing customers to request a reservation and place an order by sending this information to our MongoDB database. The frontend is the mobile responsive, reactive, and uses data from MongoDB to programatically generate the menu and keep cart item information up to date.

**Various Notes**  
Rolls & Rolls Plus Sushi is a real restaurant.  
The reservations and placed orders are not acted upon in the real-world; this was beyond the scope of this project.  
Sessions are currently local to the browser, meaning there are no accounts or authentication. Cart data which needs to be persistent is handled through local storage.  
The About page is incomplete at this time.

**Live Demo**: https://rollsandrollssushi.netlify.app/home

**Instructions to run this project locally**  
git clone https://github.com/yenny1124/Restaurant-Ordering-App.git  
Open up two terminals, so that you can run the frontend and backend. 
  
To run the frontend:  
cd .\Restaurant-Ordering-App\
cd .\frontend\
npm i   
npm run dev  
  
To run the backend:  
cd .\Restaurant-Ordering-App\
cd .\backend\
npm i   
npm start  
  
Additionally, a way to change the backend server hostname to switch between remote and local servers was included.  
Navigate to frontend\src\app to find the file backendhostname.tsx.  
Change the exported variable to choose the desired hostname from the provided array. Only the render server and localhost:3003 are available.
