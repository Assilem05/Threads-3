import banco.Conta;

public class Principal{

    public static void main(String[] args){
        Conta a = new Conta("Midoriya", 1000);
        Conta p1 = new Conta("Todoroki", 1000);
        Conta p2 = new Conta("Yeonjun", 1000);

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
}