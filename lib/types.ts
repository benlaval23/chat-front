import { type Message } from 'ai'

export interface Chat extends Record<string, any> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  messages: Message[]
  sharePath?: string
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>

export interface OutputProps extends React.ComponentProps<'div'> {
  className?: string
  output?: any
}

export interface ListProps extends React.ComponentProps<'div'> {
  className?: string,
  output?: any
}


export interface SettingsProps extends React.ComponentProps<'div'> {
  className?: string
}

export interface SidePanelProps extends React.ComponentProps<'div'> {
  source: Source
  close: any
  cancel: any
}

export interface ItemProps extends React.ComponentProps<'div'> {
  className?: string,
  output?: object,
}


export interface Source {
  name: string,
  imagePath: string
}