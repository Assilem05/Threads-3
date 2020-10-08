package banco;

public class Conta extends Thread{
    private String Nome;
    private int VlConta;
    private int Timestamp;
    private int VlDeposito;
    private int VlSaque;
    private boolean Parada;
    private boolean Fim;

    public Conta(String Nome, int vl){
        this.Nome = Nome;
        this.VlConta = vl;
        this.start();
    }

    public int Deposito(int VlDeposito, int Timestamp){
        this.VlDeposito = VlDeposito;
        this.Parada = false;
        this.Fim = false;
        this.VlConta = this.VlDeposito + this.VlConta;
        return this.VlConta;
    }

    public int Saque(int VlSaque, int Timestamp){
        this.VlSaque = VlSaque;
        this.Parada = false;
        this.Fim = false;
        return this.VlConta;
    }

    public void run(){
        if(this.VlSaque <= this.VlConta){
            this.VlConta = this.VlConta - this.VlSaque;
            System.out.println("Conta: " + this.getNome());
            System.out.println("Valor na conta do(a) " + this.getNome() + ": " + this.VlConta);

        try{
            this.sleep(Timestamp);

        }

        catch(InterruptedException e){
            e.printStackTrace(); }
        }

        else{
            System.out.println("Valor do Saque Insuficiente na conta de " + this.getNome());
        }
    }
    public String getNome(){
        return this.Nome;
    }

    public void setNome(String Nome){
        this.Nome = Nome;
    }

    public int getVlConta(){
        return this.VlConta;
    }

    public void setVlConta(int vl){
        this.VlConta = vl;
    }

    public int getVlDeposito(){
        return this.VlDeposito;
    }

    public void setVlDeposito(int VlDeposito){
        this.VlDeposito = VlDeposito;
    }

    public int getVlSaque(){
        return this.VlSaque;
    }

    public void setVlSaque(int VlSaque){
        this.VlSaque = VlSaque;
    }

    public int getTimestamp(){
        return this.Timestamp;
    }

    public void setTempo(int tempo){
        this.Timestamp = tempo;
    }

    public synchronized void parar(){
        this.Parada = true;
        notify();
    }

    public synchronized void voltar(){
        this.Parada = false;
        notify();
    }
    public synchronized void sair(){
        this.Fim = true;
        notify();
    }
    
}