import { getPathDetailList } from "./getPathDetailList";
import { getPathList } from "./getPathList";
import { getFuzzySearchList } from "./getFuzzySearchList";
import { getRecommendList } from "./getRecommendList";
export type { vehicle } from "./type";
export type { GetPathListPayload } from "./getPathList";
export type { GetPathDetailListPayload } from "./getPathDetailList";
export type { GetFuzzySearchListPayload } from "./getFuzzySearchList";
export type {
  GetRecommendListPayload,
  RecommendItem,
  CategoryType,
} from "./getRecommendList";

export { getPathDetailList, getPathList, getFuzzySearchList, getRecommendList };
