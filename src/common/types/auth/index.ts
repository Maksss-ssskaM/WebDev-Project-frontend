export interface IPropsLogin {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUsername: (value: string) => void
    navigate: (to: string) => void
}

export interface IAuthState {
    user: {} | IPublicUser,
    isLogged: boolean
}

interface IPublicUser {
    id: number,
    firstName: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
}