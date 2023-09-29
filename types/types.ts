export interface IMessage {
    name?: string;
    text: string;
    content: string;
    id: string;
    socketID: string;
  }

  export interface IUser {
    userName: string;
    socketID: string;
  }

  export type ChatBodyProps = {
    messages: IMessage[];
    lastMessageRef: React.MutableRefObject<HTMLDivElement | null>;
    typingStatus: any
  };