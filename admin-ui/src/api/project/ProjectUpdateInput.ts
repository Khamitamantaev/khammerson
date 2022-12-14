import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
