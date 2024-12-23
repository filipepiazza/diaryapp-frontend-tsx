interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic";
}

interface CoursePartSpecial extends CoursePartDescription {
  requirements: string[];
  kind: "special";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface DiaryBase {
  id: number;
  date: string;
  weather: string;
  visibility: string;
}

interface DiaryComment extends DiaryBase {
  comment: string;
}

export type Diary = DiaryBase | DiaryComment;

export type NewDiary = Omit<Diary, "id">;

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;
