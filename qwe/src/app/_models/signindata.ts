export class user {
    private email: string;
    private password: string;

    constructor(email:string,password:string){
        this.email = localStorage.getItem(email);
        this.password = localStorage.getItem(password);
        
    }
    

    getEmail():string{
        console.log(this.email)
        return this.email;
    }

    getPassword():string{
        return this.password;
    }
}

