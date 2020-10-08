var 

    class Conta extends Thread{
    private _nome:string;
    private _idade:number;
    //private String nome;
    private int ValorConta;
    private int Timestamp;
    private int ValorDeposito;
    private int ValorSaque;
    private boolean Parada;
    private boolean Fim;

    public Conta(String nome, int valor){
        this.nome = nome;
        this.ValorConta = vl;
        this.start();
    }

    public int Deposito(int ValorDeposito, int Timestamp){
        this.ValorDeposito = ValorDeposito;
        this.Parada = false;
        this.Fim = false;
        this.ValorConta = this.ValorDeposito + this.ValorConta;
        return this.ValorConta;
    }

    public Saque(int ValorSaque, int Timestamp){
        this.ValorSaque = ValorSaque;
        this.Parada = false;
        this.Fim = false;
        return this.ValorConta;
    }

    public void run(){
        if(this.ValorSaque <= this.ValorConta){
            this.ValorConta = this.ValorConta - this.ValorSaque;
            System.out.println("Conta: " + this.getNome());
            System.out.println("Valor na conta do(a) " + this.getNome() + ": " + this.ValorConta);

        try{
            this.sleep(timestamp);

        }

        catch(InterruptedException e){
            e.printStackTrace(); }
        }

        else{
            System.out.println("Valor do Saque Insuficiente na conta de " + this.getNome());
        }

    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public int getValorConta(){
        return this.ValorConta;
    }

    public void setValorConta(int vl){
        this.ValorConta = vl;
    }

    public int getValorDeposito(){
        return this.ValorDeposito;
    }

    public void setValorDeposito(int ValorDeposito){
        this.ValorDeposito = ValorDeposito;
    }

    public int getValorSaque(){
        return this.ValorSaque;
    }

    public void setValorSaque(int ValorSaque){
        this.ValorSaque = ValorSaque;
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
}