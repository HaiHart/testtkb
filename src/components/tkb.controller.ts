import { Controller, Get, Param, Req, Body, Post } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { TkbService } from "./tkb.service";
import { tkb } from "./tkb";
import { ParsePipe } from "src/pipe.parse";

@Controller('TKB')
export class TkbController{

  constructor(private readonly tkbService: TkbService) {}


    @Get('/tkb/:id')
    async getHK(@Param('id') id: number):Promise<tkb | string>{
        let rv = this.tkbService.getHK(id)
        return rv
    }

    @Post('/tkb')
    async createTKB(@Body('tk') tk: tkb){
        this.tkbService.create(tk)
    }
    @Get('/tkb')
    async getAll(): Promise<tkb[]>{
        return this.tkbService.getAll()
    }
}