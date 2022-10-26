import { Inject, Injectable } from "@nestjs/common";
import { isEmpty } from "rxjs";
import { tkb } from "./tkb";


@Injectable()
export class TkbService{
    private readonly tkb: tkb[] = [
        {
            id:1,
            mon:["GDQP","GDCD"]
        },
        {
            id:2,
            mon:["ppl","DSL"]
        }
    ]
    create(hk: tkb){
        this.tkb.push(hk)
    }

    getHK(id: number): (tkb | string){
        let rv:tkb = this.tkb.find(element=>{
            if(element.id==id){
                console.log(JSON.stringify(element))
                return element
            }
        })
        if (this.tkb.length == 0){
            return 'no value'
        }
        return rv
    }

    getAll(): tkb[]{
        return this.tkb
    }
}