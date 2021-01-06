import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    name : 'Italo',
    email: 'italo.og@outlook.com',
    password: 'fghj',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100},
    ],
  }); 

  return response.json({message: 'Hello Word'});
}