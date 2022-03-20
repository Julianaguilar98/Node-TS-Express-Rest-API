import e from 'express';
import { object, string, TypeOf } from 'zod';
import { createUser } from '../service/user.service';
//Zod is a schema declaration and validation library for TS
export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required'
        }),
        password: string({
            required_error: 'Password is required'
        }).min(6, "Password is too short, must be 6 chars minimum"),
        passwordConfirmation: string({
            required_error: 'passwordConfirmation is required'
        }),
        email: string({
            required_error: 'Email is required',
        }).email('Email is required')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>>;