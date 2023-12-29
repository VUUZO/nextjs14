import { Bold } from "lucide-react"
import { Button } from "../ui/button"
import { Toggle } from "../ui/toggle"
import { Item } from "./MenuBar"

export const MenuItem = ({
  Icon, title, action, isActive = false
}: Item) => {
  return (
    <Toggle
      size={"sm"}
      pressed={isActive}
      onPressedChange={action}
      title={title}
      className={`p-0 ${isActive ? 'text-primary-500 dark:text-primary-500/70' : ''}`}
    >
      <Icon />
    </Toggle>
  )
}