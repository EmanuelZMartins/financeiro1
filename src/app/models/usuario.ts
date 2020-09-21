import { AbstractEntity } from './abstractEntity';

export class Usuario extends AbstractEntity {
    public nome:string;
    public login:string;
    public senha:string;
}