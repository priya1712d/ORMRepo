import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("priya.photo")
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}
