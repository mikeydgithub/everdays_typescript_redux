export interface HomeModel {
    "id": number,
    "name": string,
    "address": string,
    "profileImage": string
}

export interface HomeArrayModel{
    all_homes: HomeModel[],
};


