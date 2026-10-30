class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
        this.img= this.value+this.suit+".jpg";
    }
    getImages(){
        return `<button class="playing-card" type="button" aria-label="Lá ${this.value}, nhấn để xem điểm" aria-pressed="false">
                    <img width="100px" src="images/${this.img}" alt="Lá ${this.value}">
                    <span class="card-value" aria-hidden="true">${this.getValue()} điểm</span>
                </button>`;
        
    }
    getValue(){
        if(this.value=="A"){
            return 1;
        }
        return +this.value;
    }
}