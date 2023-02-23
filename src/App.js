import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" class="w-100 d-flex justify-content-center flex-direction-column bg-secondary">

<form class="mt-2 d-flex justify-content-center w-50 p-3 mb-2 bg-secondary text-white">









      

<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control w-40" id="inputEmail4" placeholder='scribe your Email'/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control w-40" id="inputPassword4"/>
  </div>
  <div class="col-12 pt-4">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control " id="inputAddress" placeholder="Rue, quartier, commune"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label pt-4">University</label>
    <input type="text" class="form-control"  id="inputAddress2" placeholder="Nom de l'université"/>
  </div>
  <div class="col-md-6 mx-5 pt-3">
  <label for="inputCity" class="form-label ">City</label>
    <input type="text" class="form-control w-60 "  id="inputCity" placeholder='put your city'/>
  </div>
  <div class="col-md-4 pt-3">
    <label for="inputState" class="form-label">Study year</label>
    <select id="inputState" class="form-select pt-3">
      <option selected>Choose...</option>
      <option>Année 1</option>
      <option>Année 2</option>
      <option>Année 3</option>
    </select>
  </div>
  
  <div class="col-12 pt-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        I'm not robot 
      </label>
    </div>
  </div>



  <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 bg-success"> DEVENEZ UN TIGRE AUJOURD'HUI.
Rejoignez les rangs d'une communauté dynamique d'étudiants et d'universitaires qui se consacrent collectivement à vous aider à explorer vos ambitions, à poursuivre vos rêves ou à faire avancer votre carrière. Une université de recherche d'élite avec certains des programmes les mieux classés à travers le pays, l'entreprise universitaire de LSU offre un accès à l'enseignement supérieur aux apprenants à chaque étape de la vie.
 </div>
    </div>
    
  </div>
</div>


  <div class="col-12 pt-3 d-flex justify-content-center">
    <button type="submit" class="btn btn-primary ">Sign in</button>
  </div>
</form>
 






  
</form>








    </div>
  );
}

export default App;
