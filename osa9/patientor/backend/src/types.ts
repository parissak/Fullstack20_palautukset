export interface DiagnoseEntry {
    code: string,
    name: string,
    latin?: string
}

export interface PatientEntry {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
}

export enum Gender {
    Female = "female",
    Male = "male",
    Other = "other"
}

export type NonSensitivePatientEntries = Omit<PatientEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientEntry, 'id'>;