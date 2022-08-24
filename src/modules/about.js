function loadAbout(){
    const homeDisplay = document.getElementById('display');
    homeDisplay.innerHTML="<h3>About Us!</h3><p>We are located at the intersection of your Wildest Dreams and Don't Say We Didn't Warn You. Our hours are:</p><ul><li>Monday:closed for hangover</li><li>Tuesday:closed for beachtrips</li><li>Wednesday: Take-out available 6pm -2am</li><li>Thursday: Take-out & delivery available 6pm -2am</li><li>Friday: Take-out & delivery available 6pm -2am</li><li>Saturday: Take-out & delivery available 6pm -2am</li><li>Sunday: Take-out & delivery available 6pm -2am</li></ul><br><h3>Our Story</h3><p>Friends.... We don't actually exist, though these are all recipes</p>"
    const employeeQuery = document.createElement('div')
            employeeQuery.classList.add('container');
            employeeQuery.classList.add('employeeSection');
            employeeQuery.innerHTML=`   <legend>Employee Login</legend>
                                        <form action="get">
                                        <label for="name">Name</label>
                                        <Input type="text"></Input>
                                        <label for="password">Password</label>
                                        <Input type="password"></Input>
                                        </form>
                                    `;
            homeDisplay.appendChild(employeeQuery);
      }
      export default loadAbout;