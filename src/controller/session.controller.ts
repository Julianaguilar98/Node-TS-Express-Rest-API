import {Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser } from "../service/user.service"
import { CreateUserInput } from '../schema/user.schema';
import logger from '../utils/logger'

export async function createUserSessionHandler(req: Request, res: Response){
    //Validate users password

    //Create a session

    //Create an access token

    //Create a refresh token

    //return access & refresh tokens
}