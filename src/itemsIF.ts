export interface RootObject {
  name: string;
  old: string;
  gender: string;
  photo: string;
  status: string;
  contents: Contents;
}
export interface Notes {
  type: string;
  data: string;
  noteContent: string;
  card: string;
}
export interface Contents {
  notes?: Notes[] | null;
  consultation?: Consultation[] | null;
  video?: Video[] | null;
  activity?: Activity[] | null;
}
export interface Consultation {
  map(
    arg0: (
      n: {
        type: string;
        data: string;
        noteContent: string;
        card: string;
        cons: string;
        title: string;
        status: string;
        img: string | undefined;
        description: string;
        act: string;
        time: string;
      },
      i: number
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  type: string;
  title: string;
  cons: string;
  data: string;
  status: string;
}
export interface Video {
  type: string;
  img: string;
  title: string;
  description: string;
  data: string;
}
export interface Activity {
  type: string;
  img: string;
  title: string;
  act: string;
  data: string;
  time: string;
}
