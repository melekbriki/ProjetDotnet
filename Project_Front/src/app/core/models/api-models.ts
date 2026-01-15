export interface User {
  Id: number;
  NomUser: string;
  EmailUser: string;
  MotDePasse: string;
  RoleId: number;
  Role?: Role;
  Cours?: CoursDTO[];
  Soumissions?: Soumission[];
}

export interface Role {
  Id: number;
  Name: string;
}

export interface CoursDTO {
  id: number;
  titre: string;
  description: string;
  enseignantId: number;
  enseignant?: User;
  lecons?: LeconDTO[];
}

export enum ResourceType {
  PDF = 0,
  LIVE = 1
}

export interface LeconDTO {
  id: number;
  titre: string;
  contenu: string;
  userId: number;
  coursId: number;
  resource: ResourceType;
  cours?: CoursDTO;
}

export interface DevoirDTO {
  id: number;
  titre: string;
  description: string;
  dateDevoir: string;
  soumissions?: Soumission[];
}

export interface Soumission {
  Id: number;
  DateSoumission: string;
  Note: number;
  UserId: number;
  User?: User;
  DevoirId: number;
  Devoir?: DevoirDTO;
}

export interface LoginDto {
  emailUser: string;
  motDePasse: string;
}

export interface RegisterDto {
  nomUser: string;
  emailUser: string;
  motDePasse: string;
}

export interface AuthResponse {
  message: string;
  userId: number;
  nom: string;
  email: string;
  role?: number;
}
