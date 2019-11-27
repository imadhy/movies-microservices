export interface UserDTO {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    created_at: Date;
    updated_at: Date;
    password: String;
    birthdate: Date;
    gender: string;
    auth: string;
    ip_address: string;
    last_connexion: Date;
    admin: boolean;
    os: string;
    os_version: string;
}