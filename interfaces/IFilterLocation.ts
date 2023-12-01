export interface ILocationFilter {
    name?: { $regex: string };
    description?: { $regex: string };
}