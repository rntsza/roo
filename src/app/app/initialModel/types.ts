import { ReturnTypeWithoutPromise } from "@/app/types/return-types-without-promise";
import { getUserModels } from "./actions";

export type Todo = ReturnTypeWithoutPromise<typeof getUserModels>[0]