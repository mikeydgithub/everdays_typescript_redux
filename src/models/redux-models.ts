export interface HomeModel {
    "id": number,
    "name": string,
    "address": string,
    "profileImage": string
}










export interface HomeArrayModel{
    all_homes: HomeModel[],
};


// export interface TodoModel{
//     "userId": number,
//     "id": number,
//     "title": string,
//     "completed": boolean
// }


// export interface TodoArrayModel{
//     all_todos: TodoModel[],
//     particular_todo: TodoModel
// }