import { Component } from '@angular/core';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'KeepApp';

  public companyName:string;

  public btnCSSStyle = 'btn btn-primary';

  public IsDisabled=false;

  public loginButtonText="Login!!!";

  constructor()
  {
    this.companyName="Stackroute !!!"
  }


  // updateCompanyName($event)
  // {
  //   this.companyName=$event.target.value;
  // }



  validateLogin = ($event) =>{
    console.log("Login Button Clicked .............");

    this.loginButtonText = "Validating............"

    console.log($event);

    setTimeout(()=>{
      this.loginButtonText = "Login Success............"
    },3000)
  }
}