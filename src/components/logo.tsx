import { RocketIcon } from '@radix-ui/react-icons'

export function Logo() {
  return (
    <div className="bg-primary h-6 w-6 flex items-center justify-center rounded-md flex-row">
      <div className="flex flex-row gap-20">
        <RocketIcon className="w-3 h-3 text-primary-foreground" />
        LowMS
      </div>
    </div>
  )
}
