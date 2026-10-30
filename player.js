class Player{
    constructor(name){
        this.name=name;
        this.cards=[];
    }
    addCard(card){
        this.cards.push(card);
    }
    tongdiem(){
        let sum=0;
        for(let i=0;i<this.cards.length;i++){
            sum+=this.cards[i].getValue();
        }
        if(sum%10==0)
        return    sum=10;
        return sum%10;
    }
    hienthibai(html){
        let str="";
        for(let i=0;i<this.cards.length;i++){
            str+=this.cards[i].getImages();
        }
        html.innerHTML=str;
    }
}