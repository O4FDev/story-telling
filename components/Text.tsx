import { FC } from 'react'

interface Props {
  children: any
  type: string
}

const Text: FC<Props> = ({ children, type }) => {
  switch (type) {
    case 'heading':
      return (
        <h1 className="text-3xl border font-bold text-transparent md:text-5xl">
          {children}
        </h1>
      )
    default:
      return <p>{children}</p>
  }
}

export default Text
