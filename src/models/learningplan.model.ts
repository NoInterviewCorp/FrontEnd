import { Topic } from "./topic.model";

export class LearningPlan{
    LearningPlanId:number;
    Technology:string;
    Summary:string;
    UpVotes:number;
    DownVotes:number;
    Owner:string;
    Avatar:string;
    Topics:Topic[];
}