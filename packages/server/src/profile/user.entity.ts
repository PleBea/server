import { Interview } from 'src/interview/interview.entity';
import Request from 'src/request/request.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255, unique: true })
  email!: string;

  @Column('varchar', { length: 255 })
  name!: string;

  @Column('uuid')
  image!: string;

  // ToDo

  @OneToMany(() => Interview, (interview) => interview.user)
  interviews!: Interview[];

  @OneToMany(() => Request, (request) => request.user)
  requests!: Request[];
}
