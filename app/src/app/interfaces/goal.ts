import { chipState } from "./chipStates";

export interface Goal{
    goalName: String,
    goalState: chipState,
    actions: [{
        actionName: String,
        actionState: chipState
    }],
    userId: String

}