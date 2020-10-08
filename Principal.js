var Principal

(function (Principal){

    static void main(String[] args){
        var a = new Conta("Melissa", 1000);
        var p1 = new Conta("Luka", 1000);
        var p2 = new Conta("Ivan", 1000);
        //Conta a = new Conta("Melissa", 1000);
        //Conta p1 = new Conta("Luka", 1000);
        //Conta p2 = new Conta("Ivan", 1000);

        a.Deposito(500, 500);
        p1.Deposito(300, 1000);
        p2.Saque(500, 2000);
        p2.Deposito(300, 2000);
        a.Saque(1500, 500);
        a.Deposito(300, 500);
        a.Saque(500, 500);
        a.Deposito(300, 500);
        a.Saque(500, 500);
        p2.Deposito(1300, 2000);
        p1.Saque(250, 1000);
        a.Saque(500, 500);
        p1.Deposito(1300, 1000);
        p2.Saque(250, 2000);
        a.Deposito(1300, 500);
        a.Saque(250, 500);
        
    }
})