export interface Message {
    message : {
        user:{
            id : number;
            content: string;
        }
        bot: {
            id:number;
            content: string;
        }
    }
}
export interface UserMessage{
    id: number;
    content: string;
}